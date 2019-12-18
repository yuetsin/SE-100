// parser.ts

import {Curriculum, Arrangement, Info, location, related_rooms} from "./curricula";

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

    getClassroom(campus: string, building: string): string[] {
        // console.log("!!!!!!! building  = " + building);
        let result_array: string[] = [];
        if (this.jsonObject.hasOwnProperty('data')) {
            for (let cur of (this.jsonObject as Data)["data"]) {
                let rooms = related_rooms((cur as Curriculum));
                // console.log(rooms);
                for (let classroom of rooms) {
                    // console.log("entered for. comparing ", classroom[0], "and", campus)
                    if (classroom[0] == campus) {
                        if (classroom[1].startsWith(building)) {
                            if (! result_array.includes(classroom[1])) {
                                result_array.push(classroom[1]);
                            }
                        }
                    }
                }
            }
        }
        result_array.sort();
        return result_array;
    }

    parseClassRoom() {
        // needless to parse that any more.
    }


    getCourse(week: number, week_day: number, campus: string, room: string): Info[] {
        console.log(week);
        console.log(week_day);
        console.log(room);
        let resultCur: Info[] = [];
        for (let i = 0; i < 13; i++) {
            resultCur.push({
                class_name: "空教室",
                holding_school: "",
                teachers: [],
                population: 0
            });
        }
        if (this.jsonObject.hasOwnProperty('data')) {
            for (let cur of (this.jsonObject as Data)["data"]) {
                let current: location = [campus, room]
                // console.log("currently campus, room = ", campus, room);

                var found = false
                for (let item of related_rooms(cur)) {
                    if (item[0] == campus && item[1] == room) {
                        found = true
                        break
                    }
                }

                if (!found) {
                    continue
                }

                for (let arr of (cur.arrangements as Arrangement[])) {
                    // console.log("Here!");
                    if (arr.week_day != week_day) {
                        continue;
                    }
                    if (! (week in arr.weeks)) {
                        continue;
                    }
                    for (let i of arr.sessions) {
                        // console.log('pa');
                        let info = {
                            class_name: cur.name,
                            holding_school: cur.holder_school,
                            teachers: cur.teacher,
                            population: cur.student_number
                        };
                        resultCur[i - 1] = info;
                        // console.log(info);
                    }
                }
                
            }
        }
        return resultCur;
    }

    // curData: JSON;
    // itemCount: number;
}

