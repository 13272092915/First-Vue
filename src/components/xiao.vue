<template>
  <div class="xiao">
    <div class="index_search">
      <img src="/static/image/search.png" alt="">
    </div>
    <div class="xiao_nav">
      <ul>
        <li v-for="xiaoleibie in xiao">{{xiaoleibie.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return {
      xiao:[]
    }
  },
  methods:{
    getxiaoInfo:function(){
      this.$http.get("http://localhost:3000/xiaoFenlei").then(function(response){
        this.xiao = response.data;
      });
    }
  },
  created() {
    this.getxiaoInfo();
  }
}
</script>

<style scoped>
.xiao_nav {
  width: 100%;
  height: 0.7rem;
  background: #fff;
}
.xiao_nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
}
.xiao_nav ul li {
  text-align: center;
  font-size: 0.3rem;
  flex: 0 0 15%;
}
</style>
