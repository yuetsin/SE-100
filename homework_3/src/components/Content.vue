<template>
  <div class="content">
    <span class="md-display-3">Project 3</span>
    <span class="md-title">Curricula Querier</span>
    <span
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
      <md-button class="md-raised md-primary">查询</md-button>
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
        <md-bottom-bar-item @click="switchPart('room')" md-icon="place">按教室</md-bottom-bar-item>
        <md-bottom-bar-item @click="switchPart('teacher')" md-icon="person">按教师</md-bottom-bar-item>
        <md-bottom-bar-item @click="switchPart('name')" md-icon="book" md-active>按课名</md-bottom-bar-item>
      </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data: () => ({
    vertical: 'bottom',
    horizontal: 'center',
    duration: 4000
  }),
  methods: {
    switchPart(name) {
      switch(name) {
        case 'room':
          break;
        case 'teacher':
          break;
        case 'name':
          break;
      }
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
