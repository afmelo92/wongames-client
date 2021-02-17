import FormSignIn from 'components/FormSignIn'
import React from 'react'
import Auth from 'templates/Auth'

const Signin = () => {
  return (
    <Auth title="Sign in">
      <FormSignIn />
    </Auth>
  )
}

export default Signin
