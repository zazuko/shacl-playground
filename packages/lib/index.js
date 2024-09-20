import { turtle } from "@tpluscode/rdf-string";

async function serialize(dataset, format, prefixes, env) {
  if (env) {
    return env.dataset(dataset).serialize({ format, prefixes });
  }

  return turtle`${dataset}`.toString();
}

export async function createPlaygroundUrl(
  shapesGraph,
  dataGraph,
  {
    instanceUrl = "https://shacl-playground.zazuko.com",
    dataGraphFormat = "text/turtle",
    shapesGraphFormat = "text/turtle",
    prefixes = [],
    dataGraphPrefixes = [],
    dataGraphCustomPrefixes,
    shapesGraphPrefixes = [],
    shapesGraphCustomPrefixes,
    env,
  } = {}
) {
  const url = new URL(instanceUrl);
  const hash = new URLSearchParams([
    [
      "shapesGraph",
      await serialize(
        shapesGraph,
        dataGraphFormat,
        [...prefixes, ...dataGraphPrefixes],
        env
      ),
    ],
    [
      "dataGraph",
      await serialize(
        dataGraph,
        shapesGraphFormat,
        [...prefixes, ...shapesGraphPrefixes],
        env
      ),
    ],
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
