class Student {
    constructor(studentId, name, gender, dob, hometown) {
        this.studentId = studentId;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.hometown = hometown;
    }
}

class StudentManagement {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.displayStudents();
    }

    addStudent(student) {
        this.students.push(student);
        this.saveData();
        this.displayStudents();
    }

    updateStudent(updatedStudent) {
        const index = this.students.findIndex(student => student.studentId === updatedStudent.studentId);
        if (index !== -1) {
            this.students[index] = updatedStudent;
            this.saveData();
            this.displayStudents();
        }
    }

    deleteStudent(studentId) {
        this.students = this.students.filter(student => student.studentId !== studentId);
        this.saveData();
        this.displayStudents();
    }

    saveData() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    displayStudents() {
        const studentTable = document.querySelector('#studentTable tbody');
        studentTable.innerHTML = '';

        this.students.forEach(student => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.studentId}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.dob}</td>
                <td>${student.hometown}</td>
                <td>
                    <button onclick="editStudent('${student.studentId}')">Edit</button>
                    <button onclick="deleteStudent('${student.studentId}')">Delete</button>
                </td>
            `;

            studentTable.appendChild(row);
        });
    }
}

const management = new StudentManagement();

function addStudent() {
    const studentId = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;

    const student = new Student(studentId, name, gender, dob, hometown);
    management.addStudent(student);

    clearForm();
}

function editStudent(studentId) {
    const student = management.students.find(student => student.studentId === studentId);
    if (student) {
        document.getElementById('studentId').value = student.studentId;
        document.getElementById('name').value = student.name;
        document.getElementById('gender').value = student.gender;
        document.getElementById('dob').value = student.dob;
        document.getElementById('hometown').value = student.hometown;
    }
}

function updateStudent() {
    const studentId = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;

    const updatedStudent = new Student(studentId, name, gender, dob, hometown);
    management.updateStudent(updatedStudent);

    clearForm();
}

function deleteStudent(studentId) {
    management.deleteStudent(studentId);
}

function clearForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('hometown').value = '';
}
