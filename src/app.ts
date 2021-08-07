import express, { Express, json, urlencoded } from 'express'
import { errorLogger } from '~/network/middlewares'

/**
 * Generates a pre configured express application
 *
 * @returns - An express application
 */
export default (): Express => {
  const app = express()

  app.use(json())
  app.use(urlencoded({ extended: false }))

  // routes

  // middlewares
  app.use(errorLogger)

  return app
}
