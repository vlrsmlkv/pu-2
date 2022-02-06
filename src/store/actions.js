export const TOGGLE_IS_ACTIVE_ADDITIONAL_SHEETS = "TOGGLE_IS_ACTIVE_ADDITIONAL_SHEETS";
export const SET_RAW_DATA = "SET_RAW_DATA";
export const SET_DATA = "SET_DATA";
export const PROCESS_DATA = "PROCESS_DATA";

export const toggleIsActiveAdditionalSheets = (value) => ({
  type: TOGGLE_IS_ACTIVE_ADDITIONAL_SHEETS, 
  payload: {value}
});

export const setRawDataAction = (data) => ({
  type: SET_RAW_DATA, 
  payload: {data}
});

export const setDataAction = (data) => ({
  type: SET_DATA, 
  payload: {data}
});

export const processDataAction = () => ({
  type: PROCESS_DATA
});