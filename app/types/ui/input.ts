export type BaseInputProps = {
  type?: 'text' | 'email' | 'tel' | 'password'
  placeholder?: string
  disabled?: boolean
  error?: boolean
}

export type FormInputProps = Omit<BaseInputProps, 'error'> & {
  label?: string
  error?: string
}
