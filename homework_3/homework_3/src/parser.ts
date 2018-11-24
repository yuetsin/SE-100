// parser.ts

export class Parser {

    constructor(json: string) {
        this.curData = JSON.parse(json);
        this.itemCount = (this.curData['data'] as Array<JSON>).length;
    }

    curData: JSON;
    itemCount: number;
}
