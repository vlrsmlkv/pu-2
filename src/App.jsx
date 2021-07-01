import React, {useState} from "react";

import FileField from "./components/FileField";
import CheckBox from "./components/CheckBox";

import PreviewProcessedData from "./components/PreviewProcessedData";

import {createExcelFile, createExcelFile2, downloadFinalXLSX} from "./utils.js"

import { BsDownload } from "react-icons/bs";

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [checkbox, setCheckbox] = useState(null);

  let processedDataFromMultipleFiles = [];
  
  const getProcessedData = (initialData) => {
  
    initialData.forEach(el => processedDataFromMultipleFiles.push(JSON.parse(el)
      .data
      .map(({r1, r2, ils, fzl, izl, ozl}) => ({
            ils: {
              value: ils || "",
              name: "Страховой номер"
            }, 
            fzl: {
              value: fzl || "",
              name: "Фамилия"
            },
            izl: {
              value: izl || "",
              name: "Имя"
            },
            ozl: {
              value: ozl || "",
              name: "Отчество"
            },
            dto1: {
              value: r1[0].dto1 || "",
              name: "Дата увольнения"
            },
            dfr21: {
              value: r2[0].dfr21 || "",
              name: "Дата приема - перевода"
            },
          }))
        ))

    return processedDataFromMultipleFiles;
  }

  const createExcelFileDependingOnCheckboxState = (data) => {
    (!checkbox) ? downloadFinalXLSX(createExcelFile(data)) : downloadFinalXLSX(createExcelFile2(data))
  }

  return (
    <div className="App">

      <div className="fileFieldAndCheckBox">
      <FileField
        value={fileData}
        onChange={setFileData}
      />

      <CheckBox
        value={checkbox}
        onChange={setCheckbox}
      />
      </div>

      <div className ="process-button">
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

      <div className ="download-button">
        <p>Шаг 3</p>
        <button 
          disabled={!processedData}
          onClick={()=>createExcelFileDependingOnCheckboxState(processedData)}><span>Скачать <BsDownload size ="25px"/></span></button>
      </div>
      
    </div>
  );
}

export default App;


