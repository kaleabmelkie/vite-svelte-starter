import { render } from '@testing-library/svelte';
import App from '../App.svelte';

test('should render', () => {
  const results = render(App, { props: {} });

  expect(() => results.getByText('Home')).not.toThrow();
});
