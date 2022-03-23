<template>
  <div>
    <main>
      <div class="container">
        <div class="areaAdmTitle">
          <h1>Área de Administração</h1>
        </div>

        <div class="admEditarMembros">
          <router-link to="/AdmArea/AreaAdmMembers">
            <p><button class="btnAll">Editar Membros</button></p>
          </router-link>
        </div>

        <div class="admEditarProdutos">
          <router-link to="/AdmArea/AreaAdmProducts">
            <p><button class="btnAll">Cadastrar Produtos</button></p>
          </router-link>

          <router-link to="/AdmArea/AreaAdmEditarProducts">
            <p><button class="btnAll">Editar Produtos</button></p>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdmArea",
};
</script>

<style>
main .container {
  width: 1200px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

main .container .areaAdmTitle {
  margin-top: 25px;
  margin-bottom: 20px;
  color: var(--yellow);
}

.admEditarProdutos {
  margin-top: 30px;
}

.btnAll {
  background: var(--yellow);
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  height: 60px;
  width: 220px;
  line-height: 25px;
  padding: 10px 16px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>