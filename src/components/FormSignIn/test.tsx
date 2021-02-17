import { screen, render } from '@testing-library/react'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render heading', () => {
    const { container } = render(<FormSignIn />)

    expect(
      screen.getByRole('heading', { name: /FormSignIn/i })
    ).toBeInTheDocument()
  })
})
