<template>
  <div class="charts_box">
    <!-- 面包屑 -->
    <div class="rolse-filter crumbs-container">
      <el-form class="users-from from_crumbs">
        <el-row>
          <el-col :span="22">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>图表</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 内容 -->
    <div class="table_container">
        <el-row>
          <el-col :span="12">12</el-col>
          <el-col :span="12">34</el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
