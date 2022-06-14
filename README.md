# Zazuko SHACL Playground

You want to use SHACL shapes to validate RDF-based data but find it hard to go back and forth in your IDE? Are you unsure if the rules even make sense and are applied to your data? Stop worrying and use our SHACL playground!

SHACL playground allows you to define Data Shapes according to the W3C [Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/) and test them against sample data.

The implementation of the validation is 100% in JavaScript and thus 100% client-side. We provide an instance of our validator at [https://shacl-playground.zazuko.com/](https://shacl-playground.zazuko.com/).

To run it locally, install the dependencies with `yarn`, then either start a webpack dev server with `yarn run start` and access it at http://localhost:8080, or create a production build with `yarn run build` and serve the created `dist` directory, e.g. with nginx.

To run it using docker, create an image with `docker build -t shacl-playground .`, then run it using `docker run -p 80:80 shacl-playground` and access it at http://localhost/.

It is built on our JavaScript-based [SHACL library](https://github.com/zazuko/rdf-validate-shacl).

Contributions & feedback are very welcome! Enjoy & happy SHACL.
