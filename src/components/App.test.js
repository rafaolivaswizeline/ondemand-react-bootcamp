import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  it('Should contain a header component', async() => {
    const header = await screen.findByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('Should contain a content component', async() => {
    const content = await screen.findByTestId('content');
    expect(content).toBeInTheDocument();
  });

  it('Should contain a footer component', async() => {
    const footer = await screen.findByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
