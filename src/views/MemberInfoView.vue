<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores';
// MemberInfoView is 会员资料
defineOptions({
  name: "MemberInfoView"
});
let userStore = useUserStore()
</script>

<template>
  <PageLay class="member-info-view">
    <form>
      <div class="flex-box gap10 w100">
        <CardBox class="flex-item" title="会员资料" padding="0">
          <table class="table-form-green ">
            <tbody>
              <tr><td width="50%">账号：</td><td>{{ userStore.userInfo.name }}</td></tr>
              <tr><td>姓名：</td><td></td></tr>
              <tr><td>信用额度：</td><td>{{ userStore.userInfo.credit }}</td></tr>
            </tbody>
          </table>
        </CardBox>
        <CardBox class="flex-item" title="录码模式" padding="0" space="0">
          <table class="table-form-green ">
            <tbody>
              <tr>
                <td width="20%">自动：</td>
                <td width="13%"><input type="radio" name="input_mode"></td>
                <td width="20%">小票打印：</td>
                <td width="13%"><input type="radio" name="show_mode"></td>
                <td width="20%">实际赔率：</td>
                <td width="13%"><input type="radio" name="odds_type"></td>
              </tr>
              <tr>
                <td width="20%">回车：</td>
                <td width="13%"><input type="radio" name="input_mode"></td>
                <td width="20%">显示彩种：</td>
                <td width="13%"><input type="radio" name="show_mode"></td>
                <td width="20%">转换赔率：</td>
                <td width="13%"><input type="radio" name="odds_type"></td>
              </tr>
              <tr>
                <td>小票截图</td>
                <td colspan="5"><input type="checkbox" ></td>
              </tr>
              <tr>
                <td>销售点：</td>
                <td colspan="5"><input type="text"></td>
              </tr>
            </tbody>
          </table>
        </CardBox>
      </div>
      <div class="tc ptb20"><button class="pri-btn" type="submit">提交</button></div>
    </form>
    <CardBox class="mt10" hideHead padding="0">
      <div class="playtype" >
      <table class="table-form-green">
        <thead>
          <tr class="bg1">
            <td width="6%"></td>
            <td width="13%">类别</td>
            <td width="10%">最小下注</td>
            <td width="13%">赔率上限(多个用/分开)</td>
            <td width="13%">单注上限</td>
            <td width="13%">单项上限</td>
            <td width="13%">交易回水</td>
            <td width="19%">赔率</td>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr class="bg3">
            <td>
              <span href="javascript:void(0)" class="fn-ico-switch btn-pointer" _target="td_erd">

              </span>
            </td>
            <td>
              <span href="javascript:void(0)" class="btn-pointer" status="1" act="erd">二定位</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id="td_erd" >
            <td colspan="8" style="padding:0px;">
              <table class="t-1">
                <tbody>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">口口XX</td>
                    <td width="10%">1</td>
                    <td width="13%">100</td>
                    <td width="13%">1000</td>
                    <td width="13%">100000</td>
                    <td width="13%">
                      <select id="1" index="0" first="1" selectall="1" _name="return_water" class="w70 s_erd"></select>
                    </td>
                    <td width="19%">
                      <select index="0" selectall="1" _name="odds_limit" class="s_a s_erd"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">口X口X</td>
                    <td width="10%">1</td>
                    <td width="13%">100</td>
                    <td width="13%">1000</td>
                    <td width="13%">100000</td>
                    <td width="13%">
                      <select id="2" index="1" _name="return_water" class="w70 s_erd"></select>
                    </td>
                    <td width="19%">
                      <select index="1" _name="odds_limit" class="s_a s_erd"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">口XX口</td>
                    <td width="10%">1</td>
                    <td width="13%">100</td>
                    <td width="13%">1000</td>
                    <td width="13%">100000</td>
                    <td width="13%">
                      <select id="3" index="2" _name="return_water" class="w70 s_erd"></select>
                    </td>
                    <td width="19%">
                      <select index="2" _name="odds_limit" class="s_a s_erd"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">X口X口</td>
                    <td width="10%">1</td>
                    <td width="13%">100</td>
                    <td width="13%">1000</td>
                    <td width="13%">100000</td>
                    <td width="13%">
                      <select id="4" index="3" _name="return_water" class="w70 s_erd"></select>
                    </td>
                    <td width="19%">
                      <select index="3" _name="odds_limit" class="s_a s_erd"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">X口口X</td>
                    <td width="10%">1</td>
                    <td width="13%">100</td>
                    <td width="13%">1000</td>
                    <td width="13%">100000</td>
                    <td width="13%">
                      <select id="5" index="4" _name="return_water" class="w70 s_erd"></select>
                    </td>
                    <td width="19%">
                      <select index="4" _name="odds_limit" class="s_a s_erd"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">XX口口</td>
                    <td width="10%">1</td>
                    <td width="13%">100</td>
                    <td width="13%">1000</td>
                    <td width="13%">100000</td>
                    <td width="13%">
                      <select id="6" index="5" _name="return_water" class="w70 s_erd"></select>
                    </td>
                    <td width="19%">
                      <select index="5" _name="odds_limit" class="s_a s_erd"></select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <span href="javascript:void(0)" class="fn-ico-switch btn-pointer" _target="td_sand">

              </span>
            </td>
            <td>
              <span href="javascript:void(0)" class="btn-pointer" status="1" act="sand">三定位</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr id="td_sand" >
            <td colspan="8" style="padding:0px;">
              <table class="t-1">
                <tbody>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">口口口X</td>
                    <td width="10%">0.1</td>
                    <td width="13%">1000</td>
                    <td width="13%">100</td>
                    <td width="13%">7000</td>
                    <td width="13%">
                      <select id="7" index="6" selectall="1" _name="return_water" class="w70 s_sand"></select>
                    </td>
                    <td width="19%">
                      <select index="6" selectall="1" _name="odds_limit" class="s_a s_sand"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">口口X口</td>
                    <td width="10%">0.1</td>
                    <td width="13%">1000</td>
                    <td width="13%">100</td>
                    <td width="13%">7000</td>
                    <td width="13%">
                      <select id="8" index="7" _name="return_water" class="w70 s_sand"></select>
                    </td>
                    <td width="19%">
                      <select index="7" _name="odds_limit" class="s_a s_sand"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">口X口口</td>
                    <td width="10%">0.1</td>
                    <td width="13%">1000</td>
                    <td width="13%">100</td>
                    <td width="13%">7000</td>
                    <td width="13%">
                      <select id="9" index="8" _name="return_water" class="w70 s_sand"></select>
                    </td>
                    <td width="19%">
                      <select index="8" _name="odds_limit" class="s_a s_sand"></select>
                    </td>
                  </tr>
                  <tr class="fn-hover">
                    <td width="6%"></td>
                    <td width="13%">X口口口</td>
                    <td width="10%">0.1</td>
                    <td width="13%">1000</td>
                    <td width="13%">100</td>
                    <td width="13%">7000</td>
                    <td width="13%">
                      <select id="10" index="9" _name="return_water" class="w70 s_sand"></select>
                    </td>
                    <td width="19%">
                      <select index="9" _name="odds_limit" class="s_a s_sand"></select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr class="fn-hover">
            <td width="6%"></td>
            <td width="13%">四定位</td>
            <td width="10%">0.1</td>
            <td width="13%">10000</td>
            <td width="13%">50</td>
            <td width="13%">2000</td>
            <td width="13%">
              <select id="11" index="10" _name="return_water" class="w70 s_10"></select>
            </td>
            <td width="19%">
              <select index="10" _name="odds_limit" class="s_a s_10"></select>
            </td>
          </tr>
          <tr class="fn-hover">
            <td width="6%"></td>
            <td width="13%">二字现</td>
            <td width="10%">1</td>
            <td width="13%">9.8/16.6</td>
            <td width="13%">2000</td>
            <td width="13%">80000</td>
            <td width="13%">
              <select id="12" index="11" _name="return_water" class="w70 s_11"></select>
            </td>
            <td width="19%">
              <select index="11" _name="odds_limit" class="s_a s_11"></select>
            </td>
          </tr>
          <tr class="fn-hover">
            <td width="6%"></td>
            <td width="13%">三字现</td>
            <td width="10%">1</td>
            <td width="13%">47/78.8/128</td>
            <td width="13%">1000</td>
            <td width="13%">50000</td>
            <td width="13%">
              <select id="13" index="12" _name="return_water" class="w70 s_12"></select>
            </td>
            <td width="19%">
              <select index="12" _name="odds_limit" class="s_a s_12"></select>
            </td>
          </tr>
          <tr class="fn-hover">
            <td width="6%"></td>
            <td width="13%">四字现</td>
            <td width="10%">1</td>
            <td width="13%">352/704/1408/352</td>
            <td width="13%">50</td>
            <td width="13%">3000</td>
            <td width="13%">
              <select id="14" index="13" _name="return_water" class="w70 s_13"></select>
            </td>
            <td width="19%">
              <select index="13" _name="odds_limit" class="s_a s_13"></select>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div id="show_tip" class="hide">
        <span>
          <font color="red">【提示：因上级赚水调整，导致交易回水超限，详见上表中交易回水一栏红色字体提示，请重新设置并提交保存。】</font>
        </span>
      </div> -->
    </div>
    </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.member-info-view {
  /* Add your styles here */
}
</style>
