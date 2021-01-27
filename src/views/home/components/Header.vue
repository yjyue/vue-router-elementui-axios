<template>
  <div id="Header" class="header_container clearfix">
    <h3 class="logo-title fl">系统管理</h3>
    <div>
      <el-button type="danger" size="mini" @click="logout()">退出</el-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {

    }
  },
  methods:{
     async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push({path:'/login'}) 
    }
  }

}
</script>

<style lang="scss" scoped>
.header_container{
  display: flex;
}
.logo-title{
    display:inline-block;
    color: #ffffff;
    padding-left: 30px;
    line-height: 60px;
    flex: 1;
  }
</style>