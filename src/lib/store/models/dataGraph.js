import { createModel } from "@captaincodeman/rdx";
// eslint-disable-next-line import/no-unresolved
import data from "../../graphs/data.jsonld?raw";
import * as graphReducers from "./graphReducers.js";

export const dataGraph = createModel({
  state: {
    format: "application/ld+json",
    graph: data,
    prefixes: [],
    customPrefixes: {}
  },
  reducers: {
    ...graphReducers
  }
});
