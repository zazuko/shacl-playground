import { createModel } from "@captaincodeman/rdx";
import shapes from "../../graphs/shapes.ttl";
import * as graphReducers from "./graphReducers.js";

export const shapesGraph = createModel({
  state: {
    format: "text/turtle",
    graph: shapes,
    prefixes: ["sh", "schema"]
  },
  reducers: {
    ...graphReducers
  }
});
