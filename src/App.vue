<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <div>-->
<!--      <p>-->
<!--        If Element is successfully added to this project, you'll see an-->
<!--        <code v-text="'<el-button>'"></code>-->
<!--        below-->
<!--      </p>-->
<!--      <el-button>el-button</el-button>-->
<!--    </div>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <SalesPromotionMain msg="Welcome to Your SalesPromotionMain App"/>
      <AddGoodsPromotion msg=""/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SalesPromotionMain from "./components/SalesPromotionMain";
import AddGoodsPromotion from "./components/AddGoodsPromotion";
export default {
  name: 'app',
  components: {
    SalesPromotionMain,
      AddGoodsPromotion
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
