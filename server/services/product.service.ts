import { prisma } from '~~/lib/prisma'
import type { ProductCreateDto } from '#shared/interfaces/product.interface'
import type * as Prisma from '~~/lib/generated/prisma/internal/prismaNamespace'

export const createProduct = (data: ProductCreateDto) => {
  return prisma.product.create({
    data
  })
}

export const getProducts = (search?: string, category?: string) => {
  const where: Prisma.ProductWhereInput = {}

  if (search) {
    where.OR = [
      {
        name: {
          contains: search,
          mode: 'insensitive'
        }
      },
      {
        short_description: {
          contains: search,
          mode: 'insensitive'
        }
      },
      {
        long_description: {
          contains: search,
          mode: 'insensitive'
        }
      }
    ]
  }

  if (category) {
    where.category = {
      alias: category
    }
  }

  return prisma.product.findMany({
    where
  })
}
