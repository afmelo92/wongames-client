import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render heading', () => {
    render(<UserDropdown username="Andre" />)

    expect(screen.getByText(/andre/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Andre" />)

    userEvent.click(screen.getByText(/andre/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
