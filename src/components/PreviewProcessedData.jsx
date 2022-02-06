import { useState } from "react";
import { Eye } from 'react-feather';
import { connect } from "react-redux";

import classNames from "classnames";

import { processDataAction } from "../store/actions";

const PreviewProcessedData = ({
  isDisabledShowButton,
  data,
  onShowClick,
  headerCells,
  isVisibleButtons
}) => {

  const [activeButton, setActiveButton] = useState(-1);
  
  if (!data) return <div className="preview-container">
      <button 
        className="show-preview-button"
        disabled={isDisabledShowButton}
        onClick={onShowClick}>
          <span 
            className={classNames("preview-title", !isDisabledShowButton && "is-active")}
          >
            Show preview <Eye className={classNames("preview-button-icon", !isDisabledShowButton && "is-active")}/>
          </span>
      </button>
  </div>

  return (
    <div className="preview-container">
      <div className="table-content">
        <table>
          <thead className="sticky">
            <tr>
              {headerCells.map((el, index) => <th key={`Table header ${index}`}>{el}</th>)}
            </tr>
          </thead>
          <tbody>
            {(
              activeButton === -1
                ? data.flat()
                : data[activeButton]
            ).map((person, index) => 
              <tr key={`Table row ${index}`}>
                {Object.keys(person).map((key, index) => 
                  <td key={`Table data ${index}`}>
                      {([[person[key].value]])}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        {isVisibleButtons && 
          <div className="tabs-toggler-panel">
            <button 
              className={classNames("preview-button", activeButton === -1 && "is-active")}
              onClick={() => setActiveButton(-1)}
            >
              Свод
            </button>

            {data.map((el, index) => 
              <button 
                key={`Button ${index}`} 
                className={classNames("preview-button", activeButton === index && "is-active")}
                onClick={() => setActiveButton(index)}
              >
                {`Sheet ${index+1}`}
              </button>)}
          </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isDisabledShowButton: !state.rawData,
  isVisibleButtons: state.isActiveAdditionalSheets,
  data: state.data
});

const mapDispatchToProps = (dispatch) => ({
  onShowClick: () => dispatch(processDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewProcessedData);