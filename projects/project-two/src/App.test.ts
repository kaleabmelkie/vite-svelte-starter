import App from './App.svelte';
import { render } from '@testing-library/svelte';

test('includes "Home"', () => {
  const { getByText } = render(App, { props: {} });

  expect(getByText('Home')).toBeInTheDocument();
});
