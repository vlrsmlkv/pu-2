import React from 'react';

const CheckBox = ({value, onChange}) => {
  const onChangeHandler = (event) => {
      onChange(event.target.checked);
  }

  return (
    <div className ="checkbox-container">
      <input type="checkbox" id="checkbox" className="checkbox" value={value} onChange={onChangeHandler}/>
      <label htmlFor="checkbox" className="checkbox-label">Отображать каждый файл на отдельном листе</label> 
    </div>
  )
}

export default CheckBox;