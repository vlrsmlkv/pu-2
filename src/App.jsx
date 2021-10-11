import React, {useState} from "react";

import FileField from "./components/FileField";
import CheckBox from "./components/CheckBox";

import PreviewProcessedData from "./components/PreviewProcessedData";

import {createExcelFile, downloadExcelFile, getProcessedData} from "./utils.js"

import { Download } from 'react-feather';

import { ws_header } from './consts.js';

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
          />

          <CheckBox
            value={checkboxState}
            onChange={setCheckboxState}
          />
          </div>
        </div>

        <div>
          <p>Шаг 2</p>
          <button className="process-button"
            disabled={!fileData}   
            onClick={() => setProcessedData(getProcessedData(fileData))}>
            <span>Обработать файлы</span>
          </button>
          {processedData && <div className="processed-data-message">Данные обработаны!</div>}
        </div>

        <div>
          <p>Шаг 3</p>
          <button className="download-button"
            disabled={!processedData}
            onClick={() => downloadExcelFile(createExcelFile(processedData, checkboxState))}>
            <span>Скачать <Download/></span>
          </button>
        </div>
      </div>

      {processedData 
        ? <PreviewProcessedData
          data={processedData}
          header={ws_header}
          isVisibleButtons={checkboxState}
        />
        : <PreviewProcessedData/>
      }
      
    </div>
  );
}

export default App;