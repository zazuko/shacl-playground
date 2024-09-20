import { DatasetCore } from '@rdfjs/types'
import { Environment } from '@rdfjs/environment/Environment';
import { FormatsFactory } from '@rdfjs/formats/Factory';
import { DatasetFactoryExt } from '@zazuko/env/lib/DatasetFactoryExt';
import type {Prefixes} from '@zazuko/prefixes/prefixes';

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
   * @deprecated
   */
  dataGraphCustomPrefixes?: Record<string, string>
  /**
   * A map of prefixes for the shapes graph
   * @deprecated
   */
  shapesGraphCustomPrefixes?: Record<string, string>
  /**
   * Prefixes to use when serializing both data and shapes graphs.
   *
   * Only applicable when `env` is provided.
   */
  prefixes?: Array<keyof Prefixes | [string, string]>
  /**
   * Additional prefixes to use when serializing the data graph.
   *
   * Only applicable when `env` is provided.
   */
  dataGraphPrefixes?: Array<keyof Prefixes | [string, string]>
  /**
   * Additional prefixes to use when serializing the shapes graph.
   *
   * Only applicable when `env` is provided.
   */
  shapesGraphPrefixes?: Array<keyof Prefixes | [string, string]>
  /**
   * Optional environment to use for better formatting
   */
  env?: Environment<FormatsFactory | DatasetFactoryExt>
}

export function createPlaygroundUrl(shapesGraph: DatasetCore, dataGraph: DatasetCore, options?: Options): Promise<string>
