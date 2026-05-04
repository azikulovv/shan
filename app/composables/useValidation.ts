import { computed, reactive, shallowRef } from 'vue'
import * as z from 'zod'

type ValidationErrors<T> = Partial<Record<Extract<keyof T, string>, string>>

type ValidateSuccess<TData> = {
  success: true
  data: TData
}

type ValidateError = {
  success: false
  data: null
}

export const useValidation = <TSchema extends z.ZodType>(schema: TSchema) => {
  type Input = z.input<TSchema>
  type Output = z.output<TSchema>
  type FieldKey = Extract<keyof Input, string>

  const errors = reactive({}) as ValidationErrors<Input>
  const formError = shallowRef('')
  const data = shallowRef<Output | null>(null)

  const hasErrors = computed(() => {
    return Object.keys(errors).length > 0 || Boolean(formError.value)
  })

  const clearErrors = () => {
    Object.keys(errors).forEach((key) => {
      delete errors[key as FieldKey]
    })

    formError.value = ''
    data.value = null
  }

  const clearFieldError = (field: FieldKey) => {
    delete errors[field]
  }

  const setFieldError = (field: FieldKey, message: string) => {
    errors[field] = message
  }

  const setFormError = (message: string) => {
    formError.value = message
  }

  const setErrors = (fieldErrors: Record<string, string[] | undefined>) => {
    Object.entries(fieldErrors).forEach(([field, messages]) => {
      const firstMessage = messages?.[0]

      if (firstMessage) {
        errors[field as FieldKey] = firstMessage
      }
    })
  }

  const validate = (values: Input): ValidateSuccess<Output> | ValidateError => {
    clearErrors()

    const result = schema.safeParse(values)

    if (!result.success) {
      const flattened = z.flattenError(result.error)

      formError.value = flattened.formErrors[0] || ''
      setErrors(flattened.fieldErrors)

      return {
        success: false,
        data: null,
      }
    }

    data.value = result.data

    return {
      success: true,
      data: result.data,
    }
  }

  const validateField = (field: FieldKey, values: Input) => {
    const result = schema.safeParse(values)

    if (result.success) {
      clearFieldError(field)
      return true
    }

    const flattened = z.flattenError(result.error)
    const message = flattened.fieldErrors[field]?.[0]

    if (message) {
      setFieldError(field, message)
      return false
    }

    clearFieldError(field)
    return true
  }

  return {
    errors,
    formError,
    data,
    hasErrors,

    validate,
    validateField,

    clearErrors,
    clearFieldError,
    setFieldError,
    setFormError,
    setErrors,
  }
}
