import { createModel } from "@captaincodeman/rdx";
import * as playgroundLib from "@zazuko/shacl-playground";

const initialUrl = new URL(window.location.href);
const sharingParams = Object.fromEntries([
  ...new URLSearchParams(initialUrl.hash.substr(1)).entries(),
]);

export const playground = createModel({
  state: {
    page: 3,
    shaperone: new URL("https://forms.hypermedia.app/playground/").toString(),
    sharingLink: initialUrl.toString(),
    sharingParams,
  },
  reducers: {
    switchPage(state, page) {
      return { ...state, page };
    },
    setShaperoneParam(state, { key, value }) {
      const url = new URL(state.shaperone);
      const params = new URLSearchParams(url.hash.substr(1));
      params.set(key, value);
      url.hash = params.toString();

      return {
        ...state,
        shaperone: url.toString(),
      };
    },
    setSharingLink(state, sharingLink) {
      return { ...state, sharingLink };
    },
    setSharingParam(state, { key, value }) {
      const { shapesGraph, dataGraph, ...options } = state.sharingParams || {};

      return {
        ...state,
        sharingParams: {
          shapesGraph,
          dataGraph,
          ...options,
          [key]: value,
        },
      };
    },
  },
  effects(store) {
    const dispatch = store.getDispatch();

    return {
      switchPage(value) {
        dispatch.playground.setSharingParam({
          key: "page",
          value,
        });
      },
      async setSharingParam() {
        const { shapesGraph, dataGraph, ...options } =
          store.getState().playground.sharingParams;

        const sharingLink = await playgroundLib.createPlaygroundUrl(
          shapesGraph,
          dataGraph,
          {
            ...options,
            instanceUrl: window.location.href,
          }
        );

        dispatch.playground.setSharingLink(sharingLink);
      },
      "dataGraph/parsed": function ({ serialized }) {
        const { format } = store.getState().dataGraph;

        dispatch.playground.setShaperoneParam({
          key: "resource",
          value: serialized,
        });
        dispatch.playground.setShaperoneParam({
          key: "resourceFormat",
          value: format,
        });

        dispatch.playground.setSharingParam({
          key: "dataGraph",
          value: serialized,
        });
        dispatch.playground.setSharingParam({
          key: "dataGraphFormat",
          value: format,
        });
      },
      "shapesGraph/parsed": function ({ serialized }) {
        const { format } = store.getState().shapesGraph;

        dispatch.playground.setShaperoneParam({
          key: "shapes",
          value: serialized,
        });
        dispatch.playground.setShaperoneParam({
          key: "shapesFormat",
          value: format,
        });

        dispatch.playground.setSharingParam({
          key: "shapesGraph",
          value: serialized,
        });
        dispatch.playground.setSharingParam({
          key: "shapesGraphFormat",
          value: format,
        });
      },
      "dataGraph/setCustomPrefix": function () {
        dispatch.playground.setSharingParam({
          key: "dataGraphCustomPrefixes",
          value: store.getState().dataGraph.customPrefixes,
        });
      },
      "shapesGraph/setCustomPrefix": function () {
        dispatch.playground.setSharingParam({
          key: "shapesGraphCustomPrefixes",
          value: store.getState().shapesGraph.customPrefixes,
        });
      },
      restoreState() {
        const url = new URL(document.location.toString());
        const hash = new URLSearchParams(url.hash.substr(1));

        function getParam(name) {
          return hash.get(name) || url.searchParams.get(name);
        }

        const page = getParam("page");
        const shapesGraph = getParam("shapesGraph");
        const shapesGraphFormat = getParam("shapesGraphFormat");
        const shapesGraphCustomPrefixes = getParam("shapesGraphCustomPrefixes");
        const dataGraph = getParam("dataGraph");
        const dataGraphFormat = getParam("dataGraphFormat");
        const dataGraphCustomPrefixes = getParam("dataGraphCustomPrefixes");

        if (page) {
          dispatch.playground.switchPage(Number.parseInt(page, 10));
        }
        if (shapesGraph) {
          dispatch.shapesGraph.setGraph(shapesGraph);
        }
        if (shapesGraphFormat) {
          dispatch.shapesGraph.changeFormat(shapesGraphFormat);
        }
        if (shapesGraphCustomPrefixes) {
          dispatch.shapesGraph.replaceCustomPrefixes(
            JSON.parse(shapesGraphCustomPrefixes)
          );
        }
        if (dataGraph) {
          dispatch.dataGraph.setGraph(dataGraph);
        }
        if (dataGraphFormat) {
          dispatch.dataGraph.changeFormat(dataGraphFormat);
        }
        if (dataGraphCustomPrefixes) {
          dispatch.dataGraph.replaceCustomPrefixes(
            JSON.parse(dataGraphCustomPrefixes)
          );
        }

        [...url.searchParams.keys()].forEach((key) =>
          url.searchParams.delete(key)
        );
        url.hash = "";
        window.history.replaceState(null, "", url.toString());
      },
    };
  },
});
