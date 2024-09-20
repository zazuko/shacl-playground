import $rdf from "@zazuko/env";
import pretty from "@rdfjs-elements/formats-pretty";
import * as assert from "assert";
import { createPlaygroundUrl } from "../index.js";

$rdf.formats.import(pretty);

const { rdf, schema, sh } = $rdf.ns;

describe("@zazuko/shacl-playground", () => {
  describe("createPlaygroundUrl", () => {
    it("shortens datasets to turtle", async () => {
      // given
      const shapes = $rdf
        .clownface()
        .blankNode()
        .addOut(rdf.type, sh.NodeShape);
      const data = $rdf
        .clownface()
        .namedNode("resource")
        .addOut(rdf.type, schema.Person);

      // when
      const short = await createPlaygroundUrl(shapes.dataset, data.dataset);

      // then
      assert.equal(
        short,
        "https://shacl-playground.zazuko.com/#shapesGraph=%40prefix+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E+.%0A%40prefix+sh%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%3E+.%0A%0A_%3Ab1%0A+++rdf%3Atype+sh%3ANodeShape+.&dataGraph=%40prefix+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E+.%0A%40prefix+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E+.%0A%0A%3Cresource%3E%0A+++rdf%3Atype+schema%3APerson+.&shapesGraphFormat=text%2Fturtle&dataGraphFormat=text%2Fturtle"
      );
    });

    it("uses env to serialize", async () => {
      // given
      const shapes = $rdf
        .clownface()
        .blankNode()
        .addOut(rdf.type, sh.NodeShape);
      const data = $rdf
        .clownface()
        .namedNode("http://example.com/resource")
        .addOut(rdf.type, schema.Person);

      // when
      const short = await createPlaygroundUrl(shapes.dataset, data.dataset, {
        prefixes: ["sh"],
        shapesGraphFormat: "application/rdf+xml",
        dataGraphFormat: "application/rdf+xml",
        env: $rdf,
      });

      // then
      assert.equal(
        short,
        "https://shacl-playground.zazuko.com/#shapesGraph=%3C%3Fxml+version%3D%221.0%22+encoding%3D%22utf-8%22%3F%3E%0A%3Crdf%3ARDF%0A%09xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%0A%09xmlns%3Ash%3D%22http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%22%3E%0A%0A%09%3Crdf%3ADescription+rdf%3AnodeID%3D%22b2%22%3E%0A%09%09%3Crdf%3Atype+rdf%3Aresource%3D%22http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23NodeShape%22%2F%3E%0A%09%3C%2Frdf%3ADescription%3E%0A%3C%2Frdf%3ARDF%3E%0A&dataGraph=%3C%3Fxml+version%3D%221.0%22+encoding%3D%22utf-8%22%3F%3E%0A%3Crdf%3ARDF%0A%09xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%0A%09xmlns%3Ash%3D%22http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%22%3E%0A%0A%09%3Crdf%3ADescription+rdf%3Aabout%3D%22http%3A%2F%2Fexample.com%2Fresource%22%3E%0A%09%09%3Crdf%3Atype+rdf%3Aresource%3D%22http%3A%2F%2Fschema.org%2FPerson%22%2F%3E%0A%09%3C%2Frdf%3ADescription%3E%0A%3C%2Frdf%3ARDF%3E%0A&shapesGraphFormat=application%2Frdf%2Bxml&dataGraphFormat=application%2Frdf%2Bxml"
      );
    });
  });
});
