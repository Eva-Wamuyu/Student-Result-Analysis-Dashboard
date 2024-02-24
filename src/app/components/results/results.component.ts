import { Component } from '@angular/core';
import {Subject} from 'src/app/interfaces'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {


  subjects:Subject[] =  [
    {
      "name": "Mathematics",
      "marks": 85,
      "teacher": "Mrs. Kariuki",
      "strengths": "Algebra, Geometry",
      "weaknesses": "Trigonometry",
      "trend": "same"
    },
    {
      "name": "Chemistry",
      "marks": 78,
      "teacher": "Mr. Ochieng",
      "strengths": "Titration",
      "weaknesses": "Chemicals",
      "trend": "up"
    },
    {
      "name": "English",
      "marks": 92,
      "teacher": "Ms. Auma",
      "strengths": "Grammar, Reading",
      "weaknesses": "Writing",
      "trend": "up"
    },
    {
      "name": "History",
      "marks": 76,
      "teacher": "Mr. Njoroge",
      "strengths": "Ancient History,World History",
      "weaknesses": "Modern History",
      "trend": "down"
    },
    {
      "name": "CRE",
      "marks": 79,
      "teacher": "Mrs. Njoroge",
      "strengths": "St.Lukes",
      "weaknesses": "African Traditional Society",
      "trend": "up"
    }
  ];


}
