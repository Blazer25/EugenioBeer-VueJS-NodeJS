<template>
  <div>
    <main>
      <div class="Container">
        <div class="registerForm">
          <p>Faça Registro</p>
          <div class="form">
            <label for="">Insira seu nome completo:</label>
            <input
              type="text"
              name="nomecompleto"
              id="nomecompleto"
              v-model="dadosForm.fullname"
              placeholder="Digite aqui o seu e-mail"
            />
            <label for="">Insira seu e-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="dadosForm.email"
              placeholder="Digite aqui o seu e-mail"
            />

            <label for="">Insira sua senha:</label>
            <input
              type="password"
              name="password1"
              id="password1"
              v-model="dadosForm.password"
              placeholder="Digite sua senha"
            />

            <label for="">Insira sua senha novamente:</label>
            <input
              type="password"
              name="password2"
              id="password2"
              v-model="dadosForm.confirmPassword"
              placeholder="Digite sua senha novamente"
            />

            <button type="submit" value="Registrar" @click="enviar">
              Enviar
            </button>

            <p class="jatemconta">
              Já tem conta?
              <router-link to="/Login"> <a href="">Faça Login</a></router-link>
            </p>
          </div>
        </div>
        <div class="nameStore">
          <p>Eugênio Beer</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import registroLogin from "../services/registroLogin";

export default {
  name: "RegisterPage",
  data() {
    return {
      dadosForm: {
        email: "",
        fullname: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async enviar() {
      const response = await registroLogin.salvar(this.dadosForm);
      console.log(response);
    },
  },
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
  margin-top: 120px;
}

/* LOGIN */
main .Container .registerForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

main .Container .registerForm p {
  font-size: 25px;
  font-weight: 800;
}

main .Container .registerForm .form {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
main .Container .registerForm .form label {
  margin-top: 10px;
}

main .Container .registerForm .jatemconta {
  font-size: 15px;
}

main .Container .registerForm .form input {
  background: var(--yellow2);
  border-radius: 8px;
  box-sizing: border-box;
  margin: 10px;
  height: 30px;
  width: 190px;
  padding: 10px;
}

main .Container .registerForm .form button {
  background: var(--yellow);
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  height: 50px;
  line-height: 20px;
  padding: 10px 16px;
  text-align: center;
  margin: 15px;
}
</style>