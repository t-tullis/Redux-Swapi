import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import  { getData } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getData()
  }

  render() {
    if (this.props.isLoading) {
      <h1>Loading star wars characters ...</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  console.log(state)
  return {
    isLoading: state.charsReducer.isLoading,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData }
)(CharacterListView);
