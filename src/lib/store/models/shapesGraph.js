import { createModel } from "@captaincodeman/rdx";
// eslint-disable-next-line import/no-unresolved
import shapes from "../../graphs/shapes.ttl?raw";
import * as graphReducers from "./graphReducers.js";

export const shapesGraph = createModel({
  state: {
    format: "text/turtle",
    graph: shapes,
    prefixes: ["sh", "schema"],
    customPrefixes: {}
  },
  reducers: {
    ...graphReducers
  }
});
