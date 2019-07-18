import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Tag from "./components/Tag";
import {
  getAvailableTags,
  getSelectedTags,
  saveSelectedTags
} from "./store/actions";

function App(props) {
  let { availableTags } = props;
  useEffect(() => {
    getAvailableTags();
    getSelectedTags();
  }, []);

  return (
    <div className="container">
      <h1> Intrests</h1>
      {availableTags.map(tag => (
        <Tag key={tag.id} id={tag.id} title={tag.title} />
      ))}
      <div style={{ marginTop: "10px" }}>
        <button className="btn" onClick={() => props.saveSelectedTags()}>
          Save
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ availableTags, selectedTags }) => ({
  availableTags,
  selectedTags
});

const mapDispatchToProps = dispatch => ({
  getAvailableTags: dispatch(getAvailableTags()),
  getSelectedTags: dispatch(getSelectedTags()),
  saveSelectedTags: () => dispatch(saveSelectedTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
