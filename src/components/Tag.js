import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { find } from "lodash";
import { handleTagClick } from "../store/actions";

function Tag({ id, title, handleTagClick, selectedTags }) {
  return (
    <div
      key={id}
      className={`chip ${
        find(selectedTags, { id: id }) ? "chip-selected" : null
      }`}
      onClick={e => handleTagClick(id, title)}
    >
      {title}
    </div>
  );
}

Tag.propTypes = {};

const mapStateToProps = ({ selectedTags }) => ({ selectedTags });

const mapDispatchToProps = dispatch => ({
  handleTagClick: (id, title) => dispatch(handleTagClick(id, title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
