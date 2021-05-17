import { createModel } from "@captaincodeman/rdx";
import data from "../../graphs/data.jsonld";
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
