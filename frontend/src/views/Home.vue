<template>
  <div class="header">
    <Header />
    <div>
      <main>
        <div class="container">
          <h1>Produtos</h1>
          <div class="produtos">
            <ProdutoCerveja
              v-for="cerveja in cervejas"
              :key="cerveja.id"
              :name="cerveja.name"
              :brand="cerveja.brand"
              :price="cerveja.price"
            />
          </div>
          <div class="admArea">
            <router-link to="/AdmArea">
              <p><a href="">ADMIN</a></p>
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import ProdutoCerveja from "../components/ProdutoCerveja.vue";
export default {
  name: "Home",
  components: {
    Header,
    ProdutoCerveja,
  },
  data() {
    return {
      cervejas: [
        {
          id: 1,
          name: "Cervejinha",
          brand: "colorado",
          price: 50,
        },
        {
          id: 2,
          name: "Cervejinha",
          brand: "colorado",
          price: 50,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* CONTAINER */
main .container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}

/* H1 */
main .container h1 {
  text-align: center;
}

/* PRODUTOS */
main .container .produtos {
  width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* ADM AREA */
.container .admArea {
  display: flex;
  align-content: center;
  justify-content: center;
}

.container .admArea p a {
  font-size: 20px;
}
</style>
