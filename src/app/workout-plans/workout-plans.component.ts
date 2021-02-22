import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkoutPlanService } from '../services/workout-plan.service';
import { Workout } from '../shared/workout.model';

@Component({
  selector: 'app-workout-plans',
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.scss'],
  providers: [WorkoutPlanService]
})
export class WorkoutPlansComponent implements OnInit, OnDestroy {
  workouts: Workout[] = [];
  selectedWorkout?: Workout;
  loading: boolean = true;
  subscriptions: Subscription = new Subscription();

  constructor(private workoutPlanService: WorkoutPlanService) { }
  
  ngOnInit(): void {
    this.subscriptions = this.workoutPlanService.getAllWorkoutsFromApi()
    .subscribe(response => {
      this.loading = false;
      this.workouts = response;
    }, () => this.loading = false)
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
