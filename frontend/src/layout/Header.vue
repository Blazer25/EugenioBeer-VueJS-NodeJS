<template>
  <div class="headerFlexContainer">
    <header>
      <a href="#"><h1>Eugênio Beer</h1></a>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.headerFlexContainer {
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headerFlexContainer header h1 {
  color: var(--yellow);
  font-size: 150px;
  font-family: "Inspiration", cursive;
}
</style>