import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, take, map } from 'rxjs';
import { Student } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students = new BehaviorSubject<Student[]>([
    new Student(1, 'Naruto', 'Uzumaki', true),
    new Student(2, 'Sasuke', 'Uchiha', false),
    new Student(3, 'Sakura', 'Haruno', true),
    new Student(4, 'Kakashi', 'Hatake', false),
  ]);
  public students$: Observable<Student[]>;
  constructor() {
    this.students$ = this.students.asObservable()
  }

  createStudent(newStudentData: Omit<Student, 'id' | 'active'>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([
        ...students,
        new Student(lastId + 1, newStudentData.firstName, newStudentData.lastName, true)
      ])
    })
  }

  editStudent(id: number, data: Partial<Student>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(
        students.map(
          (stu) => stu.id === id
            ? new Student(
              stu.id,
              data.firstName || stu.firstName,
              data.lastName || stu.lastName,
              data.active || stu.active,
            )
            : stu
        )
      )
    })
  }

  removeStudent(id: number): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.filter((stu) => stu.id !== id))
    })
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(
      take(1),
      map((students) => students.find((stu) => stu.id === id) || null)
    )
  }
}
