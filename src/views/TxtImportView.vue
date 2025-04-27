<script setup>
import { ref } from 'vue';
// TxtImportView is 文本导入
defineOptions({
  name: "TxtImportView"
});
</script>

<template>
  <PageLay class="txt-import-view">
    <CardBox title="txt导入" center>
      <form>
        <table class="table-form2">
          <tbody>
            <tr>
              <td>文件路径</td>
              <td>
                <input type="file" />
              </td>
              <td><button class="pri-btn">提交</button></td>
            </tr>
            <tr>
              <td colspan="3">
                <strong>格式A：</strong>
                号码，号码，号码&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>格式B：</strong>
                号码=金额，号码=金额，号码=金额
                 <span class="red">(逗号也可以用空格代表)</span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>四字现格式：</strong>例如1234现=a1234
              </td>
            </tr>
            <tr> <td colspan="3"> 说明：由于各会员使用的（txt文件）的格式不一样，如果不符合网站上要求的格式，有可能导入到网站 （没有下注之前）的号码内容和自己（txt文件）里号码内容不一致，操作时请认真检查，如果出现内容不一致，请不要下注。 </td> </tr>
          </tbody>
        </table>
      </form>
    </CardBox>
    <CardBox title="文件明细" center></CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.txt-import-view {
  /* Add your styles here */
}
</style>
