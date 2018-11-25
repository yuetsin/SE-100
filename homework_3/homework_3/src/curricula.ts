// curricula.ts

import * as ts from "typescript/lib/tsserverlibrary";
import emptyArray = ts.server.emptyArray;

class Info {

    constructor(class_name: string, holding_school: string, teacher_name: string, teacher_title: string, population: number) {
        this.class_name = class_name;
        this.holding_school = holding_school;
        this.teacher_name = teacher_name;
        this.teacher_title = teacher_title;
        this.population = population;
    }

    class_name: string;
    holding_school: string;
    teacher_name: string;
    teacher_title: string;
    population: number;

    get_full_teacher_name() {
        return this.teacher_name + " " + this.teacher_title
    }
}


class Arrangement {
    // 单次上课的具体参数
    // 一门课可能会在一个学期内包含不同的课程教室组合
    // 由一个 Arrangement 数组来描述

    week_day = 0;
    //  星期数。约定使用 1 ～ 7 分别代表周一到周日。

    start_lesson = 0;
    // 开始节数

    end_lesson = 0;
    // 结束节数（怪怪的）

    classroom = '';
    // 授课教室

    print_me() {
        let summary = "";
        summary += ('\t');
        summary += (this.week_day);
        summary += ('\t');
        summary += (this.start_lesson);
        summary += ('\t');
        summary += (this.end_lesson);
        summary += ('\t');
        summary += (this.start_lesson);
        summary += ('\t');
        summary += (this.end_lesson);
        summary += ('\t');
        summary += (this.classroom);
        alert(summary)
    }
}

export interface Curriculum {

    odd_week: Arrangement[];
    // 单周的行课安排

    even_week: Arrangement[];
    // 霜周的行课安排

    holder_school: string;
    // 开课院系

    teacher_name: string;
    // 教师名称

    teacher_title: string;
    // 教师职称

    title_name: string;
    // 课程名称

    identifier: string;
    // 课程唯一识别代码

    learn_hour: number;
    // 学时

    credit_score: number;
    // 学分


    start_week: number;
    // 起始周数


    end_week: number;
    // 终止周数

    notes: string;
    // 备注


    target_grade: number;
    // 目标年级


    school_year: number;
    // 学年


    term: number;
    // 学期

    student_number: number;

    // 上课人数
}

export function related_rooms(cur: Curriculum): string[] {
    let classrooms: string[] = [];

    for (let i of cur.odd_week) {
        if (!(i.classroom in classrooms)) {
            classrooms.push(i.classroom)
        }
    }

    for (let i of cur.even_week) {
        if (!(i.classroom in classrooms)) {
            classrooms.push(i.classroom)
        }
    }

    return classrooms;
}


