import { screen, render } from '@testing-library/react'

import Radio from '.'

describe('<Radio />', () => {
  it('should render heading', () => {
    const { container } = render(<Radio />)

    expect(screen.getByRole('heading', { name: /Radio/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
