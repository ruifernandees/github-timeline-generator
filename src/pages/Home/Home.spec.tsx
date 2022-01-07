import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from "../../App";
import { MemoryRouter } from "react-router-dom";
import Home from ".";

test('On render, the username input and the submit button are in the document', () => {
  render(
    <App />
  )

  const usernameInput = screen.getByRole('textbox', { name: '' })
  const submitButton = screen.getByRole('button', { name: /Generate Timeline/i });
  expect(usernameInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Submit without a username. It should trigger an error', async () => {
  render(
    <App />
  );
  const submitButton = await screen.findByRole('button', { name: /Generate Timeline/i });
  userEvent.click(submitButton);
  const toastContainer = await screen.findByRole('alert');
  expect(toastContainer).toBeInTheDocument();
  const errorMessage = await screen.findByText(/Please type a username./i);
  expect(errorMessage).toBeInTheDocument();
});

test('Submit a not existing username. It should trigger an error', async () => {
  render(
    <App />
  );
  const usernameInput = screen.getByRole('textbox', { name: '' });
  const submitButton = await screen.findByRole('button', { name: /Generate Timeline/i });
  userEvent.type(usernameInput, "qweqweqweqweqwe");
  userEvent.click(submitButton);
  const toastContainer = await screen.findByRole('alert');
  expect(toastContainer).toBeInTheDocument();
  const errorMessage = await screen.findByText(/Could not resolve to a User with the login of 'qweqweqweqweqwe'/i);
  expect(errorMessage).toBeInTheDocument();
});

test('Submit correctly. It shows a message of success and redirects to the timeline', async () => {
  render(
    <App />
  );
  const usernameInput = screen.getByRole('textbox', { name: '' })
  const submitButton = await screen.findByRole('button', { name: /Generate Timeline/i });
  userEvent.type(usernameInput, "ruifernandees");
  userEvent.click(submitButton);
  const toastContainer = await screen.findByRole('alert');
  expect(toastContainer).toBeInTheDocument();
  const message = await screen.findByText(/Hi, Rui Fernandes!/i);
  expect(message).toBeInTheDocument();
  const repositoryTimelineTitle = await screen.findByRole('heading', { name: "Number of repositories:" });
  expect(repositoryTimelineTitle).toBeInTheDocument();
});