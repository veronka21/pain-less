import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Exercise } from "../shared/exercise.model";

@Injectable()
export class ExerciseService {
    private apiMainUrl : string = "http://localhost:8762/exercise"

    constructor(private http: HttpClient) {}
    
    getAllExercisesFromApi() : Observable<Exercise[]> {
        return this.http.get<Exercise[]>(`${this.apiMainUrl}/all`)
    }
}