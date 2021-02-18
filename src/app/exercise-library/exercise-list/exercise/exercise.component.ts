import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  @Input() exercise!: Exercise;
  flipped: boolean = false;
  // backendMainUrl : string = 'http://localhost:8762/exercise/';
  backendMainUrl : string = 'https://pain-less-backend.herokuapp.com/exercise/';

  constructor() { }

  ngOnInit(): void {
  }

  flipCard(event : Event) {
    event.preventDefault();
    this.flipped = !this.flipped;
  }

}
