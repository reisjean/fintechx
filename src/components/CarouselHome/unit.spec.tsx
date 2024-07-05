import { render, screen, waitFor } from '@testing-library/react'
import { CarouselContentMock, CarouselItemMock, CarouselMock, CarouselNextMock, CarouselPreviousMock } from '../../../__mocks__/CarouselMock'
import { CarouselHome } from './'

jest.mock("../ui/carousel", () => ({
  Carousel: CarouselMock,
  CarouselContent: CarouselContentMock,
  CarouselItem: CarouselItemMock,
  CarouselNext: CarouselNextMock,
  CarouselPrevious: CarouselPreviousMock,
}))

describe('CarouselHome', () => {
  it('should render 2 slides', async () => {
    render(<CarouselHome />)

    expect(screen.getByAltText('Robot')).toBeInTheDocument()
    expect(screen.getByAltText('Robot Smiling')).toBeInTheDocument()

    expect(screen.getByRole('heading', {
      name: /unlock the power of future ai/i
    })).toBeInTheDocument()

    expect(screen.getByText('Harness the Innovation of Next-Gen AI')).toBeInTheDocument()
  })

  it('should displays the correct number of dots', async () => {
    render(<CarouselHome />)

    await waitFor(() => {
      const dots = screen.getAllByRole('button', { hidden: true })
      expect(dots.length).toBe(2)
    })
  })
})