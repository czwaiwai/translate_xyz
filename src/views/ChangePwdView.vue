<script setup>
import { ref } from 'vue';
import { Message } from '@arco-design/web-vue';
// ChangePwdView is 修改密码
defineOptions({
  name: "ChangePwdView"
});
const form = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
});
const rules = {
  oldPassword: [
    { required: true, message: '请输入旧密码' },
    { min: 6, max: 20, message: '密码长度在6到20个字符之间' }
  ],
  newPassword: [
    { required: true, message: '请输入新密码' },
    { min: 6, max: 20, message: '密码长度在6到20个字符之间' }
  ],
  confirmPassword: [
    { required: true, message: '请确认新密码' },
    { min: 6, max: 20, message: '密码长度在6到20个字符之间' }
  ]
};
const handleSubmit = async (values, errors) => {
  console.log('values:', values, '\nerrors:', errors)
  if (errors) {
    return
  }
  Message.success({
    content: '提交成功',
    closable: true
  });

  // const { oldPassword, newPassword, confirmPassword } = form.value;
  // if (newPassword !== confirmPassword) {
  //   alert('新密码和确认密码不一致');
  //   return;
  // }
  // // Call API to change password
  // try {
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   alert('密码修改成功');
  // } catch (error) {
  //   alert('密码修改失败');
  // }
};
</script>

<template>
  <PageLay class="change-pwd-view">
    <CardBox title="账户修改密码" padding="10px">
      <a-form :model="form" :style="{ width: '600px' }" :rules="rules" @submit="handleSubmit">
        <a-form-item label="旧密码" field="oldPassword">
          <a-input-password v-model="form.oldPassword" placeholder="请输入旧密码" />
        </a-form-item>
        <a-form-item label="新密码" field="newPassword">
          <a-input-password v-model="form.newPassword" placeholder="请输入新密码" />
        </a-form-item>
        <a-form-item label="确认新密码" field="confirmPassword">
          <a-input-password v-model="form.confirmPassword" placeholder="请确认新密码" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" status="success" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
      <a-alert title="密码规则">
        密码需符合以下规则:<br />
        1.必须是8-16位的大小写字母及数字组合<br />
        2.不可相连3位以上连续数字 (如: Asdf1234)<br />
        3.不可相连3位以上连续字母 (如: Abcd1357)<br />
        4.不可相连3位以上相同数字 (如: Asdfg111)<br />
        5.不可相连3位以上相同字母 (如: Aaa01357)<br />
        6.密码不可包含帐号<br />
        7.密码开头2位不能和帐号相同 (如:帐号ff01、密码ffA3579)<br />
        8.不能包含键盘常用字串qwe、asd、zxc、qaz、wsx<br />
      </a-alert>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.change-pwd-view {
  /* Add your styles here */
}
</style>
