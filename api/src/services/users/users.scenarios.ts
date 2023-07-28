import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7252433',
        token: 'String',
        tokenExpired: '2023-07-28T19:23:05.246Z',
      },
    },
    two: {
      data: {
        email: 'String6787274',
        token: 'String',
        tokenExpired: '2023-07-28T19:23:05.246Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
