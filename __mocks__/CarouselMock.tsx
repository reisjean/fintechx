import { useEffect } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export const CarouselMock = jest.fn(({ children, setApi }) => {
  useEffect(() => {
    const api = {
      scrollSnapList: jest.fn(() => [0, 1]),
      selectedScrollSnap: jest.fn(() => 0),
      on: jest.fn((event, cb) => {
        if (event === 'select') {
          cb()
        }
      }),
    }

    setApi(api)
  }, [setApi])
  return <div>{children}</div>
})

export const CarouselContentMock = jest.fn(({ children }) => <div>{children}</div>)

export const CarouselItemMock = jest.fn(({ children }) => <div>{children}</div>)

export const CarouselNextMock = jest.fn(() =>
  <button>
    <FaArrowRightLong />
    <span className="sr-only">Next slide</span>
  </button>
)

export const CarouselPreviousMock = jest.fn(() =>
  <button>
    <FaArrowLeftLong />
    <span className="sr-only">Previous slide</span>
  </button>
)
