import { prisma } from '~~/lib/prisma'
import type { Category } from '#shared/interfaces/category.interface'

export const addCategory = (data: Category) => {
  return prisma.category.create({
    data
  })
}

export const getAllCategories = () => {
  return prisma.category.findMany()
}
