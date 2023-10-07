import toast from 'react-hot-toast'

export const onGraphqlErrorToast = (error: any, id: string) => {
  if (
    error &&
    error?.response &&
    error.response.errors &&
    Array.isArray(error.response.errors)
  ) {
    error.response.errors.map((error: any, index: number) =>
      toast.error(`${error.message}`, { id })
    )
  } else {
    toast.error(`Something went wrong`, { id })
  }
}
