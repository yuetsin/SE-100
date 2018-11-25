<template>
  <div id="app">
    <img src="./assets/logo.png">
    <span class="md-display-3">Project 3</span>
    <span class="md-title">Curricula Querier</span>
    <md-layout :md-gutter="40">
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="year">学年</label>
          <md-select name="year" v-on:change="checkValidation(); checkRoom()" id="year" v-model="year">
            <md-option value="2018">2018 - 2019</md-option>
            <md-option value="2017">2017 - 2018</md-option>
            <md-option value="2016">2016 - 2017</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label for="term">学期</label>
          <md-select name="term" v-on:change="checkValidation(); switchWeek(); checkRoom()" id="term" v-model="term">
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
                  <label for="week">周数</label>
                  <md-select name="week" id="week" v-model="week" v-on:change="checkRoom()">
                      <md-option v-for="week in weeks" :key="week" :value="week">
                          第 {{ week }} 周
                      </md-option>
                  </md-select>
              </md-input-container>
          </md-layout>
          <md-layout>
              <md-input-container>
                  <label for="day">星期</label>
                  <md-select name="day" id="day" v-model="day" v-on:change="checkRoom()">
                      <md-option value=1>星期一</md-option>
                      <md-option value=2>星期二</md-option>
                      <md-option value=3>星期三</md-option>
                      <md-option value=4>星期四</md-option>
                      <md-option value=5>星期五</md-option>
                  </md-select>
              </md-input-container>
          </md-layout>
          <md-layout md-flex="30">
          </md-layout>
      </md-layout>
    <md-layout :md-gutter="40" v-bind:hidden=resultStyle>
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="building">教学楼</label>
          <md-select name="building" id="building" v-on:change="findClassroom(); checkRoom()" v-model="building">
            <md-option value="minhang-west" :disabled="true">闵行校区西区</md-option>
            <md-option value="上院">上院</md-option>
            <md-option value="中院">中院</md-option>
            <md-option value="下院">下院</md-option>
            <md-option value="minhang-east" :disabled="true">闵行校区东区</md-option>
            <md-option value="东上院">东上院</md-option>
            <md-option value="东中院">东中院</md-option>
            <md-option value="东下院">东下院</md-option>
            <md-option value="xuhui" :disabled="true">徐汇校区</md-option>
            <md-option value="教一楼">教一楼</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label for="room">门牌号</label>
          <md-select name="room" id="room" v-model="room" v-on:change="checkRoom()">
              <md-option :value="classroom" v-for="classroom in rooms" :key="classroom">
                  {{ classroom }}
              </md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout md-gutter="8" v-bind:hidden=resultStyle>

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
    import 'jquery'

    let globalParser: Parser;

    export default Vue.extend({
        data: function() {
            return {
                'year': undefined,
                'term': undefined,
                'building': undefined,
                'room': undefined,
                'week': undefined,
                'day': undefined,
                'queryStyle': true,
                'resultStyle': true,
                'rooms': [],
                'weeks': []
            }
        },

        methods: {
            clickQuery(start_year: string, term: string): void {

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

                jQuery.get(json_url,
                    function (data) {
                        globalParser = new Parser(JSON.stringify(data));
                        globalParser.printObject();
                    }, 'json');
                this.findClassroom();
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
                this.$data.week = undefined;
                this.$data.day = undefined;
                this.$data.weeks = [];
                this.$data.rooms = [];
                this.checkValidation();
            },
            findClassroom(): void {
                this.$data.rooms = globalParser.getClassroom(this.$data.building);
                if (this.$data.rooms.length > 0) {
                    this.$data.room = this.$data.rooms[0];
                } else {
                    this.$data.room = undefined;
                }
            },
            switchPart(part: string): void {
                this.$data.resultStyle = false;
            },
            switchWeek(): void {
                this.$data.weeks = [];
                if (this.$data.term == "summer") {
                    for (let i = 19; i <= 22; i++) {
                        this.$data.weeks.push(i);
                    }
                } else {
                    for (let i = 1; i <= 16; i++) {
                        this.$data.weeks.push(i);
                    }
                }
            },
            checkRoom(): void {
                if (this.$data.year == undefined) {
                    return
                }
                if (this.$data.term == undefined) {
                    return
                }
                if (this.$data.week == undefined) {
                    return
                }
                if (this.$data.day == undefined) {
                    return
                }
                if (this.$data.room == undefined) {
                    return
                }
                console.log(globalParser.getCourse(this.$data.week, this.$data.day, this.$data.room));
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
