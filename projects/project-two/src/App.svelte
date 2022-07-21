<script lang="ts">
  import { Link, Route, Router } from 'svelte-navigator';
  import About from './routes/About.svelte';
  import Home from './routes/Home.svelte';
</script>

<Router>
  <nav class="flex space-x-3 bg-blue-50 p-4">
    <Link
      class="text-sm font-semibold uppercase text-blue-600 transition-all hover:text-blue-400"
      to="/"
    >
      Home
    </Link>
    <Link
      class="text-sm font-semibold uppercase text-blue-600 transition-all hover:text-blue-400"
      to="about"
    >
      About
    </Link>
  </nav>
  <div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="about">
      <About />
    </Route>
  </div>
</Router>
