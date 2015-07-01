import React from "react";
import tree from "./tree";
import SuburbList from "../components/SuburbList";
import {root} from 'baobab-react/higher-order';

let Application = React.createClass({
  render() {
    return (
      <div>
        <SuburbList />
      </div>
    );
  }
});

export default root(Application, tree);