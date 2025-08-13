import { randomUUID } from 'crypto'
import { knex } from '../database'
import type { FastifyInstance } from 'fastify'
import z from 'zod'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', async (request, response) => {
    const userSchema = z.object({
      name: z.string(),
    })

    const { name } = userSchema.parse(request.body)

    await knex('users').insert({
      id: randomUUID(),
      name,
    })

    return response.status(201).send()
  })
}
