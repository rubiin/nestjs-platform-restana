import { Server } from 'net'
import { INestApplication } from '@nestjs/common'
import { ServeStaticOptions } from './adapter'

/**
 * Interface describing methods on NestRestanaApplication.
 *
 * @see [Platform](https://docs.nestjs.com/first-steps#platform)
 *
 * @publicApi
 */
export interface NestRestanaApplication extends INestApplication {
  /**
   * Starts the application.
   *
   * @param {number|string} port
   * @param {string} [hostname]
   * @param {Function} [callback] Optional callback
   * @returns {Promise} A Promise that, when resolved, is a reference to the underlying HttpServer.
   */
  listen(port: number | string, callback?: () => void): Promise<Server>
  listen(port: number | string, hostname: string, callback?: () => void): Promise<Server>

  /**
   * A wrapper function around native `Restana.set()` method.
   *
   * @example
   * app.set('trust proxy', 'loopback')
   *
   * @returns {this}
   */
  set(...args: any[]): this

  /**
   * A wrapper function around native `Restana.engine()` method.
   * @example
   * app.engine('mustache', mustacheRestana())
   *
   * @returns {this}
   */
  engine(...args: any[]): this

  /**
   * A wrapper function around native `Restana.enable()` method.
   * @example
   * app.enable('x-powered-by')
   *
   * @returns {this}
   */
  enable(...args: any[]): this

  /**
   * A wrapper function around native `Restana.disable()` method.
   *
   * @example
   * app.disable('x-powered-by')
   *
   * @returns {this}
   */
  disable(...args: any[]): this


  /**
   * Sets a base directory for public assets.
   * @example
   * app.useStaticAssets('public')
   *
   * @returns {this}
   */
  useStaticAssets(path: string, options?: ServeStaticOptions): this

  /**
   * Sets one or multiple base directories for templates (views).
   *
   * @example
   * app.setBaseViewsDir('views')
   *
   * @returns {this}
   */
  setBaseViewsDir(path: string | string[]): this

  /**
   * Sets a view engine for templates (views).
   * @example
   * app.setViewEngine('pug')
   *
   * @returns {this}
   */
  setViewEngine(engine: string): this

  /**
   * Sets app-level globals for view templates.
   *
   * @example
   * app.setLocal('title', 'My Site')
   *
   * @see https://Restanajs.com/en/4x/api.html#app.locals
   *
   * @returns {this}
   */
  setLocal(key: string, value: any): this
}
