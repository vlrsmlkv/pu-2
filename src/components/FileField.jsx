import React from 'react';

const FileField = ({value, onChange}) => {
    const onFileChangeHandler = (event) => {
        
        if (event.target.files !== ' ') {

            const {files} = event.target;

            let filesData = [];

            if (files.length) {

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();

                    reader.onload = (event) => {
                        filesData.push(event.target.result);
                    }        

                    reader.readAsText(files[i]);
                }

                onChange(filesData);
            }   
        }   
    }

    return (
        <input type="file" onChange={onFileChangeHandler} multiple="multiple"/>
    )
}

export default FileField;