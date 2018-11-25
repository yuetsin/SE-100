// parser.ts

import {Curriculum, related_rooms} from "./curricula";

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

    printObject(): void {
        alert(JSON.stringify(this.jsonObject));
    }

    jsonObject: Object;

    getClassroom(building: string): string[] {
        console.log("!!!!!!! building  = " + building);
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

    getCourse(week: number, day: number, room: number): Curriculum[] {

        return []
    }

    // curData: JSON;
    // itemCount: number;
}
