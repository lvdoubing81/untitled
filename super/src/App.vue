<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view/>
    </keep-alive>
    <main-tar-bar/>
  </div>
</template>

<script>


// eslint-disable-next-line no-unused-vars
import MainTarBar from "@/components/content/maintarbar/MainTarBar";


export default {


  name: 'App',
  components: {
    MainTarBar

  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
