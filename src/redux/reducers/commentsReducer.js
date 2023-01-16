import {
  GET_ALLCOMMENTS_REQUEST,GET_AllCOMMENTS_SUCCESS,GET_ALLCOMMENTS_FAIL,GET_ALLCOMMENTS_RESET,

  COMMENT_CREATE_REQUEST,COMMENT_CREATE_SUCCESS,COMMENT_CREATE_FAIL,COMMENT_CREATE_RESET,

  COMMENT_DELETE_REQUEST,COMMENT_DELETE_SUCCESS,COMMENT_DELETE_FAIL,COMMENT_DELETE_RESET,

  SUBSCRIBER_UPDATE_REQUEST,SUBSCRIBER_UPDATE_SUCCESS,SUBSCRIBER_UPDATE_FAIL,SUBSCRIBER_UPDATE_RESET,

  SUBSCRIBER_DETAILS_REQUEST, SUBSCRIBER_DETAILS_SUCCESS, SUBSCRIBER_DETAILS_FAIL, SUBSCRIBER_DETAILS_RESET
  
} from "../../constants/Constant";

const initialState = {
  commentsInfo: [],
};

export const commentsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLCOMMENTS_REQUEST:
      return { ...state, loading: true };

    case GET_AllCOMMENTS_SUCCESS:
      return { ...state, loading: false, commentsInfo: action.payload };

    case GET_ALLCOMMENTS_FAIL:
      return { ...state, loading: false, error: action.payload };

    case GET_ALLCOMMENTS_RESET:
      return { ...state, commentsInfo: [] };

    default:
      return state;
  }
};


export const commentCreateReducer = (state={}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return {loading: true}

    case COMMENT_CREATE_SUCCESS:
      return {loading: false, success: true, comment:action.payload}

    case COMMENT_CREATE_FAIL:
      return {loading: false, error: action.payload}

    case COMMENT_CREATE_RESET:
      return {}

    default:
      return state
  }
}


export const commentDeleteReducer = (state={}, action) =>{
  switch (action.type){
    case COMMENT_DELETE_REQUEST:
      return {loading:true}

    case COMMENT_DELETE_SUCCESS:
      return {loading:false, success:true}

    case COMMENT_DELETE_FAIL:
      return {loading:false, error:action.payload}

    case COMMENT_DELETE_RESET:
      return {}

    default:
      return state
  }
}

