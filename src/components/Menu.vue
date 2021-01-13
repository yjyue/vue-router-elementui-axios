<template>
  <div id="Menu">
    <h3 class="logo-title">系统管理</h3>
    <div class="toggle-button" @click="toggleCallpse()">|||</div>
    <el-menu :unique-opened="true" :router="true" :collapse="isCollapse" :collapse-transition="false"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 一级菜单 -->
      <el-submenu v-for="item in menuList" :key="item.id" :index="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item v-for="sub in item.children" :key="sub.id" :index="sub.path">
           <i class="el-icon-menu"></i>
            <span>{{sub.authName}}</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  data(){
    return {
      menuList:[],
      isCollapse: false
    }
  },
  computed:{
    ...mapState(['menusList'])
  },
  created(){
    this.menuList = this.menusList
    console.log(this.menusList)
  },
  methods:{
    toggleCallpse(){
      this.isCollapse = !this.isCollapse
      // 传值给父组件
      this.$emit('child-event',this.isCollapse)
    }
  },
  
};
</script>

<style scoped>
.el-menu{
    border: none;
  }
.logo-title{
    background-color: #304156;
    color: #ffffff;
    text-align: left;
    padding-left: 30px;
    line-height: 60px;
  }
  .toggle-button{
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>
