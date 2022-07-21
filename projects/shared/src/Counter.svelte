<script lang="ts">
  let count = 0;
</script>

<button class="button !bg-orange-600" on:click="{() => count++}">
  count is {count} (from shared)
</button>
