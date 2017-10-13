<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <div class="block">
      <span class="demonstration">显示默认颜色</span>
      <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    </span>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">hover 显示颜色</span>
      <span class="wrapper">
    <el-button :plain="true" type="success">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
    </span>
    </div>

    <div class="block">
      <hello-world></hello-world>
      <ul>
        <li><router-link to="/hello">点我跳转helloWorld</router-link></li>
        <li><router-link to="/second">点我跳转 second</router-link></li>
        <router-view class="view"></router-view>
      </ul>
    </div>

    <div class="block" id="second">
    </div>
  </div>
</template>
<script>
  import ElCheckboxButton from "../node_modules/element-ui/packages/checkbox/src/checkbox-button";
  import ElBreadcrumb from "../node_modules/element-ui/packages/breadcrumb/src/breadcrumb";
  import ElCheckbox from "../node_modules/element-ui/packages/checkbox/src/checkbox";
  import HelloWorld from "./components/HelloWorld.vue";
  import second from "./components/second.vue"
  import VueRouter from "vue-router"

  export default {
    components: {ElCheckbox, ElBreadcrumb, ElCheckboxButton, HelloWorld,second, VueRouter}, data () {
      return {
        msg: 'Use Vue 2.0 Today!'
      }
    },

    methods: {
      startHacking () {
        this.$notify({
          title: 'It Works',
          message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
          duration: 6000
        })
      }
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }

  #app{
    margin: 10%;
  }
</style>
