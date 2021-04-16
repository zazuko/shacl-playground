import {createModel} from '@captaincodeman/rdx';
import * as graphReducers from './graphReducers.js'
import shapes from '../graphs/shapes.ttl'
import data from '../graphs/data.jsonld'

export const shapesGraph = createModel({
  state: {
    format: 'text/turtle',
    graph: shapes,
    prefixes: [],
  },
  reducers: {
    ...graphReducers,
  }
})

export const dataGraph = createModel({
  state: {
    format: 'application/ld+json',
    graph: data,
    prefixes: [],
  },
  reducers: {
    ...graphReducers,
  }
})

export { validation } from './models/validation.js'

export const playground = createModel({
  state: {
    page: 3
  },
  reducers: {
    switchPage(state, page) {
      return { ...state, page }
    }
  }
})
