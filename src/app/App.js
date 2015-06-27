import React from "react";
import tree from "./tree";
import Suburb from "../components/Suburb";
import {root} from 'baobab-react/higher-order';

let Application = React.createClass({
  render() {
    return (
      <div>
        <Suburb />
      </div>
    );
  }
});

export default root(Application, tree);