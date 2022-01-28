<template>
  <div>
    <p class="error404">404</p>
    <p class="errorText">Oops! Page not found!</p>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div {
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.error404 {
  font-size: 10vw;
  color: #fa8072;
}
.errorText {
  font-size: 3vw;
}

@media screen and (max-width: 700px) {
  .error404 {
    font-size: 15vw;
    color: #ef1899;
  }
  .errorText {
    font-size: 7vw;
  }
}
</style>
