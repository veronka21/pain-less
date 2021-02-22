import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';
import { Exercise } from 'src/app/shared/exercise.model';
import { catchError } from 'rxjs/operators';
import { Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit, OnDestroy {
  exercises: Exercise[] = [];
  loading: boolean = true;
  subscriptions: Subscription = new Subscription();

  constructor(private exerciseService: ExerciseService) { 
  }
  
  ngOnInit(): void {
    this.subscriptions = this.exerciseService.getAllExercisesFromApi()
    .subscribe(response => {
      this.loading = false;
      this.exercises = response;
    }, () => this.loading = false);
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
