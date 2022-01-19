# @zazuko/shacl-playground

## 1.2.1

### Patch Changes

- 97c4bbb: URL shortener failed with large graph contents

## 1.2.0

### Minor Changes

- e43f703: Change sharing link to use hash URI and not query string. This prevents issues with very long URIs

## 1.1.4

### Patch Changes

- c9918a9: Update graphy (fixes #16)

## 1.1.3

### Patch Changes

- bd4a06f: In some browsers there would be double scrollbars around editors
- 07d180a: Updated JSON-LD libraries

## 1.1.2

### Patch Changes

- 6b84c8d: Editor layout would break on first render, apparently due to a race condition when loading styles
- 6b84c8d: Updated vaadin to v21
- 6b84c8d: Updated to lit@2

## 1.1.1

### Patch Changes

- 55a5e2c: Use more recognizable icon for sharing button

## 1.1.0

### Minor Changes

- da11823: Custom prefixes can be defined for graphs

### Patch Changes

- ea9913d: Better serialization output in turtle
- 299a70d: Add pointer cursor to prefixes to indicate they are clickable
- b11c0a2: Selected tab was not included in sharing link

## 1.0.0

### Major Changes

- 7c908dd: Use split layout on large screens

## 0.2.0

### Minor Changes

- 29778a7: Sharing link, including option to shorten
- 8ecf09e: Button to open Shaperone

### Patch Changes

- 5527a36: Set default shapes graph prefixes
- fc2e512: Prevent growing blank node identfiers

## 0.1.0

### Minor Changes

- daaa985: First version:

  - Multi-format editor for Shapes Graph
  - Multi-format editor for Data Graph
  - Displaying validation errors as tree
  - Displaying validation errors as RDF in various formats
  - Uses `localstorage` to remember the state
