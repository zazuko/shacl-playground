import { createModel } from "@captaincodeman/rdx";

export const playground = createModel({
  state: {
    page: 3,
    shaperone: new URL("https://forms.hypermedia.app/playground/").toString(),
    sharingLink: new URL(window.location.href).toString()
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
    },
    setSharingParam(state, { key, value }) {
      const url = new URL(state.sharingLink);
      url.searchParams.set(key, value);

      return {
        ...state,
        sharingLink: url.toString()
      };
    }
  },
  effects(store) {
    const dispatch = store.getDispatch();

    return {
      switchPage(value) {
        dispatch.playground.setSharingParam({
          key: "page",
          value
        });
      },
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

        dispatch.playground.setSharingParam({
          key: "dataGraph",
          value: serialized
        });
        dispatch.playground.setSharingParam({
          key: "dataGraphFormat",
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

        dispatch.playground.setSharingParam({
          key: "shapesGraph",
          value: serialized
        });
        dispatch.playground.setSharingParam({
          key: "shapesGraphFormat",
          value: format
        });
      },
      restoreState() {
        const url = new URL(document.location.toString());

        const page = url.searchParams.get("page");
        const shapesGraph = url.searchParams.get("shapesGraph");
        const shapesGraphFormat = url.searchParams.get("shapesGraphFormat");
        const dataGraph = url.searchParams.get("dataGraph");
        const dataGraphFormat = url.searchParams.get("dataGraphFormat");

        if (page) {
          dispatch.playground.switchPage(Number.parseInt(page, 10));
        }
        if (shapesGraph) {
          dispatch.shapesGraph.setGraph(shapesGraph);
        }
        if (shapesGraphFormat) {
          dispatch.shapesGraph.changeFormat(shapesGraphFormat);
        }
        if (dataGraph) {
          dispatch.dataGraph.setGraph(dataGraph);
        }
        if (dataGraphFormat) {
          dispatch.dataGraph.changeFormat(dataGraphFormat);
        }

        [...url.searchParams.keys()].forEach(key =>
          url.searchParams.delete(key)
        );
        window.history.replaceState(null, "", url.toString());
      }
    };
  }
});
