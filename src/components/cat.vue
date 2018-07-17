<template>
  <div class="cat">
    <div class="index_search">
      <img src="/static/image/search.png" alt="">
    </div>
    <div class="cat_nav">
      <ul>
        <li v-for="catleibie in cat" @click="catNavTab" :data-id='catleibie.cat_id'>{{catleibie.name}}</li>
      </ul>
    </div>
    <div class="cat_banner">
      <img src="/static/image/banner.png" alt="">
    </div>
    <div class="cat_nav_nav">
      <ul>
        <li>国产主粮</li>
        <li>进口主粮</li>
        <li>口味配方</li>
        <li>单斤售卖</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        cat: []
      }
    },
    methods: {
      getcatInfo: function () {
        this.$http.get("http://localhost:3000/catFenlei").then(function (response) {
          this.cat = response.data;
        });
      },
      catNavTab: function () {
        // $("[data-id='2']").addClass("cat_nav_active");
        $("body").on('click', '.cat_nav>ul>li', function () {
          $(this).addClass("cat_nav_active");
          $(this).siblings().removeClass("cat_nav_active");
        })
      }
    },
    created() {
      this.getcatInfo();
      this.catNavTab();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cat_nav {
    width: 100%;
    height: 0.7rem;
    background: #fff;
  }

  .cat_nav ul {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
  }

  .cat_nav ul li {
    text-align: center;
    font-size: 0.3rem;
    flex: 0 0 16%;
  }

  .cat_banner {
    width: 100%;
    height: 3rem;
    border-radius: 0.12rem;
    overflow: hidden;
  }

  .cat_banner img {
    width: 100%;
    height: 100%;
  }

  .cat_nav_nav {
    width: 100%;
    height: 1rem;
    background: #fff;
    border-radius: 0.12rem;
    overflow: hidden;
  }

  .cat_nav_nav ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cat_nav_nav ul li {
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 1rem;
    color: #888;
  }

  .cat_nav_active {
    border-bottom: 0.03rem solid red;
    color: red;
  }

</style>
