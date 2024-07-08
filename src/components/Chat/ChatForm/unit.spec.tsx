import { render, screen } from '@testing-library/react';
import { ChatForm } from ".";

const handleInputChange = jest.fn();
const handleSubmit = jest.fn();
const setIsChatting = jest.fn();
const input = 'test text input';
const formRef = { current: null };

describe('ChatForm', () => {
  it('should render the ChatForm component', () => {
    render(<ChatForm
      input={input}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      setIsChatting={setIsChatting}
      formRef={formRef}
    />)

    expect(screen.getByPlaceholderText('Envie sua pergunta')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})