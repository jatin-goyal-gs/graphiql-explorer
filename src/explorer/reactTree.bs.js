/* eslint-disable */
// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require('reason-react/src/ReasonReact.js');
var ReactTreeview = require('react-treeview');

function make(nodeLabel, children) {
  return ReasonReact.wrapJsForReason(
    ReactTreeview,
    {
      nodeLabel: nodeLabel,
    },
    children,
  );
}

exports.make = make;
/* ReasonReact Not a pure module */