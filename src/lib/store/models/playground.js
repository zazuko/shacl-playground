import { createModel } from "@captaincodeman/rdx";

export const playground = createModel({
  state: {
    page: 3,
    shaperone: new URL("https://forms.hypermedia.app/playground/").toString()
  },
  reducers: {
    switchPage(state, page) {
      return { ...state, page };
    },
    setShaperoneParam(state, { key, value }) {
      const url = new URL(state.shaperone);
      url.searchParams.set(key, value);

      return {
        ...state,
        shaperone: url.toString()
      };
    }
  },
  effects(store) {
    const dispatch = store.getDispatch();

    return {
      "dataGraph/parsed": function({ serialized }) {
        const { format } = store.getState().dataGraph;

        dispatch.playground.setShaperoneParam({
          key: "resource",
          value: serialized
        });
        dispatch.playground.setShaperoneParam({
          key: "resourceFormat",
          value: format
        });
      },
      "shapesGraph/parsed": function({ serialized }) {
        const { format } = store.getState().shapesGraph;

        dispatch.playground.setShaperoneParam({
          key: "shapes",
          value: serialized
        });
        dispatch.playground.setShaperoneParam({
          key: "shapesFormat",
          value: format
        });
      }
    };
  }
});
