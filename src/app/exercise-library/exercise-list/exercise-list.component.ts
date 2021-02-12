import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';
import { Exercise } from 'src/app/shared/exercise.model';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  exercises!: Exercise[];

  constructor(private exerciseService: ExerciseService) { 
  }

  ngOnInit(): void {
    this.exerciseService.getAllExercisesFromApi()
      .subscribe(response => this.exercises = response);
  }
}
