export function changeFormat(state, format) {
  return { ...state, format };
}

export function parsed(state, { quads, serialized }) {
  return {
    ...state,
    quads,
    graph: serialized
  };
}

export function addPrefix(state, prefix) {
  return {
    ...state,
    prefixes: [...new Set([...state.prefixes, prefix])]
  };
}

export function removePrefix(state, prefix) {
  return {
    ...state,
    prefixes: state.prefixes.filter(p => p !== prefix)
  };
}
