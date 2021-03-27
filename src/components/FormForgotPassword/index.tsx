import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

import { Email, ErrorOutline } from '@styled-icons/material-outlined'

import { FormError, FormLoading, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FieldErrors } from 'utils/validations'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState({
    email: ''
  })
  const [loading, setLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          error={fieldError?.email}
          onInputChange={v => handleInput('email', v)}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}
export default FormForgotPassword
