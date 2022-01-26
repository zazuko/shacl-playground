import { createStore, persist } from "@captaincodeman/rdx";
import * as models from "./models.js";

export const store = persist(
  createStore({
    models
  }),
  {
    persist(state) {
      const {
        dataGraph: { quads: dQuads, ...dataGraph },
        shapesGraph: { quads: sQuads, ...shapesGraph },
        validation,
        ...toPersist
      } = state;
      return {
        shapesGraph,
        dataGraph,
        ...toPersist
      };
    }
  }
);
