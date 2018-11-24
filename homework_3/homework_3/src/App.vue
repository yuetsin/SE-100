<template>
  <div id="app">
    <img src="./assets/logo.png">
    <span class="md-display-3">Project 3</span>
    <span class="md-title">Curricula Querier</span>
    <md-layout :md-gutter="40">
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="year">学年</label>
          <md-select name="year" v-on:change="checkValidation()" id="year" v-model="year">
            <md-option value="2018">2018 - 2019</md-option>
            <md-option value="2017">2017 - 2018</md-option>
            <md-option value="2016">2016 - 2017</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label for="term">学期</label>
          <md-select name="term" v-on:change="checkValidation()" id="term" v-model="term">
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
        <md-button v-on:click="resetUI()" class="md-raised md-accent">重置</md-button>
      </md-layout>
      <md-layout>
        <md-button  v-on:click="clickQuery(year, term)" class="md-raised md-primary" v-bind:disabled=queryStyle>查询</md-button>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout :md-gutter="40" v-bind:hidden=resultStyle>
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="building">教学楼</label>
          <md-select name="building" id="building" v-on:change="sortClassroom()" v-model="building">
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
              <md-option v-for="classroom in rooms">
                  {{ classroom.id }}
              </md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout md-gutter="8" v-bind:hidden=resultStyle>
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
      <md-bottom-bar-item v-on:click="switchPart('room')" md-icon="room">按教室</md-bottom-bar-item>
      <md-bottom-bar-item v-on:click="switchPart('teacher')" md-icon="teacher">按教师</md-bottom-bar-item>
      <md-bottom-bar-item v-on:click="switchPart('name')" md-icon="name" md-active>按课名</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script lang="ts">
    /* eslint-disable */
    import './main'
    import { Parser } from "./parser";
    import Vue from 'vue'
    import jquery from 'jquery'

    let globalParser: Parser;

    export default Vue.extend({
        data: function() {
            return {
                'year': undefined,
                'term': undefined,
                'building': undefined,
                'room': undefined,
                'queryStyle': true,
                'resultStyle': true,
                'rooms': []
            }
        },

        methods: {
            clickQuery(year: string, term: string): void {

                function startQuery(start_year: string, term: string) {
                    let term_id = 0;
                    switch (term) {
                        case 'autumn':
                            term_id = 1;
                            break;
                        case 'spring':
                            term_id = 2;
                            break;
                        case 'summer':
                            term_id = 3;
                            break;
                    }
                    let json_link_header = "https://raw.githubusercontent.com/yuxiqian/finda-studyroom/master/json_output/"
                    let json_url = json_link_header + start_year + "_" + (eval(start_year) + 1) + "_" + term_id + ".json";
                    jquery.get(json_url, function(result: string){
                        globalParser = Parser.constructor(result);
                    });
                }
                startQuery(year, term);
            },

            checkValidation(): void {
                if ((this.$data['year'] != undefined) && (this.$data['term'] != undefined)) {
                    this.$data.queryStyle = false;
                    // alert("OK");
                    return
                }
                this.$data.queryStyle = true;
                // alert("Bad");
            },
            resetUI(): void {
                this.$data.year = undefined;
                this.$data.term = undefined;
                this.$data.building = undefined;
                this.$data.room = undefined;
                this.checkValidation();
            },
            findClassroom(): void{
                if (Parser.)
            },
            switchPart(part: string): void {
                // alert("called switchpart");
            }
        }
    })

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
