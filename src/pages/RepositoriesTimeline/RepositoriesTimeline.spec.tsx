import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe('RepositoriesTimeline tests', () => {
  it('Should display the username', async () => {
    render(
      <App />
    );
    const usernameInput = screen.getByRole('textbox', { name: '' })
    const submitButton = await screen.findByRole('button', { name: /Generate Timeline/i });
    userEvent.type(usernameInput, "ruifernandees");
    userEvent.click(submitButton);   

    const userRepositoriesTitle = await screen.findByText(/Repository Timeline of Rui Fernandes/i);
    expect(userRepositoriesTitle).toBeInTheDocument();
  });

  it('Should render less than or equal to 50 repositories', async () => {
    render(
      <App />
    );
    const repositories = await screen.findAllByRole('listitem');
    expect(repositories.length <= 50).toBeTruthy();
  });

  it('Should render less than or equal to 20 repositories', async () => {
    render(
      <App />
    );
    const twentyRepositoriesRadio = await screen.findByRole('radio', { name: "20" }) as HTMLInputElement;
    const filterButton = await screen.findByRole('button', { name: 'Filter' });
    expect(twentyRepositoriesRadio).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    userEvent.click(twentyRepositoriesRadio);
    expect(twentyRepositoriesRadio.checked).toBeTruthy();
    userEvent.click(filterButton);
    const toastContainer = await screen.findByRole('alert');
    expect(toastContainer).toBeInTheDocument();
    const repositories = await screen.findAllByRole('listitem');
    expect(repositories.length <= 20).toBeTruthy();
  });

  it('Should render less than or equal to 10 repositories', async () => {
    render(
      <App />
    );
    const twentyRepositoriesRadio = await screen.findByRole('radio', { name: "10" }) as HTMLInputElement;
    const filterButton = await screen.findByRole('button', { name: 'Filter' });
    expect(twentyRepositoriesRadio).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    userEvent.click(twentyRepositoriesRadio);
    expect(twentyRepositoriesRadio.checked).toBeTruthy();
    userEvent.click(filterButton);
    const toastContainer = await screen.findByRole('alert');
    expect(toastContainer).toBeInTheDocument();
    const repositories = await screen.findAllByRole('listitem');
    expect(repositories.length <= 10).toBeTruthy();
  });

  it('Should render less than or equal to 1 repository', async () => {
    render(
      <App />
    );
    const twentyRepositoriesRadio = await screen.findByRole('radio', { name: "1" }) as HTMLInputElement;
    const filterButton = await screen.findByRole('button', { name: 'Filter' });
    expect(twentyRepositoriesRadio).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    userEvent.click(twentyRepositoriesRadio);
    expect(twentyRepositoriesRadio.checked).toBeTruthy();
    userEvent.click(filterButton);
    const toastContainer = await screen.findByRole('alert');
    expect(toastContainer).toBeInTheDocument();
    const repositories = await screen.findAllByRole('listitem');
    expect(repositories.length <= 1).toBeTruthy();
  });
})