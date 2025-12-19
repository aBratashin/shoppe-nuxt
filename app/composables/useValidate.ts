import { z } from 'zod'

export const useValidate = <T extends object>(schema: z.ZodSchema<T>) => {
  const errors = ref<Partial<Record<keyof T, string>>>({})

  const validate = (data: T) => {
    errors.value = {}

    const result = schema.safeParse(data)

    if (!result.success) {
      const errorList = z.flattenError(result.error).fieldErrors

      Object.entries(errorList as [keyof T, string[]][]).forEach(([key, value]) => {
        errors.value[key] = value[0]
      })

      return false
    }

    return true
  }

  return { errors, validate }
}
