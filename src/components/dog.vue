<template>
  <div class="dog">
    <div class="index_search">
      <img src="/static/image/search.png" alt="">
    </div>
    <div class="dog_nav">
      <ul>
        <li v-for="dogleibie in dog">{{dogleibie.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return {
      dog:[]
    }
  },
  methods:{
    getdogInfo:function(){
      this.$http.get("http://localhost:3000/dogFenlei").then(function(response){
        this.dog = response.data;
      });
    }
  },
  created() {
    this.getdogInfo();
  }
}
</script>

<style scoped>
.dog_nav {
  width: 100%;
  height: 0.7rem;
  background: #fff;
}
.dog_nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
}
.dog_nav ul li {
  text-align: center;
  font-size: 0.3rem;
  flex: 0 0 16.5%;
}
</style>

