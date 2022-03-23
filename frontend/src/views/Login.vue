<template>
  <div>
    <main>
      <div class="Container">
        <div class="nameStore">
          <p>Eugênio Beer</p>
        </div>
        <div class="loginForm">
          <p>Faça login</p>
          <div class="form">
            <label for="">Insira seu login:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite aqui o seu login"
            />

            <label for="">Insira sua senha:</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Digite sua senha"
            />

            <input type="button" value="Logar" />
          </div>
          <p>
            Não tem conta?
            <router-link to="/Registrar">
              <a href="#">Registra-se</a></router-link
            >
          </p>
          <p>
            Esqueceu sua senha?
            <router-link to="/RecuperarSenha">
              <a href="#">Recuperar</a></router-link
            >
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
/* CONTAINER */
main .Container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

/* NOME DA LOJA */
main .Container .nameStore p {
  color: var(--yellow);
  font-size: 80px;
  font-family: "Inspiration", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

/* LOGIN */
main .Container .loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

main .Container .loginForm p {
  font-size: 25px;
  font-weight: 800;
}

main .Container .loginForm .form {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
main .Container .loginForm .form label {
  margin-top: 10px;
}

main .Container .loginForm p:nth-child(3),
main .Container .loginForm p:nth-child(4) {
  font-size: 15px;
  margin: 2px;
}

main .Container .loginForm .form input {
  background: var(--yellow2);
  border-radius: 8px;
  box-sizing: border-box;
  margin: 10px;
  height: 30px;
  width: 190px;
  padding: 10px;
}

main .Container .loginForm .form input:nth-child(5) {
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