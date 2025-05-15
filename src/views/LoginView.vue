<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '@/stores/index.js'
import * as api from '@/lib/api.js'

defineOptions({
  name: 'LoginView',
})
const userStore = useUserStore()
const router = useRouter()
const formData = ref({
  username: '',
  password: '',
})
const rules = {
  username: [{ required: true, message: '用户名不能为空' }],
  password: [
    { required: true, message: '密码不能为空' },
    { minLength: 6, maxLength: 20, message: '密码长度在6到20个字符之间' },
  ],
}
const handleSubmit = async ({ values, errors }) => {
  console.log('values:', values, '\nerrors:', errors)
  if (errors) {
    return
  }
  // let res = await api.login({
  //   username: formData.value.username,
  //   password: formData.value.password
  // }).catch(err => {
  //   Message.error('登录失败，请稍后再试');
  //   return Promise.reject(err);
  // })
  // console.log(res.data)
  let res = {
    data: {
      name: 'y05',
      token: 'xxxxxxx',
      credit: 0,
      used: 0,
      canUse: 0,
      serialNum: '25089',
    },
  }
  userStore.setUserInfo(res.data)
  Message.success('登录成功')
  router.push('/home')
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">欢迎登录</h1>
      <a-form :model="formData" @submit="handleSubmit" :rules="rules" layout="vertical">
        <a-form-item label="用户名" field="username">
          <a-input v-model="formData.username" placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item label="密码" field="password">
          <a-input v-model="formData.password" type="password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" long>登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background: linear-gradient(135deg, #4caf50, #81c784);
}

.login-box {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
  }
}

.login-title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
}

:deep(.a-input, .a-button) {
  border-radius: 4px;

  @media (max-width: 768px) {
    height: 40px;
  }
}
</style>
