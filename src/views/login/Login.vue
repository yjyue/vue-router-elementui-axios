<template>
  <div class="Login login-wrap">
      <el-form class="login-from" :label-position="labelPosition" label-width="0px" :model="loginForm" :rules="loginRules" ref="loginForm">
        <div class="title-container">
          <h3 class="title">系统登录</h3>
        </div>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="Username" type="text" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="password" type="password" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="loginSubmit('loginForm')">登录</el-button>
        </el-form-item>
        
      </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data(){
    const validateUsername = (rule, value, callback) => {
      console.log(value)//登录名限制了 只能admin 登录
      if (!validUsername(value)) {
        callback(new Error('请输入正确得用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      console.log(value)
      if (value.length < 6) {
        callback(new Error('请输入至少6位数密码'))
      } else {
        callback()
      }
    }
    return{
      labelPosition: 'left',
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
    }
  },
  methods:{
    loginSubmit( formName ){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('验证通过 可以提交登录')
            this.$router.push({name:'home'}) 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<style scoped>
  .login-wrap{
    height: 100%;
    background: #465e7d;
    display: flex;
    justify-content: center;
    align-items: center;/*水平居中*/
  }
  .login-from{
    width: 300px;
    background: #fff;
    border: 1px solid #cccccc;
    
    padding: 30px;
  }

  .title-container{
    position: relative;
  }
  .title-container .title{
    width: 100%;
    text-align: center;
    padding-bottom: 15px;
  }
 
  .login-btn{
    width: 100%;
  }

</style>
