import { createModel } from "@captaincodeman/rdx";
import rdf from "../../env.js";

export const validation = createModel({
  state: {
    display: "tree",
    conforms: undefined,
    results: [],
  },
  reducers: {
    report(state, report) {
      const results = report.results.map(rdf.clownface);

      return {
        ...state,
        results,
        conforms: report.conforms,
        report,
      };
    },
    display(state, display) {
      return { ...state, display };
    },
  },
  effects(store) {
    const dispatch = store.getDispatch();

    async function validate() {
      const { shapesGraph, dataGraph } = store.getState();

      if (shapesGraph.quads && dataGraph.quads) {
        const Validator = (await import("rdf-validate-shacl")).default;

        const validator = new Validator(rdf.dataset(shapesGraph.quads));
        dispatch.validation.report(
          await validator.validate(rdf.dataset(dataGraph.quads))
        );
      }
    }

    return {
      "dataGraph/parsed": validate,
      "shapesGraph/parsed": validate,
    };
  },
});
