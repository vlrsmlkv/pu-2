import React, {useState} from 'react';
import { AiOutlinePaperClip } from "react-icons/ai";

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
    
    return (
        <div className = "input-field">
            <p>Шаг 1</p>
            <input  type="file" 
                    id="inputFile" 
                    onChange={onFileChangeHandler} 
                    accept=" .txt" 
                    multiple="multiple"/>
            <label htmlFor="inputFile" className="input-field-label"> 
                    {
                        (filesNumber > 1) 
                        ? `Выбрано файлов: ${filesNumber}` 
                        : (filesNumber === 1) 
                        ? filesNameList
                        : (<>Выбрать файлы <AiOutlinePaperClip size="25px"/></>)
                    }
            </label>
            
        </div>
    )
}

export default FileField;