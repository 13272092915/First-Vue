<template>
  <div id="app" class="index">
    <div class="index_header">
      <div class="index_header_left">
        <i></i>长沙
      </div>
      <p>猫猫主粮</p>
      <i class="index_header_right"></i>
    </div>
    <nav class="index_nav">
      <div class="index_nav_li">
        <router-link to="/">猫猫</router-link>
      </div>
      <div class="index_nav_li">
        <router-link to="/dog">狗狗</router-link>
      </div>
      <div class="index_nav_li">
        <router-link to="/xiao">小宠</router-link>
      </div>
      <div class="index_nav_li">
        <router-link to="/shui">水族</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import Cat from "./components/cat";
  import Dog from "./components/dog";
  import Xiao from "./components/xiao";
  import Shui from "./components/shui";

  export default {
    name: "App",
    components: {
      Cat,
      Dog,
      Xiao,
      Shui
    }
  };

</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .index {
    width: 100%;
    height: 2rem;
    background: url(/static/image/index_header_img.png);
    background-size: 100% 100%;
  }

  .index_header {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .index_header>p {
    height: 100%;
    width: 50%;
    color: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.36rem;
  }

  .index_header_left {
    width: 20%;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
  }

  .index_header_left>i {
    display: block;
    width: 0.3rem;
    height: 0.4rem;
    background: url(/static/image/index_icon1.png);
    background-size: 100% 100%;
    margin-right: 0.1rem;
  }

  .index_header_right {
    width: 20%;
    background: url(/static/image/index_icon2.png) no-repeat;
    background-size: 35%;
    background-position: center center;
  }

  .index_nav {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .index_nav_li {
    width: 10%;
    height: 70%;
    line-height: 0.7rem;
    color: #fff;
    text-align: center;
  }

  .router-link-exact-active {
    border-bottom: 0.05rem solid #fff;
  }

  .index_nav_li a {
    color: #fff;
    display: block;
    height: 100%;
  }

  .index_search {
    width: 100%;
    height: 1.14rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .index_search img {
    display: block;
    width: 90%;
    height: 50%;
  }

</style>
