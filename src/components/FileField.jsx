import React, {useState} from 'react';
import { Paperclip } from 'react-feather';

const FileField = ({onChange}) => {
  const [filesNumber, setFilesNumber] = useState(null);
  const [filesNameList, setFilesNameList] = useState(null);
  
  const onFileChangeHandler = (event) => {
    const {files} = event.target;
    
    setFilesNumber(files.length)
    setFilesNameList(files[0].name)
    
    if (files !== ' ') {
        
      if (files.length) {

        let filesData = [];
        let i = 0;

        const reader = new FileReader();
        reader.onload = (event) => {
          i++; 
          filesData.push(event.target.result);    
          if (i < files.length) reader.readAsText(files[i]);
          if (i === files.length) onChange(filesData);
        }           

        if (i === 0) reader.readAsText(files[0]);
      }
    }
  }
  
  const inputFileLabel = <span className="button-content"> 
    {filesNumber > 1 
      ? `Выбрано файлов: ${filesNumber}`
      : (filesNumber === 1) 
        ? `${filesNameList}`
        : <>Выбрать файлы <Paperclip/></>
    }
  </span> 
  
  return (
    <div className = "input-field">
      <input
        type="file" 
        id="inputFile" 
        onChange={onFileChangeHandler} 
        accept=" .txt" 
        multiple="multiple"
      />
      <label 
        htmlFor="inputFile" 
        className="input-field-label"
      > 
        {inputFileLabel}
      </label>
    </div>
  )
}

export default FileField;