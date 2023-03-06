export function changeFormat(state, format) {
  return { ...state, format };
}

export function parsed(state, { quads, serialized }) {
  return {
    ...state,
    quads,
    graph: serialized,
  };
}

export function setGraph(state, graph) {
  return {
    ...state,
    graph,
  };
}

export function addPrefix(state, prefix) {
  return {
    ...state,
    prefixes: [...new Set([...state.prefixes, prefix])],
  };
}

export function removePrefix(state, prefix) {
  return {
    ...state,
    prefixes: state.prefixes.filter((p) => p !== prefix),
  };
}

export function setCustomPrefix(state, { prefix, namespace }) {
  if (typeof prefix !== "string" || typeof namespace !== "string") {
    return state;
  }

  const customPrefixes = { ...state.customPrefixes };

  if (!namespace) {
    delete customPrefixes[prefix];
  } else {
    customPrefixes[prefix] = namespace;
  }

  return {
    ...state,
    customPrefixes,
  };
}

export function replaceCustomPrefixes(state, prefixes) {
  return {
    ...state,
    customPrefixes: prefixes,
  };
}
