<template>
  <div id="Menu">
    <h3 class="logo-title">系统管理</h3>

    <el-menu :unique-opened="true" :router="true"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="users">
           <i class="el-icon-location"></i>
            <span>用户列表</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="1-1">
           <i class="el-icon-location"></i>
            <span>角色列表</span>
        </el-menu-item>
        <el-menu-item index="1-1">
           <i class="el-icon-location"></i>
            <span>权限列表</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="1-1">
           <i class="el-icon-location"></i>
            <span>商品列表</span>
        </el-menu-item>
        <el-menu-item index="1-1">
           <i class="el-icon-location"></i>
            <span>商品分类</span>
        </el-menu-item>
      </el-submenu>


    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu"
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
</style>
