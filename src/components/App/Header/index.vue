<template>
  <header class="container-fluid">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/legends">Legends</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/rankings">Rankings</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 12;
  background-color: var(--pico-background-color);
}
</style>
