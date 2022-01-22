<template>
  <!-- <div class="text-center py-10" style="background-color: #181b48">
    <div class="wh text-h5">River Port 2022</div>
    <v-icon class="wh">mdi-instagram</v-icon>
    <v-icon class="wh">mdi-facebook</v-icon>
    <v-icon class="wh">mdi-whatsapp</v-icon>
  </div> -->
  <div class="footer-basic">
    <footer>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Home</a></li>
      </ul>
      <p class="copyright">River Port © 2022</p>
    </footer>
  </div>
</template>

<style scoped>
.wh {
  color: white;
}
.footer-basic {
  padding: 40px 0;
  background-color: #ffffff;
  color: #4b4c4d;
}

.footer-basic ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
}

.footer-basic li {
  padding: 0 10px;
}

.footer-basic ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

.footer-basic ul a:hover {
  opacity: 1;
}

.footer-basic .social {
  text-align: center;
  padding-bottom: 25px;
}

.footer-basic .social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 8px;
  color: inherit;
  opacity: 0.75;
}

.footer-basic .social > a:hover {
  opacity: 0.9;
}

.footer-basic .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 0;
}
</style>