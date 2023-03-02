# `@zazuko/shacl-playground`

Helps you build links to https://shacl-playground.zazuko.com

```ts
import type { DatasetCore } from '@rdfjs/types'
import { createPlaygroundUrl } from '@zazuko/shacl-playground'

let shapes: DatasetCore
let data: DatasetCore

const link = createPlaygroundUrl(shapes, data)
```

The URLs may be quite long. Shorten with [`@zazuko/s`](https://npm.im/@zazuko/s)

```ts
import { shorten } from '@zazuko/s'

let link: string
const shortUrl = await shorten(link)
```
