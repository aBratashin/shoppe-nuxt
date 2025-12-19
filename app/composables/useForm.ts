export const useForm = <T extends object>(createForm: () => T) => {
  const initial = createForm()
  const formData = ref<T>({ ...initial })

  const resetForm = (fields: (keyof T)[]) => {
    fields.forEach((field) => {
      formData.value[field] = initial[field]
    })
  }

  return { formData, resetForm }
}
