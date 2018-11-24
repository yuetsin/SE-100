// parser.ts

export class Parser {

    constructor(json: string) {
        this.curData = JSON.parse(json);
    }

    curData: JSON
}
