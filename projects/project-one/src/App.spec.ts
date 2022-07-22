import { render, screen } from '@testing-library/svelte';
import App from './App.svelte';

test("says 'Home'", () => {
  render(App);
  const node = screen.queryByText('Home');
  expect(node).not.toBeNull();
});
