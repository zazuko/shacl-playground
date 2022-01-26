import { createStore, persist } from "@captaincodeman/rdx";
import * as models from "./models.js";

export const store = persist(
  createStore({
    models
  }),
  {
    persist(state) {
      const { validation, ...toPersist } = state;
      return toPersist;
    }
  }
);
