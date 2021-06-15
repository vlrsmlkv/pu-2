import React from 'react';

const FileField = ({value, onChange}) => {
    const onFileChangeHandler = (event) => {
        
        if (event.target.files !== ' ') {

            const {files} = event.target;

            if (files.length) {
                for (let i = 0; i < files.length; i++) {

                    const reader = new FileReader();

                    reader.onload = (event) => {
                        onChange(event.target.result);
                    }

                    reader.readAsText(files[i]);

                }
            }
        }
    }

    return (
        <input type="file" onChange={onFileChangeHandler} multiple="multiple"/>
    )
}

export default FileField;