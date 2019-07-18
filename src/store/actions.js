import Axios from "axios";

export const AVAILABLE_TAGS_SUCCESS = "AVAILABLE_TAGS_SUCCESS";
export const AVAILABLE_TAGS_ERROR = "AVAILABLE_TAGS_ERROR";
export const AVAILABLE_TAGS_PENGING = "AVAILABLE_TAGS_PENGING";

export const SELECTED_TAGS_SUCCESS = "SELECTED_TAGS_SUCCESS";
export const SELECTED_TAGS_ERROR = "SELECTED_TAGS_ERROR";
export const SELECTED_TAGS_PENGING = "SELECTED_TAGS_PENGING";

export const HANDLE_TAG_CLICK = "HANDLE_TAG_CLICK";

export const UPDATE_SELECTED_TAG_PENDING = "UPDATE_SELECTED_TAG_PENDING";
export const UPDATE_SELECTED_TAG_SUCCESS = "UPDATE_SELECTED_TAG_SUCCESS";
export const UPDATE_SELECTED_TAG_ERROR = "UPDATE_SELECTED_TAG_ERROR";

export const getAvailableTags = () => {
  return dispatch => {
    dispatch({ type: AVAILABLE_TAGS_PENGING });
    Axios.get("http://localhost:3000/intrests/")
      .then(resp =>
        dispatch({ type: AVAILABLE_TAGS_SUCCESS, payload: resp.data })
      )
      .catch(err => dispatch({ type: AVAILABLE_TAGS_ERROR, payload: err.msg }));
  };
};

export const getSelectedTags = () => {
  return dispatch => {
    dispatch({ type: SELECTED_TAGS_PENGING });
    Axios.get("http://localhost:3000/selected_intrests/")
      .then(resp =>
        dispatch({ type: SELECTED_TAGS_SUCCESS, payload: resp.data })
      )
      .catch(err => dispatch({ type: SELECTED_TAGS_ERROR, payload: err.msg }));
  };
};

export const handleTagClick = (id, title) => {
  return { type: HANDLE_TAG_CLICK, tag: { id, title } };
};

export const saveSelectedTags = () => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_SELECTED_TAG_PENDING });
    Axios.patch("http://localhost:3000/selected_intrests/1", {
      id: 1,
      intrests: getState().selectedTags
    })
      .then(resp =>
        dispatch({ type: UPDATE_SELECTED_TAG_SUCCESS, payload: resp.data })
      )
      .catch(err =>
        dispatch({ type: UPDATE_SELECTED_TAG_ERROR, payload: err.msg })
      );
  };
};
