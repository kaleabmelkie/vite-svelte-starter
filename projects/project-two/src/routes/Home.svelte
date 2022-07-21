<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { Counter as CounterFromShared } from 'shared';
  import MyCard from 'shared/src/MyCard.svelte';
  import svelteLogo from '../assets/svelte.svg';
  import Counter from '../lib/Counter.svelte';
</script>

<h1 class="p-4 text-xl font-bold">Home</h1>

<div class="flex space-x-3 p-4">
  <img src="/vite.svg" alt="Vite Logo" />
  <img src="{svelteLogo}" alt="Svelte Logo" />
</div>

<div class="grid justify-start gap-3 p-4">
  <Counter />
  <CounterFromShared />
</div>

<div class="flex space-x-3 p-4">
  <Card
    img="https://source.unsplash.com/random/400x400"
    header="Card from this project"
    link="/"
    btnLabel="Read more"
  >
    <p class="mb-3 font-normal text-blue-600" slot="paragraph">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
  </Card>

  <MyCard />
</div>
