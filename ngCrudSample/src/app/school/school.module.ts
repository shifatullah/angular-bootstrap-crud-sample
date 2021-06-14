import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { StudentComponent } from '../student/student.component';
import { TeacherComponent } from '../teacher/teacher.component';



@NgModule({
  declarations: [
    CourseComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SchoolModule { }
