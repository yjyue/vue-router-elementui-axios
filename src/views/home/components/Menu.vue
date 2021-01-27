<template>
  <div id="Menu">
     <el-aside class="sidebar" :width="isCollapse?'64px':'240px'">
       <div class="toggle-button" @click="toggleCallpse()">|||</div>
        <el-menu :unique-opened ="true" :router="true" :collapse="isCollapse" :collapse-transition="false"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="item in permission_routes" :key="item.path" :index="item.path +''" v-if="!item.hidden">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="sub in item.children" :key="sub.path" :index="sub.path +''">
              <i class="el-icon-menu"></i>
                <span>{{sub.name}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
     </el-aside>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data(){
    return {
      menuList:[],
      isCollapse: false
    }
  },
  computed:{
    ...mapGetters(['permission_routes'])

  },
 mounted(){
   
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

<style lang="scss" scoped>
#Menu{
  height:100%;
}
.sidebar{
  height: 100%;
  background-color:#304156;
}
.el-menu{
    border: none;
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
