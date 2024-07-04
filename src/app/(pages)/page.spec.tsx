import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(screen.getByText('Hello FinTechX!')).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
})