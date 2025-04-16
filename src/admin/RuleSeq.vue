<script setup>
import { ref } from 'vue';
// RuleSeq is 规则说明
defineOptions({
  name: "RuleSeq"
});

</script>

<template>
  <PageLay class="rule-seq">
   <CardBox title="" blue>
    <div class="bd" style="margin: 60px 115px 0;"> <h1 class="f16">本站销售<span class="pink">排列五</span>电脑体育彩票游戏规则</h1> <h3>第一章 总 则</h3> <p>第一条 根据财政部《彩票发行与销售管理暂行规定》和国家体育总局《体育彩票发行与销售管理暂行办法》</p> <p>第二条 本站彩票实行自愿购买,量力而行；凡下注者即被视为同意并遵守本规则。</p> <h3>第二章 游戏方法</h3> <p>第三条 “排列五”的每注彩票由00000-99999中的任意5位自然数排列而成。<strong class="pink">本站取前面4位做为游戏规则！</strong></p> <h2>假设下列为开奖结果:</h2> <table class="rule-ball"> <tbody><tr> <td width="14%">仟</td> <td width="14%">佰</td> <td width="14%">拾</td> <td width="14%">个</td> <td width="14%">球5</td> </tr> <tr class="fb pink f16"> <td>1</td> <td>2</td> <td>3</td> <td>4</td> <td>5</td> </tr> </tbody></table> <h3> 依照开奖结果，中奖范例如下： </h3> <h3> 四字定中奖： </h3> <h2> 1234 </h2> <h3> 二字定中奖： </h3> <h2> 12xx； 1x3x； 1xx4； x23x； x2x4； xx34 </h2> <h3> 三字定中奖： </h3> <h2> 123x； 12x4； 1x34； x234 </h2> <h3> 二字现中奖： </h3> <h2> 12；13；14；23；24；34 </h2> <h3> 三字现中奖： </h3> <h2> 123；124；134；234 </h2> <h3> 四字现中奖： </h3> <h2> 1234 现； </h2> <h3> 第三章 关于退码 </h3> <p> 第四条 “ <span class="pink">排列五</span>”每天开奖一次，摇奖过程在公证人员监督下进行，通过电视台播出。 </p> <p> 第五条 每期开奖后，以国家体育总局体育彩票管理中心公布的开奖号码为准。 </p> <h3> 第四章 附 则 </h3> <p> 第六条 本游戏规则最终解释权归本公司。 </p> </div>
   </CardBox>
  </PageLay>
</template>

<style lang="less" scoped>
.rule-seq {
  .rule-ball {
      width: 50%;
      margin: 0 0 1em;
      border-spacing: 0;
      border-collapse: collapse;
      border: 0;
      padding: 0;
    td {
        border: 2px solid #f37999;
        height: 22px;
        border-width: 0 1px 1px 0;
        padding: 4px;
        outline: none;
    }
  }
  h2{
    color: #FF00CC;
  }
}
</style>
