import { getProcessedData } from "../utils";
import {
  TOGGLE_IS_ACTIVE_ADDITIONAL_SHEETS,
  SET_RAW_DATA,
  SET_DATA,
  PROCESS_DATA
} from "./actions";

const initState = {
  data: null,
  rawData: null,
  isActiveAdditionalSheets: false,
  isPreviewShown: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_IS_ACTIVE_ADDITIONAL_SHEETS:
      return {
        ...state,
        isActiveAdditionalSheets: action.payload.value
      };
    case SET_RAW_DATA:
      return {
        ...state,
        rawData: action.payload.data
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload.data
      };
    case PROCESS_DATA:
      return {
        ...state,
        data: getProcessedData(state.rawData)
      };
    
    default:
      return state;
  }
}

export default reducer;