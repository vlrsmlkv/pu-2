import { connect } from "react-redux";

import classNames from "classnames";

import ExcelTable from "../ExcelTable";

import { processDataAction } from "../../store/actions";

import "./PreviewProcessedData.scss";

const PreviewProcessedData = ({
  isDisabledShowButton,
  data,
  isActiveAdditionalSheets,
  onShowClick,
  headerCells,
}) => {
  const getTablesData = () => {
    if (!data) {
      return [];
    };

    return isActiveAdditionalSheets
      ? [
        {
          title: "Свод",
          data: data.flat()
        }, 
        ...data.map((data, index) => ({
          title: `Sheet ${index+1}`, 
          data
        }))
      ]
      : [
        {
          title: "Свод",
          data: data.flat()
        }
      ];
  }

  return <div className="preview-container"> 
    {
      !data
        ? <button 
            className="show-preview-button"
            disabled={isDisabledShowButton}
            onClick={onShowClick}>
              <span 
                className={classNames("preview-title", !isDisabledShowButton && "is-active")}
              >
                Show preview
              </span>
          </button>
        : <ExcelTable
            headerCells={headerCells}
            tablesData={getTablesData()}
        />
    }
  </div>
};

const mapStateToProps = (state) => ({
  isDisabledShowButton: !state.rawData,
  isActiveAdditionalSheets: state.isActiveAdditionalSheets,
  data: state.data
});

const mapDispatchToProps = (dispatch) => ({
  onShowClick: () => dispatch(processDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewProcessedData);