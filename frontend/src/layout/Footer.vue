<template>
  <div class="footer">
    <footer>
      <div class="footerMsg">
        <p>Eugênio Beer &copy; 2022</p>
        <p>PROIBIDO PARA MENORES DE 18 ANOS. BEBA COM MODERAÇÃO.</p>
        <div class="footerSocialMedias">
          <a href="#"><img src="../assets/logoFacebook.png" alt="Facebook Eugênio Beer" /></a>
          <a href="#"><img src="../assets/logoInsta.webp" alt="Facebook Eugênio Beer" /></a>
          <a href="#"><img src="../assets/logoYouTube.png" alt="Facebook Eugênio Beer" /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer footer {
  margin-top:20px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-red);
}

.footer footer .footerMsg {
  margin-top: 20px;
  font-size: 30px;
  color: var(--yellow);
  text-align: center;
  line-height: 7vh;
}

.footer footer .footerMsg .footerSocialMedias {
  display: flex;
}

.footer footer .footerMsg .footerSocialMedias a {
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  margin: 15px auto;
}
.footer footer .footerMsg .footerSocialMedias a:nth-child(3) {
  width: 20px;
  height: 50px;
}
</style>