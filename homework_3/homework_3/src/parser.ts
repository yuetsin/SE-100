// parser.ts

import {log} from "util";
import {JsonConvert, JsonObject, JsonProperty} from "json2typescript";
import {Curriculum} from "./curricula";

@JsonObject("Courses")
export class Courses {

    @JsonProperty('data', [Curriculum])
    data: Curriculum[] = []
}


export class Parser {

    constructor(json: string) {
        let jsonObject = JSON.parse(json);
        let converter = new JsonConvert();
        this.jsonObject = JSON.parse(json);
        // let jsonConvert: JsonConvert = new JsonConvert();
        // let courses: Courses = jsonConvert.deserializeObject(jsonObject, Courses);
        // // this.itemCount = 0;
    }

    printObject(): void {
        alert(JSON.stringify(this.jsonObject));
    }

    jsonObject: Object

    // curData: JSON;
    // itemCount: number;
}
