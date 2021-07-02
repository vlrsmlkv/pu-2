import React, {useState} from "react";

import FileField from "./components/FileField";
import CheckBox from "./components/CheckBox";

import PreviewProcessedData from "./components/PreviewProcessedData";

import {createExcelFile, downloadFinalXLSX, getProcessedData} from "./utils.js"

import { BsDownload } from "react-icons/bs";

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [checkboxState, setCheckboxState] = useState(null);

  return (
    <div className="App">

      <div className="file-field-and-checkbox">
      <FileField
        onChange={setFileData}
      />

      <CheckBox
        onChange={setCheckboxState}
      />
      </div>

      <div className="process-button">
        <p>Шаг 2</p>
        <button 
          disabled={!fileData}   
          onClick={() => setProcessedData(
            getProcessedData(fileData)
          )}>
          Обработать файлы
        </button>
        <PreviewProcessedData data={processedData}/>
      </div>

      <div className="download-button">
        <p>Шаг 3</p>
        <button 
          disabled={!processedData}
          onClick={() => downloadFinalXLSX(createExcelFile(processedData, checkboxState))}>
          <span>Скачать <BsDownload size ="25px"/></span>
        </button>
      </div>
      
    </div>
  );
}

export default App;