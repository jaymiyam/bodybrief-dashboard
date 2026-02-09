import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../App';

describe('user interactions with About Modal', () => {
  it('opens the dialog when user clicks info button', async () => {
    const user = userEvent.setup();

    render(<App />);

    const infoButton = screen.getByText(/about this project/i);
    expect(infoButton).toBeInTheDocument();

    await user.click(infoButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeVisible();
  });

  it('closes the dialog when user clicks the cross icon', async () => {
    const user = userEvent.setup();

    render(<App />);
    const infoButton = screen.getByText(/about this project/i);
    await user.click(infoButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeVisible();

    const crossIcon = screen.getByLabelText(/Close dialog/i);
    await user.click(crossIcon);
    expect(modal).not.toBeVisible();
  });

  it('closes the dialog when user clicks the close button', async () => {
    const user = userEvent.setup();

    render(<App />);
    const infoButton = screen.getByText(/about this project/i);
    await user.click(infoButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeVisible();

    const closeButton = screen.getByText(/Close/i);
    await user.click(closeButton);
    expect(modal).not.toBeVisible();
  });
});
