<template>
  <div v-if="Object.keys(itemParams).length!== 0" class="params-info">
      <table v-for="(table,index) in itemParams.rule.tables" class="info-size" :key="index">
        <tr v-for="(tr,indey)  in table" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>


    <table class="info-param">
      <tr v-for="(item,index) in itemParams.info.set">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="itemParams.info.images">
      <img :src="itemParams.info.images[0]">
    </div>
  </div>

</template>

<script>
    import TabControl from "../../../components/content/tabControl/tabControl";
    export default {
        name: "detailParamsInfo",
      components: {TabControl},
      props:{
        itemParams:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>
  .params-info{
    padding: 20px 12px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-info table{
    width: 100%;
    border-collapse: collapse;
  }
  .params-info table tr{
    height: 42px;
  }
  .params-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param-key{
    width: 95px;
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-param-value{
    color: #eb4868;
  }
  .info-img img{
    width: 100%;
  }
</style>
