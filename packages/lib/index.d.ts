import { DatasetCore } from '@rdfjs/types'

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

export function createPlaygroundUrl(shapesGraph: DatasetCore, dataGraph: DatasetCore, options?: Options): string
