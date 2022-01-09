import React from 'react';

const CheckBox = ({value, onChange}) => {
  const onChangeHandler = (event) => {
      onChange(event.target.checked);
  }

  return (
    <div className ="checkbox-container">
      <input type="checkbox" id="checkbox" className="checkbox" value={value} onChange={onChangeHandler}/>
      <label htmlFor="checkbox" className="checkbox-label">Show each file as a separate sheet</label> 
    </div>
  )
}

export default CheckBox;