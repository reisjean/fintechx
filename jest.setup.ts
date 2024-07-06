import "@testing-library/jest-dom"

global.TransformStream = class {
  readable: ReadableStream
  writable: WritableStream

  constructor() {
    this.readable = new ReadableStream()
    this.writable = new WritableStream()
  }
}
