const { turtle } = require("@tpluscode/rdf-string");

function createPlaygroundUrl(shapesGraph, dataGraph) {
  const url = new URL("https://shacl-playground.zazuko.com/");
  const hash = new URLSearchParams([
    ["shapesGraph", turtle`${shapesGraph}`.toString()],
    ["dataGraph", turtle`${dataGraph}`.toString()],
    ["shapesGraphFormat", "text/turtle"],
    ["dataGraphFormat", "text/turtle"],
  ]);

  url.hash = hash.toString();
  return url.toString();
}

module.exports = {
  createPlaygroundUrl,
};
