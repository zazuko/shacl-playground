import $rdf from "@zazuko/env";
import * as assert from "assert";
import { createPlaygroundUrl } from "../index.js";

const { rdf, schema, sh } = $rdf.ns;

describe("@zazuko/shacl-playground", () => {
  describe("createPlaygroundUrl", () => {
    it("shortens datasets to turtle", () => {
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
      const short = createPlaygroundUrl(shapes.dataset, data.dataset);

      // then
      assert.equal(
        short,
        "https://shacl-playground.zazuko.com/#shapesGraph=%40prefix+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E+.%0A%40prefix+sh%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%3E+.%0A%0A_%3Ab1%0A+++rdf%3Atype+sh%3ANodeShape+.&dataGraph=%40prefix+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E+.%0A%40prefix+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E+.%0A%0A%3Cresource%3E%0A+++rdf%3Atype+schema%3APerson+.&shapesGraphFormat=text%2Fturtle&dataGraphFormat=text%2Fturtle"
      );
    });
  });
});
