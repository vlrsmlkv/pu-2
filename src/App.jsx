import React, {useState, useEffect} from "react";

import FileField from "./components/FileField";
import CheckBox from "./components/CheckBox";

import PreviewProcessedData from "./components/PreviewProcessedData";

import {createExcelFile, downloadExcelFile, getProcessedData} from "./utils.js"

import { Download } from 'react-feather';

import { ws_header } from './consts';

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div>
          <p>Шаг 1</p>
            <div className="file-field-and-checkbox">
            <FileField
              onChange={setFileData}
              setProcessedData={setProcessedData}
              />

            <CheckBox
              value={checkboxState}
              onChange={setCheckboxState}
            />
          </div>
        </div>

        <div>
          <p>Шаг 2</p>
          <button 
            className="download-button"
            disabled={!processedData}
            onClick={() => downloadExcelFile(createExcelFile(processedData, checkboxState))}
          >
            <span>Скачать <Download/></span>
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

    </div>
  );
}

export default App;