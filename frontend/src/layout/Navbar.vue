<template>
  <div class="navbar">
    <nav>
      <router-link to="/">
        <a href="#"
          ><img src="../assets/beerIcon.png" alt="Logo Eugênio Beer" class="logoLojaImg"
        /></a>
      </router-link>
      <ul>
        <router-link to="/">
          <li><a href="#produtos">Produtos</a></li>
        </router-link>
        <router-link to="/Login">
          <li><a href="#">Login</a></li>
        </router-link>
        <li><a href="#">Carrinho</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--dark-red);
}

.logoLojaImg {
  width: 80px;
  height: 80px;
  margin: 15px;
}

nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  width: 100%;
  justify-content: flex-end;
}

nav ul li {
  width: 10%;
}

nav ul li a {
  width: 100%;
  color: var(--yellow);
  font-size: 25px;
  padding: 10px;
}

img:hover,
li:hover {
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
}
</style>