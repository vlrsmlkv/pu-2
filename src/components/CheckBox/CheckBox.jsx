import React from 'react';
import { connect } from 'react-redux';
import { toggleIsActiveAdditionalSheets } from "../../store/actions";

import "./CheckBox.scss";

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

const mapStateToProps = (state) => ({
  value: state.isActiveAdditionalSheets
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(toggleIsActiveAdditionalSheets(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckBox);