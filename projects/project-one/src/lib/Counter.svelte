<script lang="ts">
  let count = 0;
</script>

<button class="button" on:click="{() => count++}">
  count is {count} (from this project)
</button>
