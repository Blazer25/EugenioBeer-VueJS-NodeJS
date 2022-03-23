<template>
  <div class="cervejas">
    <img src="../assets/beerIcon.png" alt="" />
    <p class="nomeCerveja">{{ name }}</p>
    <p class="marcaCerveja">{{ brand }}</p>
    <p class="precoCerveja">{{ price.toLocaleString("pt-BR",{currency:"BRL", style:"currency"}) }}</p>
    <button type="submit" class="btnComprar">Comprar</button>
  </div>
</template>

<script>
export default {
  name: "ProdutoCerveja",
  props:{
      img:{
          type: String,
          required: false
      },
      name:{
          type: String,
          required: true
      },
            brand:{
          type: String,
          required: true
      },
            price:{
          type: Number,
          required: true
      }
  }
};
</script>

<style>
.cervejas {
  max-width: 190px;
  max-height: 320px;
  border: 5px solid black;
  border-radius: 5px 15px 15px 15px;
  text-align: center;
  padding: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 10px;
}

.cervejas img {
  max-width: 100px;
  max-height: 120px;
  margin-top: 5px;
}

.cervejas p {
  margin-top: 5px;
  font-size: 20px;
}

.cervejas .nomeCerveja {
  margin-top: 5px;
  font-size: 20px;
  font-style: italic;
}

.cervejas .marcaCerveja {
  margin-top: 5px;
  font-size: 15px;
}

.cervejas .precoCerveja {
  margin-top: 5px;
  font-size: 22px;
  font-weight: 600;
}

.cervejas button {
  background: var(--yellow);
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  line-height: 20px;
  padding: 10px 16px;
  text-align: center;
  margin: 15px;
}
</style>