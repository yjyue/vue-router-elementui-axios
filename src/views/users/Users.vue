<template>
  <div class="users">
    <div class="users-filter mian-container">
        <!-- <el-input placeholder="请输入内容"></el-input> -->
        <el-form class="users-from" ref="form" :model="form">
          <el-row>
            <el-col :span="22" class="from-filter">
              <el-form-item class="from-item">
                <el-input class="item-input" size="small" v-model="form.name" placeholder="输入用户名"></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
              </el-col>
          </el-row>
        </el-form>
    </div>
    <!-- 表格 -->
    <div class="table-box">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleClick(scope.row)" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      msg: "",
      form:{
        name:""
      },
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
