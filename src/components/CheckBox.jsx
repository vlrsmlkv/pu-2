import React from 'react';

const CheckBox = ({onChange}) => {
    const onCheckboxChangeHandler = (event) => {
        let isChecked = event.target.checked;
        onChange(isChecked);
    }

    return (
        <div className ="checkbox-container">
            <input type="checkbox" id="checkbox" className="checkbox" onChange={onCheckboxChangeHandler}/>
            <label htmlFor="checkbox" className="checkbox-label">Отображать каждый файл на отдельном листе</label> 
        </div>
    )
}


export default CheckBox;