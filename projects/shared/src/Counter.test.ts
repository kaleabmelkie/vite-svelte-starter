import { render } from '@testing-library/svelte';
import Counter from './Counter.svelte';

describe('Counter.svelte', () => {
  it('mounts', () => {
    const { container } = render(Counter, {});
    expect(container).toBeTruthy();
    expect(container.innerHTML).toContain('count');
  });
});
