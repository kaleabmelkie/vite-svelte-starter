import { render } from '@testing-library/svelte';
import App from './App.svelte';

describe('App.svelte', () => {
  it('mounts', () => {
    const { container } = render(App, {});
    expect(container).toBeTruthy();
    expect(container.innerHTML).toContain('Home');
  });
});
