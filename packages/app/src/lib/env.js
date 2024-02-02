import Environment from "@zazuko/env/Environment.js";
import parent from "@rdfine/env";
import { ShFactory } from "@rdfine/shacl/Factory";

export default new Environment([ShFactory], { parent });
