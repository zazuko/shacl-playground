const { turtle } = require("@tpluscode/rdf-string");

function createPlaygroundUrl(
  shapesGraph,
  dataGraph,
  {
    instanceUrl = "https://shacl-playground.zazuko.com",
    dataGraphFormat = "text/turtle",
    shapesGraphFormat = "text/turtle",
    dataGraphCustomPrefixes,
    shapesGraphCustomPrefixes,
  } = {}
) {
  const url = new URL(instanceUrl);
  const hash = new URLSearchParams([
    ["shapesGraph", turtle`${shapesGraph}`.toString()],
    ["dataGraph", turtle`${dataGraph}`.toString()],
    ["shapesGraphFormat", shapesGraphFormat],
    ["dataGraphFormat", dataGraphFormat],
  ]);

  if (dataGraphCustomPrefixes) {
    hash.set(
      "dataGraphCustomPrefixes",
      JSON.stringify(dataGraphCustomPrefixes)
    );
  }
  if (shapesGraphCustomPrefixes) {
    hash.set(
      "shapesGraphCustomPrefixes",
      JSON.stringify(shapesGraphCustomPrefixes)
    );
  }

  url.hash = hash.toString();
  return url.toString();
}

module.exports = {
  createPlaygroundUrl,
};
