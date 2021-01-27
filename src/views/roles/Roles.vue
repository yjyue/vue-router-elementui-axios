<template>
  <div class="rolse">
    <!-- 面包屑 -->
    <div class="rolse-filter crumbs-container">
      <el-form class="users-from from_crumbs">
        <el-row>
          <el-col :span="22">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>权限列表</el-breadcrumb-item>
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
      <!-- 搜索框 -->
      <div class="search-container">
        <el-input placeholder="Title" class="search-item" />
        <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
      </div>
      <!-- 列表 -->
      <div class="table-list">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="primary" @click="handleClick(scope.row)" size="mini">编辑</el-button>
              <el-button type="danger" size="mini" @click="add()">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pages">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "rolse",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style lang="scss">

</style>
<style lang="scss" scoped>
</style>
