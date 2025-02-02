import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  links = [
    'https://img.icons8.com/color/48/000000/html-5.png',
    'https://img.icons8.com/color/48/000000/css3.png',
    'https://img.icons8.com/color/48/000000/javascript.png',
    'https://img.icons8.com/color/48/000000/angularjs.png',
    'https://img.icons8.com/color/48/000000/github--v1.png',
    'https://img.icons8.com/color/48/000000/python.png',
  ];
}
