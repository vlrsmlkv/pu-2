import React, {useState} from 'react';

import FileField from "./components/FileField";
import PreviewProcessedData from "./components/PreviewProcessedData";

import {createExcelFile, downloadFinalXLSX} from "./utils.js"

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const getProcessedData = (initialData) => JSON
    .parse(initialData)
    .data.map(({r1, r2, ils, fzl, izl, ozl}) => ({
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
    }));

  return (
    <div className="App">
      <FileField
        value={fileData}
        onChange={setFileData}
      />

      <div>
        <button onClick={() => setProcessedData(
          getProcessedData(fileData)
        )}>
          Process Files
        </button>

        <button onClick={() => downloadFinalXLSX(createExcelFile(processedData))}>Download</button>

      </div>

      <PreviewProcessedData data={processedData}/>
    </div>
  );
}

export default App;


