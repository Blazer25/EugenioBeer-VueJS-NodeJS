<template>
<div>
    <main>
         <div class="container">
        <div class="nameStore">
          <p>Eugênio Beer</p>
        </div>
        <div class="recuperarSenha">
            <form action="">
                <label for="">Digite seu e-mail cadastrado para recuperar sua senha:</label>
                    <input type="email" placeholder="Digite seu e-mail" />
                    <input type="button" value="Recuperar" />
            </form>
        </div>
         </div>
    </main>
</div>
</template>

<script>
export default {
    name:'RecuperarSenhaPage'
}
</script>

<style scoped>
/* CONTAINER */
main .container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}

/* NOME DA LOJA */
main .container .nameStore p {
  color: var(--yellow);
  font-size: 80px;
  font-family: "Inspiration", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

/* FORM */
main .container .recuperarSenha {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

main .container .recuperarSenha form {
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
main .container .recuperarSenha form label {
  margin-top: 10px;
}


main .container .recuperarSenha form input {
  background: var(--yellow2);
  border-radius: 8px;
  box-sizing: border-box;
  margin: 10px;
  height: 30px;
  width: 190px;
  padding: 10px;
}

main .container .recuperarSenha form input:nth-child(3) {
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