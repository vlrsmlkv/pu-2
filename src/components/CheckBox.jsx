import React from 'react';

const CheckBox = ({onChange}) => {
    const onChangeHandler = (event) => {
        onChange(event.target.checked);
    }

    return (
        <div className ="checkbox-container">
            <input type="checkbox" className="checkbox" onChange={onChangeHandler}/>
            <label htmlFor="checkbox" className="checkbox-label">Отображать каждый файл на отдельном листе</label> 
        </div>
    )
}


export default CheckBox;