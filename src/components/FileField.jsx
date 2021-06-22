import React from 'react';

const FileField = ({value, onChange}) => {
    const onFileChangeHandler = (event) => {
        
        if (event.target.files !== ' ') {

            const {files} = event.target;

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
        <input type="file" onChange={onFileChangeHandler} multiple="multiple"/>
    )
}

export default FileField;