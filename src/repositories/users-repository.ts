import { Prisma, User } from '@prisma/client'

interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>

  findByEmail(email: string): Promise<User | null>
}

export { UsersRepository }
