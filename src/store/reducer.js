import {
  AVAILABLE_TAGS_PENGING,
  AVAILABLE_TAGS_SUCCESS,
  AVAILABLE_TAGS_ERROR,
  SELECTED_TAGS_PENGING,
  SELECTED_TAGS_SUCCESS,
  SELECTED_TAGS_ERROR,
  HANDLE_TAG_CLICK
} from "./actions";

import { find, filter } from "lodash";

const initialState = {
  availableTags: [],
  selectedTags: [],
  availableTagsLoading: false,
  availableTagsSuccess: false,
  selectedTagsLoading: false,
  selectedTagsSuccess: false
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case AVAILABLE_TAGS_PENGING:
      return {
        ...state,
        availableTagsLoading: true,
        availableTagsSuccess: false
      };
    case AVAILABLE_TAGS_SUCCESS:
      return {
        ...state,
        availableTagsLoading: false,
        availableTagsSuccess: true,
        availableTags: action.payload
      };

    case SELECTED_TAGS_PENGING:
      return {
        ...state,
        selectedTagsLoading: true,
        selectedTagsSuccess: false
      };
    case SELECTED_TAGS_SUCCESS:
      return {
        ...state,
        selectedTagsLoading: false,
        selectedTagsSuccess: true,
        selectedTags: action.payload[0].intrests
      };
    case HANDLE_TAG_CLICK:
      if (find(state.selectedTags, action.tag)) {
        return {
          ...state,
          selectedTags: filter(
            state.selectedTags,
            ({ id }) => id !== action.tag.id
          )
        };
      } else {
        return {
          ...state,
          selectedTags: [...state.selectedTags, action.tag]
        };
      }
    default:
      return state;
  }
};

export default reducer;
