<template>
  <div class="layout">
    <header class="header">
      <div class="t">
      <strong>
       <div class="photo"> <img src="../assets/logo.png"></div>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

