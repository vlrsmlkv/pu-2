import { connect } from "react-redux";
import { Download } from "react-feather";

import { createExcelFile, downloadExcelFile } from "../utils";

const DownloadButton = ({disabled, onDownload}) => (
  <div>
    <p>Step 2</p>
    <button 
      className="download-button"
      disabled={disabled}
      onClick={onDownload}
    >
      <span>Download <Download /></span>
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  disabled: !state.data,
  onDownload: () => downloadExcelFile(createExcelFile(state.data, state.isActiveAdditionalSheets))
});

export default connect(mapStateToProps)(DownloadButton);