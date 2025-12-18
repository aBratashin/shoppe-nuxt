import type { FetchError } from 'ofetch'
import type { ErrorInterface } from '#shared/interfaces/error.interface'

export const useApiError = () => {
  const toastStore = useToastStore()

  const handleError = (error: unknown) => {
    const errorInfo = error as FetchError<ErrorInterface>
    toastStore.showToast('error', errorInfo.data?.message || 'Что-то пошло не так...')
  }

  return { handleError }
}
