// parser.ts

import {Curriculum, Arrangement, Info, related_rooms} from "./curricula";

interface Data {
    data: [Curriculum];
}

export class Parser {

    constructor(json: string) {
        this.jsonObject = JSON.parse(json);
        // let jsonConvert: JsonConvert = new JsonConvert();
        // let courses: Courses = jsonConvert.deserializeObject(jsonObject, Courses);
        // // this.itemCount = 0;
    }

    // printObject(): void {
    //     alert(JSON.stringify(this.jsonObject));
    // }

    jsonObject: Object;

    getClassroom(building: string): string[] {
        // console.log("!!!!!!! building  = " + building);
        let result_array: string[] = [];
        if (this.jsonObject.hasOwnProperty('data')) {
            for (let cur of (this.jsonObject as Data)["data"]) {
                let rooms = related_rooms((cur as Curriculum));
                // console.log(rooms);
                for (let classroom of rooms) {
                    if (classroom.startsWith(building)) {
                        if (! result_array.includes(classroom)) {
                            result_array.push(classroom);
                        }
                    }
                }
            }
        }
        result_array.sort();
        return result_array;
    }


    getCourse(week: number, week_day: number, room: string): Info[] {
        console.log(week);
        console.log(week_day);
        console.log(room);
        let resultCur: Info[] = [];
        for (let i = 0; i < 13; i++) {
            resultCur.push({
                class_name: "空教室",
                holding_school: "",
                teacher_name: "",
                teacher_title: "",
                population: 0
            });
        }
        if (this.jsonObject.hasOwnProperty('data')) {
            for (let cur of (this.jsonObject as Data)["data"]) {
                // console.log("Hell!");
                if (!related_rooms(cur).includes(room)) {
                    continue;
                }
                if (cur.start_week > week) {
                    continue;
                }
                if (cur.end_week < week) {
                    continue;
                }

                if (week % 2 == 1) {
                    // console.log(cur);
                    // 单周
                    // console.log("Pass! A");
                    for (let arr of (cur['odd_week'] as Arrangement[])) {
                        // console.log("Here!");
                        if (arr.week_day != week_day) {
                            continue;
                        }
                        for (let i = arr['start_from']; i <= arr['end_at']; i++) {
                            console.log('pa');
                            let info = {
                                class_name: cur.name,
                                holding_school: cur.holder_school,
                                teacher_name: cur.teacher,
                                teacher_title: cur.teacher_title,
                                population: cur.student_number
                            };
                            resultCur[i - 1] = info;
                            // console.log(info);
                        }
                    }
                } else {
                    // 霜周
                    // console.log("Pass! B");
                    for (let arr of (cur['even_week'] as Arrangement[])) {
                        if (arr.week_day != week_day) {
                            continue;
                        }
                        for (let i = arr.start_from; i <= arr.end_at; i++) {
                            let info = {
                                class_name: cur.name,
                                holding_school: cur.holder_school,
                                teacher_name: cur.teacher,
                                teacher_title: cur.teacher_title,
                                population: cur.student_number
                            };
                            resultCur[i - 1] = info;
                        }
                    }
                }
            }
        }
        return resultCur;
    }

    // curData: JSON;
    // itemCount: number;
}
