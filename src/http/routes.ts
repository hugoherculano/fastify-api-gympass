import { FastifyInstance } from 'fastify'
import { resgister } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', resgister)
}
