<script setup>
import { ref } from 'vue';
// AdminChangePwd is 修改密码
defineOptions({
  name: "AdminChangePwd"
});
const adminChangePwd = ref();
console.log(adminChangePwd);

</script>

<template>
  <PageLay ref="adminChangePwd" class="admin-change-pwd">
    <template #extra>
      <SettingSubTab></SettingSubTab>
    </template>
    <CardBox title="账户修改密码" blue padding="0">
    <form>
      <table class="table-form">
        <tbody>
          <tr>
          <td>原密码：</td>
          <td><input class="w90" type="password" /></td>
        </tr>
        <tr>
          <td>新密码：</td>
          <td><input class="w90" type="password" /></td>
        </tr>
        <tr>
          <td>确认新密码：</td>
          <td><input class="w90" type="password" /></td>
        </tr>
        <tr>
          <td>密码规则：</td>
          <td class="blue">
            密码需符合以下规则:<br />
            1.必须是8-16位的大小写字母及数字组合<br />
            2.不可相连3位以上连续数字 (如: Asdf1234)<br />
            3.不可相连3位以上连续字母 (如: Abcd1357)<br />
            4.不可相连3位以上相同数字 (如: Asdfg111)<br />
            5.不可相连3位以上相同字母 (如: Aaa01357)<br />
            6.密码不可包含帐号<br />
            7.密码开头2位不能和帐号相同 (如:帐号ff01、密码ffA3579)<br />
            8.不能包含键盘常用字串qwe、asd、zxc、qaz、wsx<br />
          </td>
        </tr>
      </tbody>
      </table>
    </form>
   </CardBox>
   <div class="tc pt10"><button class="sub-btn">提交</button></div>
  </PageLay>
</template>

<style lang="less" scoped>
.admin-change-pwd {
  /* Add your styles here */
}
</style>
