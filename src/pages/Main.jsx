import React from "react";

import FileField from "../components/FileField";
import CheckBox from "../components/CheckBox";
import PreviewProcessedData from "../components/PreviewProcessedData";
import DownloadButton from "../components/DownloadButton";

import { ws_header } from '../consts';

const Main = () => (
  <>
    <div className="container">
      <div>
        <div className="file-field-and-checkbox">
          <FileField />
          <CheckBox />
        </div>
      </div>

      <DownloadButton />
    </div>

    <PreviewProcessedData
      headerCells={ws_header}
    />
  </>
);

export default Main;