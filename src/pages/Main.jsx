import React, {useState} from "react";

import FileField from "../components/FileField";
import CheckBox from "../components/CheckBox";

import PreviewProcessedData from "../components/PreviewProcessedData";

import {createExcelFile, downloadExcelFile, getProcessedData} from "../utils";

import { Download } from 'react-feather';

const Main = () => {

  const [fileData, setFileData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <>
      <div className="file-field-and-checkbox">
      <FileField
        onChange={setFileData}
      />

      <CheckBox
        value={checkboxState}
        onChange={setCheckboxState}
      />
      </div>

      <div className="process-button">
        <p>Шаг 2</p>
        <button 
          disabled={!fileData}   
          onClick={() => setProcessedData(getProcessedData(fileData))}>
          <span>Обработать файлы</span>
        </button>
        <PreviewProcessedData data={processedData}/>
      </div>

      <div className="download-button">
        <p>Шаг 3</p>
        <button 
          disabled={!processedData}
          onClick={() => downloadExcelFile(createExcelFile(processedData, checkboxState))}>
          <span>Скачать <Download/></span>
        </button>
      </div>
    </>
)

}

export default Main;