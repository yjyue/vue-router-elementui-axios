<template>
  <div id="Home" class="Home">
    <el-container class="home-container">
      <!-- 侧边栏 -->
      <el-aside :width="childCallpse?'64px':'240px'" class="menu">
        <Menu @child-event="parentMeun"></Menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header class="header">
          <Header></Header>
        </el-header>
        <!-- 内容 -->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
        <!-- 底部 -->
        <!-- <el-footer class="foorer"><Footer></Footer></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: { Header, Menu, Footer },
  data() {
    return {
      list: [],
      childCallpse:false
    };
  },
  computed: {
    // ...mapState(["menusList"])
  },
  created() {
    // this.list = this.menusList;
  },
  methods:{
    // 获取子组件传得值
    parentMeun(data){
        this.childCallpse = data;
    }
  }

};
</script>

<style scoped>
.Home,
.home-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #304156;
}

.el-main {
  background-color: #e9eef3;
  padding: 10px;
}
</style>
