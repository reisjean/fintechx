import { act, render, screen } from '@testing-library/react';
import { Chat } from '.';

describe('Chat unit tests', () => {
  it('should render', () => {
    render(<Chat />);

    expect(screen.getByRole('heading', { name: 'FinTechX' })).toBeInTheDocument();

    expect(screen.getAllByRole('paragraph')).toHaveLength(4);
  });

  it('should change chat state when pre-message button is clicked', async () => {
    render(<Chat />);

    const messageDefaultButton = screen.getByText('Quais são os horários de atendimento da FinTechX?');

    act(() => {
      messageDefaultButton.click();
    })

    expect(messageDefaultButton).not.toBeInTheDocument();
  })

  it('should change chat state when "send Message button" is clicked', async () => {
    render(<Chat />);

    const messageDefaultButton = screen.getByText('Quais são os horários de atendimento da FinTechX?');

    const sendMessageButton = screen.getByLabelText('Enviar mensagem');

    act(() => {
      sendMessageButton.click();
    });

    expect(messageDefaultButton).not.toBeInTheDocument();
  })

  it('should call requestSubmit on form submit', () => {
    const { container } = render(<Chat />);

    const submitSpy = jest.fn();

    const form = container.querySelector('form')!;
    form.onsubmit = submitSpy;

    const sendMessageButton = screen.getByLabelText('Enviar mensagem');
    act(() => {
      sendMessageButton.click();
    });

    expect(submitSpy).toBeCalledTimes(1);
  });
})