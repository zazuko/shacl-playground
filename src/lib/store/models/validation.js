import { createModel } from "@captaincodeman/rdx";
import clownface from "clownface";

export const validation = createModel({
  state: {
    display: "tree",
    conforms: undefined,
    results: []
  },
  reducers: {
    report(state, report) {
      const results = report.results.map(clownface);

      return {
        ...state,
        results,
        conforms: report.conforms,
        report
      };
    },
    display(state, display) {
      return { ...state, display };
    }
  },
  effects(store) {
    const dispatch = store.getDispatch();

    async function validate() {
      const { shapesGraph, dataGraph } = store.getState();

      if (shapesGraph.quads && dataGraph.quads) {
        const Validator = (await import("rdf-validate-shacl")).default;
        const { dataset } = (await import("@rdfjs/dataset")).default;

        const validator = new Validator(dataset(shapesGraph.quads));
        dispatch.validation.report(
          validator.validate(dataset(dataGraph.quads))
        );
      }
    }

    return {
      "dataGraph/parsed": validate,
      "shapesGraph/parsed": validate
    };
  }
});
