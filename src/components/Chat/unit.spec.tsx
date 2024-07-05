import { render, screen } from '@testing-library/react';
import { Chat } from '.';

describe('Chat unit tests', () => {
  it('should render without crashing', () => {
    render(<Chat />);

    expect(screen.getByRole('heading', { name: 'BrainBox' })).toBeInTheDocument();

    expect(screen.getAllByRole('paragraph')).toHaveLength(7);
  });
})