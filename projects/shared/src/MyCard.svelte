<script lang="ts">
  import { Card } from 'flowbite-svelte';
</script>

<Card
  img="https://source.unsplash.com/random/420x420"
  header="MyCard from shared"
  link="/"
  btnLabel="Read more"
>
  <p class="mb-3 font-normal text-orange-600" slot="paragraph">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
</Card>
