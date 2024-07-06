import { render, screen } from '@testing-library/react';
import { ChatMessage } from './';

const message = 'Hello World!'

describe('ChatMessage Component', () => {
  it('should render the component correctly', () => {
    render(<ChatMessage type="assistant" text={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText('FX')).toBeInTheDocument();
  });

  it('should apply the correct class to user', () => {
    render(<ChatMessage type="user" text={message} />);

    const chatMessageElement = screen.getByTestId('chat-message-item');
    expect(chatMessageElement).toHaveClass('dark:bg-boxBgDark');
    expect(chatMessageElement).toHaveClass('bg-grey-4');
  });

  it('should apply the correct class to assistant', () => {
    render(<ChatMessage type="assistant" text={message} />);

    const chatMessageElement = screen.getByTestId('chat-message-item');
    expect(chatMessageElement).not.toHaveClass('bg-boxBgDark');
  });
});