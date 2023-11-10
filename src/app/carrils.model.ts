interface StudentDoc {
    name: string;
}

export class Carril {
    title: string;
    students: StudentDoc[];

    constructor(title: string, students: []) {
        this.title = title;
        this.students = students;
    }
}