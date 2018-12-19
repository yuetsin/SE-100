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

    checkStamp(): boolean {
        if (this.jsonObject.hasOwnProperty('generate_time')) {
            return true
        }
        return false
    }

    checkSuccess(): boolean {
        if (this.jsonObject.hasOwnProperty('data')) {
            return true;
        }
        return false;
    }

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

    parseClassRoom() {
        if (this.jsonObject.hasOwnProperty('data')) {
            for (let cur of (this.jsonObject as Data)["data"]) {

                cur.holder_school = cur.holder_school.replace(/\((.+)\)/g, "");
                // console.log(cur.holder_school);

                for (let oddArr of (cur["odd_week"] as [Arrangement])) {
                    let splitedArray = oddArr.classroom.split(/(\\([d]\\))/)
                    if (splitedArray.length == 4) {
                        oddArr.classroom = splitedArray[2].replace("教学一楼", "教一楼");
                        // console.log(splitedArray);
                        // alert("处理了教室名为" + oddArr.classroom);
                    } else if (splitedArray.length == 3) {
                        oddArr.classroom = splitedArray[0] + "校区"
                    }

                }

                for (let evenArr of (cur["even_week"] as [Arrangement])) {
                    let splitedArray = evenArr.classroom.split(/[(\\/)]/)
                    if (splitedArray.length == 4) {
                        evenArr.classroom = splitedArray[2].replace("教学一楼", "教一楼");
                        // console.log(splitedArray);
                        // alert("处理了教室名为" + evenArr.classroom);
                    } else if (splitedArray.length == 3) {
                        evenArr.classroom = splitedArray[0] + "校区"
                    }

                }
            }
        }
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

