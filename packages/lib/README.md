# `@zazuko/shacl-playground`

Helps you build links to https://shacl-playground.zazuko.com

```ts
import type { DatasetCore } from '@rdfjs/types'
import { createPlaygroundUrl } from '@zazuko/shacl-playground'

let shapes: DatasetCore
let data: DatasetCore

const link = await createPlaygroundUrl(shapes, data)
```

The URLs may be quite long. Shorten with [`@zazuko/s`](https://npm.im/@zazuko/s)

```ts
import { shorten } from '@zazuko/s'

let link: string
const shortUrl = await shorten(link)
```

## Options

An optional, third argument can be provided

```ts
interface Options {
  /**
   * URL of a playground instance.
   *
   * Default to the official instance running on https://shacl-playground.zazuko.com/
   */
  instanceUrl?: string
  /**
   * Serialisation of the data graph
   *
   * `text/turtle` by default
   */
  dataGraphFormat?: string
  /**
   * Serialisation of the shapes graph
   *
   * `text/turtle` by default
   */
  shapesGraphFormat?: string
  /**
   * A map of prefixes for the data graph
   */
  dataGraphCustomPrefixes?: Record<string, string>
  /**
   * A map of prefixes for the shapes graph
   */
  shapesGraphCustomPrefixes?: Record<string, string>
}
```


`dataGraphFormat` and `shapesGraphFormat` must be any RDF media type supported by [@rdfjs-elements/formats-pretty](https://npm.im/@rdfjs-elements/formats-pretty)
