import { Component } from '@angular/core';
import {Student} from 'src/app/interfaces'

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {

   student: Student  = {
      "name": "Jane Njeri",
      "adm_no": "7980",
      "form": "2",
      "stream": "West",
      "term": "Two",
      "house":"Pesi",
      "passport": "https://th.bing.com/th/id/OIP.7YIhxslJuSy2FhLr3vooXAHaHh?rs=1&pid=ImgDetMain"
    }



}
