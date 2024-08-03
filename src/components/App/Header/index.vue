<template>
  <div class="appHeader">
    <header class="container">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">
              <NuxtImg src="/images/logo.png" width="48" height="48" />
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li>
            <NuxtLink to="/legends">Legends</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rankings/1v1/us-e/1">Rankings</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<style lang="scss" scoped>
.appHeader {
  top: 0;
  left: 0;
  z-index: 12;
  background-color: var(--pico-background-color);
  position: sticky;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
