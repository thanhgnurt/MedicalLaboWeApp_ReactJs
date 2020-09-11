import { getListGroupTest } from "./../../apis/getApis";
import * as testActionTypes from "./../constantActions/test";
import { openLoading, closeLoading } from "./ui";

export const fetchListGroupTestRequest = () => {
  return (dispatch) => {
    dispatch(fetchListGroupTest());
    dispatch(openLoading());
    getListGroupTest()
      .then((data) => {
        dispatch(fetchListGroupTestSuccess(data));
          dispatch(closeLoading());
      })
      .catch((error) => {
        dispatch(fetchListGroupTestFaild(error));
          dispatch(closeLoading());
        
      });
  };
};

export const fetchListGroupTest = () => ({
  type: testActionTypes.FETCH_GROUP_TEST,
});
export const fetchListGroupTestSuccess = (data) => {
  return {
    type: testActionTypes.FETCH_GROUP_TEST_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListGroupTestFaild = (error) => ({
  type: testActionTypes.FETCH_GROUP_TEST_FAILD,
  payload: {
    error,
  },
});
export const selectPaperTest = (paper) => ({
  type: testActionTypes.SELECT_PAPER_TEST,
  paper,
});
