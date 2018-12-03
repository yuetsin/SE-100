<template>
  <form id="app" novalidate @submit.stop.prevent="open">
    <img src="./assets/logo.png">
    <span class="md-display-3">Project 3</span>
    <span class="md-title">Curricula Querier</span>

    <md-layout :md-gutter="40" >
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
      <md-layout :md-gutter="40">
          <md-layout md-flex-offset="30">
              <md-input-container>
                  <label for="week">周数</label>
                  <md-select name="week"  v-bind:disabled=resultStyle id="week" v-model="week" v-on:change="checkRoom()">
                      <md-option v-for="week in weeks" :key="week" :value="week">
                          第 {{ week }} 周
                      </md-option>
                  </md-select>
              </md-input-container>
          </md-layout>
          <md-layout>
              <md-input-container>
                  <label for="day">星期</label>
                  <md-select name="day" v-bind:disabled=resultStyle id="day" v-model="day" v-on:change="checkRoom()">
                      <md-option value=1>星期一</md-option>
                      <md-option value=2>星期二</md-option>
                      <md-option value=3>星期三</md-option>
                      <md-option value=4>星期四</md-option>
                      <md-option value=5>星期五</md-option>
                      <md-option value=6>星期六</md-option>
                      <md-option value=7>星期日</md-option>
                  </md-select>
              </md-input-container>
          </md-layout>
          <md-layout md-flex="30">
          </md-layout>
      </md-layout>
    <md-layout :md-gutter="40">
      <md-layout md-flex-offset="30">
        <md-input-container>
          <label for="building">教学楼</label>
          <md-select name="building" v-bind:disabled=resultStyle id="building" v-on:change="findClassroom(); checkRoom()" v-model="building">
            <md-option value="minhang-west" :disabled="true">闵行校区西区</md-option>
            <md-option value="上院">上院</md-option>
            <md-option value="中院">中院</md-option>
            <md-option value="下院">下院</md-option>
            <md-option value="minhang-east" :disabled="true">闵行校区东区</md-option>
            <md-option value="东上院">东上院</md-option>
            <md-option value="东中院">东中院</md-option>
            <md-option value="东下院">东下院</md-option>
              <md-option value="minhang-east" :disabled="true">更多闵行教学楼</md-option>
              <md-option value="木兰楼">木兰楼</md-option>
              <md-option value="陈瑞球">陈瑞球楼</md-option>
              <md-option value="杨咏曼">杨咏曼楼</md-option>
            <md-option value="xuhui" :disabled="true">徐汇校区</md-option>
              <md-option value="新上院">新上院</md-option>
              <md-option value="徐汇中院">徐汇中院</md-option>
              <md-option value="教一楼">教一楼</md-option>
              <md-option value="工程馆">工程馆</md-option>
              <md-option value="Med-X">Med-X 研究院</md-option>
              <md-option value="luwan" :disabled="true">卢湾校区</md-option>
              <md-option value="东一楼">东一楼</md-option>
              <md-option value="东二楼">东二楼</md-option>
              <md-option value="西一楼">西一楼</md-option>
              <md-option value="西二楼">西二楼</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container>
          <label for="room">门牌号</label>
          <md-select name="room"  v-bind:disabled=resultStyle id="room" v-model="room" v-on:change="checkRoom()">
              <md-option :value="classroom" v-for="classroom in rooms" :key="classroom">
                  {{ classroom }}
              </md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout md-flex="30">
      </md-layout>
    </md-layout>
    <md-layout md-gutter="8">
        <md-layout md-align="center">
        <md-table>
            <md-table-header>
                <md-table-row>
                    <md-table-head md-numeric>节数</md-table-head>
                    <md-table-head>课名</md-table-head>
                    <md-table-head>教师</md-table-head>
                    <md-table-head>院系</md-table-head>
                    <md-table-head md-numeric>人数</md-table-head>
                </md-table-row>
            </md-table-header>

            <md-table-body>
                <md-table-row v-for="inf in info" :key="index">
                    <md-table-cell>{{ info.indexOf(inf) + 1 }}</md-table-cell>
                    <md-table-cell>{{ inf.class_name }}</md-table-cell>
                    <md-table-cell>{{ inf.teacher_name }}  {{ inf.teacher_title}}</md-table-cell>
                    <md-table-cell>{{ inf.holding_school }}</md-table-cell>
                    <md-table-cell>{{ inf.population }}</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
        </md-layout>
    </md-layout>

      <md-speed-dial md-mode="scale" class="md-fab-top-right">
          <md-button class="md-fab" md-fab-trigger>
              <md-icon md-icon-morph>close</md-icon>
              <md-icon>menu</md-icon>
          </md-button>

          <md-button href="https://github.com/yuxiqian" class="md-fab md-mini md-clean">
              <md-icon>code</md-icon>
          </md-button>

          <md-button v-on:click="openDialog('ackdialog')" class="md-fab md-mini md-clean">
              <md-icon>more</md-icon>
          </md-button>
      </md-speed-dial>

      <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
          <span> {{ queryResult }}</span>
          <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">嗯</md-button>
      </md-snackbar>

      <md-dialog-alert
          :md-title="ackdialog.title"
          :md-content-html="ackdialog.contentHtml"
          @open="onOpen"
          @close="onClose"
          ref="ackdialog">
      </md-dialog-alert>

  </form>
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
                vertical: 'bottom',
                horizontal: 'center',
                duration: 4000,
                ackdialog: {
                    title: '第三方开源软件',
                    contentHtml: '<strong>Vue.js</strong>' +
                        '<br>The MIT License (MIT)<br>' +
                        'Copyright (c) 2013-present, Yuxi (Evan) You<br>' +
                        '<br>' +
                        '<strong>vue-material</strong>' +
                        '<br>The MIT License (MIT)<br>' +
                            'Copyright (c) 2016 Marcos Moura<br>' +
                        '<br>' +
                        '<strong>Vuex</strong>' +
                        '<br>The MIT License (MIT)<br>' +
                        'Copyright (c) 2015-present, Evan You<br>' +
                        '<br>' +
                        '<strong>TypeScript</strong>' +
                        "<br>Apache License<br>" +
                        "Version 2.0, January 2004<br>" +
                        "http://www.apache.org/licenses/ <br><br>" +
                        "<strong>vue-typescript-dpapp-demo</strong>" +
                        "<br>" +
                        "MIT License<br>" +
                            "Copyright (c) 2017 Simon Zhang<br>" +
                        "<br>" +
                        "<strong>finda-studyroom</strong>" +
                        "<br>MIT License<br>" +
                        "Copyright (c) 2018 yuxiqian<br>" +
                        "<br>"
                },
                'queryResult': "加载失败。",
                'year': undefined,
                'term': undefined,
                'building': undefined,
                'room': undefined,
                'week': undefined,
                'day': undefined,
                'queryStyle': true,
                'resultStyle': true,
                'rooms': [],
                'weeks': [],
                'info': []
            }
        },

        methods: {
            async clickQuery(start_year: string, term: string) {

                this.$data.building = undefined;
                this.$data.room = undefined;
                this.$data.day = undefined;
                this.$data.week = undefined;
                this.$data.info = [];
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

                await jQuery.get(json_url,
                    function (data) {
                        globalParser = new Parser(JSON.stringify(data));
                        // globalParser.printObject();
                    }, 'json');
                await this.parseName();
                await this.findClassroom();
                await this.showSuccess();
                this.$data.resultStyle = false;
            },
            parseName() {
                globalParser.parseClassRoom();
            },
            showSuccess() {
                let myThis: any = this;
                if (globalParser.checkSuccess()) {
                    this.$data.queryResult = "加载成功。";
                    if (this.$data.term == "summer") {
                        this.$data.week = 19;
                    } else {
                        this.$data.week = 1;
                    }
                    this.$data.day = '1';
                } else {
                    this.$data.queryResult = "加载失败。";
                }
                myThis.$refs.snackbar.open();
            },
            openDialog(ref: string) {
                let myThis: any = this;
                myThis.$refs[ref].open();
            },
            closeDialog(ref: string) {
                let myThis: any = this;
                myThis.$refs[ref].close();
            },
            checkValidation(): void {
                this.$data.resultStyle = true;
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
                this.$data.info = [];
                this.checkValidation();
            },
            findClassroom(): void {
                if (globalParser == undefined) {
                    return;
                }
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
                this.$data.info = globalParser.getCourse(this.$data.week, this.$data.day, this.$data.room);
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
