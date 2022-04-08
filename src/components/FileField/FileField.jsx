import React, {useState} from 'react';
import { connect } from "react-redux";
import { Paperclip } from 'react-feather';

import { setRawDataAction, setDataAction } from "../../store/actions";

import "./FileField.scss";

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
  
  const inputFileLabel = <div>
    {filesNumber > 1 
      ? `Selected files: ${filesNumber}`
      : (filesNumber === 1) 
        ? `${filesNameList}`
        : <>Choose file(s) <span><Paperclip/></span></>
    }
  </div> 
  
  return (
    <div className="input-field">
      <p>Step 1</p>
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

const mapDispatchToProps = (dispatch) => ({
  onChange: (data) => {
    dispatch(setRawDataAction(data));
    dispatch(setDataAction(null));
  }
})

export default connect(null, mapDispatchToProps)(FileField);