import { render, screen } from '@testing-library/react'
import { CarouselContentMock, CarouselItemMock, CarouselMock, CarouselNextMock, CarouselPreviousMock } from '__mocks__/CarouselMock'
import Home from './page'

jest.mock("../components/ui/carousel", () => ({
  Carousel: CarouselMock,
  CarouselContent: CarouselContentMock,
  CarouselItem: CarouselItemMock,
  CarouselNext: CarouselNextMock,
  CarouselPrevious: CarouselPreviousMock,
}))
describe('Page', () => {
  it('renders a heading', () => {
    const homePage = render(<Home />)

    expect(screen.getByRole('button', { name: 'Skip' })).toBeInTheDocument()
  })
})