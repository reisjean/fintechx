import { NavigationStoreMethods, NavigationStoreProps, useNavigationStore } from '@/store/navigation'
import { act, render, renderHook, screen } from "@testing-library/react"
import { CarouselContentMock, CarouselItemMock, CarouselMock, CarouselNextMock, CarouselPreviousMock } from '__mocks__/CarouselMock'
import { Navigation } from "."

jest.mock("../ui/carousel", () => ({
  Carousel: CarouselMock,
  CarouselContent: CarouselContentMock,
  CarouselItem: CarouselItemMock,
  CarouselNext: CarouselNextMock,
  CarouselPrevious: CarouselPreviousMock,
}))

describe("Navigation", () => {
  let current: NavigationStoreProps & NavigationStoreMethods

  const renderNavigationStore = () => {
    return renderHook(() => useNavigationStore()).result.current
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render CarouselHome when current is "carousel"', () => {
    render(<Navigation />)

    expect(screen.getByText('Skip')).toBeInTheDocument()
  })

  it('should render CarouselHome when current is "chat"', () => {
    current = renderNavigationStore()
    const { update } = current

    act(() => {
      update('chat')
    })

    render(<Navigation />)

    expect(screen.getByText('FinTechX')).toBeInTheDocument()
  })

  it('should render CarouselHome when current is "profile"', () => {
    current = renderNavigationStore()
    const { update } = current

    act(() => {
      update('profile')
    })

    render(<Navigation />)

    expect(screen.getByText('Frodo Bolseiro')).toBeInTheDocument()
  })

})
