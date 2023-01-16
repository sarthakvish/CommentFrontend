import {
  GET_ALLCOMMENTS_REQUEST,GET_AllCOMMENTS_SUCCESS,GET_ALLCOMMENTS_FAIL,

  COMMENT_CREATE_REQUEST,COMMENT_CREATE_SUCCESS,COMMENT_CREATE_FAIL,

  COMMENT_DELETE_REQUEST,COMMENT_DELETE_SUCCESS,COMMENT_DELETE_FAIL,} from "../../constants/Constant";

import {apiDeleteCallRequest, apiGetCallRequest, apiPostCallRequest} from "../../commons/CommonFunctions";

import { COMMENTS_URL, RetrieveUpdateDestroyURL} from "../../constants/apiurl";

export const getAllComments = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALLCOMMENTS_REQUEST,
    });

    const headers = {
      Content_type: "application/json",
      // Authorization: `${userInfo.token}` /*we are taking logged in user token and sending*/,
    };

    const { data } = await apiGetCallRequest(COMMENTS_URL, headers);

    dispatch({
      type: GET_AllCOMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALLCOMMENTS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const createComment = (comment) => async (dispatch, getState) => {
  console.log('subActio', comment)
  try{
    dispatch({
      type:COMMENT_CREATE_REQUEST,
    })

    const config = {
      headers:{
        'Content-type':'application/json',

      }
    }

    const {data}=await apiPostCallRequest(
        COMMENTS_URL,
        comment,
        config
    );

    dispatch({
      type:COMMENT_CREATE_SUCCESS,
      payload:data,
    })



  }catch (error){
    dispatch({
      type: COMMENT_CREATE_FAIL,
      payload: error.response && error.response.data.detail
          ? error.response.data.detail : error.message,
    })
  }
}


export const deleteComment = (id) => async (dispatch) => {
  console.log('actId',id)
  try{
    dispatch({
      type:COMMENT_DELETE_REQUEST,
    })

    const config = {
      headers:{
        'Content-type':'application/json',

      }
    }
    const { data } = await apiDeleteCallRequest(
        RetrieveUpdateDestroyURL + id,
        config
    );

    dispatch({
      type:COMMENT_DELETE_SUCCESS
    })

  }catch (error){
    dispatch({
      type: COMMENT_DELETE_FAIL,
      payload: error.response && error.response.data.detail
          ? error.response.data.detail : error.message,
    })
  }
}

