<template>
  <div id="app">
    <img src="./assets/logo.png">
    <span class="md-display-3">Project 3</span>
    <span class="md-title">Curricula Querier</span>
    <md-layout :md-gutter="40">
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="year">学年</label>
          <md-select name="year" id="year" v-model="year">
            <md-option value="2018">2018 - 2019</md-option>
            <md-option value="2017">2017 - 2018</md-option>
            <md-option value="2016">2016 - 2017</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label for="term">学期</label>
          <md-select name="term" id="term" v-model="term">
            <md-option value="autumn">秋季学期</md-option>
            <md-option value="spring">春季学期</md-option>
            <md-option value="summer">夏季小学期</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout :md-gutter="40">
      <md-layout md-flex-offset="35">
        <md-button class="md-raised md-accent">重置</md-button>
      </md-layout>
      <md-layout>
        <md-button onclick="startQuery(2018, 1)" class="md-raised md-primary">查询</md-button>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout :md-gutter="40">
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="building">教学楼</label>
          <md-select name="building" id="building" v-model="building">
            <md-option value="minhang-west" :disabled="true">闵行校区西区</md-option>
            <md-option value="upper">上院</md-option>
            <md-option value="middle">中院</md-option>
            <md-option value="lower">下院</md-option>
            <md-option value="minhang-east" :disabled="true">闵行校区东区</md-option>
            <md-option value="east-upper">东上院</md-option>
            <md-option value="east-middle">东中院</md-option>
            <md-option value="east-lower">东下院</md-option>
            <md-option value="xuhui" :disabled="true">徐汇校区</md-option>
            <md-option value="number-one">教一楼</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label for="room">room</label>
          <md-select name="room" id="room" v-model="room">
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout md-gutter="8">
      <md-layout md-flex-offset="30">
        <span class="md-dialog-title">Time Table</span>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout>
        <md-whiteframe md-elevation="2">2dp</md-whiteframe>
      </md-layout>
      <md-layout md-flex="30"></md-layout>
    </md-layout>
    <md-bottom-bar md-shift>
      <md-bottom-bar-item @click="$.switchPart('room')" md-icon="room">按教室</md-bottom-bar-item>
      <md-bottom-bar-item @click="switchPart('teacher')" md-icon="teacher">按教师</md-bottom-bar-item>
      <md-bottom-bar-item @click="switchPart('name')" md-icon="name" md-active>按课名</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script src="../node_modules/vue-material/dist/vue-material.js"></script>
<script lang='ts' src="main.ts"></script>
<script lang="ts">
  /* eslint-disable */
import Vue from 'vue'
// eslint-disable-next-line
import Component from 'vue-class-component'
@Component({
  name: 'app'
})
export default class App extends Vue {
  
}
let VueMaterial = require('vue-material')
Vue.use(VueMaterial)
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
<style src="vue-material/dist/vue-material.css"></style>
