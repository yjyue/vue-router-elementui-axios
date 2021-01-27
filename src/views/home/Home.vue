<template>
  <div id="Home" class="Home">

    <el-container class="home-container">
      <!-- 头部 -->
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
          <!-- 侧边栏 -->
          <Menu></Menu>
        <!-- 内容 -->
        <el-main class="main">
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>

  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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

<style lang="scss" scoped>
.Home,
.home-container {
  height: 100%;
}
/* .header{
  margin-bottom: 5px;
} */
.el-header,
.el-footer {
  background-color: #304156;
  color: #333;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  padding: 10px;
}
</style>
