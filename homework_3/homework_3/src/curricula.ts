// curricula.ts

import * as ts from "typescript/lib/tsserverlibrary";
import emptyArray = ts.server.emptyArray;

export interface Info {
    class_name: string;
    holding_school: string;
    teacher_name: string;
    teacher_title: string;
    population: number;
}


export interface Arrangement {
    // 单次上课的具体参数
    // 一门课可能会在一个学期内包含不同的课程教室组合
    // 由一个 Arrangement 数组来描述

    week_day: number;
    //  星期数。约定使用 1 ～ 7 分别代表周一到周日。

    start_from: number;
    // 开始节数

    end_at: number;
    // 结束节数（怪怪的）

    classroom: string;
    // 授课教室

}

export interface Curriculum {

    odd_week: Arrangement[];
    // 单周的行课安排

    even_week: Arrangement[];
    // 霜周的行课安排

    holder_school: string;
    // 开课院系

    teacher: string;
    // 教师名称

    teacher_title: string;
    // 教师职称

    name: string;
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


