import React, {useState} from "react";

import FileField from "../components/FileField";
import CheckBox from "../components/CheckBox";

import PreviewProcessedData from "../components/PreviewProcessedData";

import {createExcelFile, downloadExcelFile, getProcessedData} from "../utils";

import { Download } from 'react-feather';

import { ws_header } from '../consts';

const Main = () => {
  const [fileData, setFileData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <>
      <div className="container">
        <div>
          <div className="file-field-and-checkbox">
            <FileField
              onChange={(data) => {
                setFileData(data);
                setProcessedData(null);
              }}
            />

            <CheckBox
              value={checkboxState}
              onChange={setCheckboxState}
            />
          </div>
        </div>

        <div>
          <p>Step 2</p>
          <button 
            className="download-button"
            disabled={!processedData}
            onClick={() => downloadExcelFile(createExcelFile(processedData, checkboxState))}
          >
            <span>Download <Download/></span>
          </button>
        </div>
      </div>

      <PreviewProcessedData
        isDisabledShowButton={!fileData}
        onShowClick={() => setProcessedData(getProcessedData(fileData))}
        data={processedData}
        headerCells={ws_header}
        isVisibleButtons={checkboxState}
      />
    </>
  );
}

export default Main;
