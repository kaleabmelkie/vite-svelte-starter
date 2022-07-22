import { render } from '@testing-library/svelte';
import MyCard from './MyCard.svelte';

describe('MyCard.svelte', () => {
  it('mounts', () => {
    const { container } = render(MyCard, {});
    expect(container).toBeTruthy();
    expect(container.innerHTML).toContain('2021');
  });
});
