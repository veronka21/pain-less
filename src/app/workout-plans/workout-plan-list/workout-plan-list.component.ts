import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/shared/workout.model';

@Component({
  selector: 'app-workout-plan-list',
  templateUrl: './workout-plan-list.component.html',
  styleUrls: ['./workout-plan-list.component.scss']
})
export class WorkoutPlanListComponent implements OnInit {
  @Input() workouts!: Workout[];
  @Input() loading!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
