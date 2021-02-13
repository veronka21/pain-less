import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Exercise } from "../shared/exercise.model";

@Injectable()
export class ExerciseService {
    private apiMainUrl : string = "http://localhost:8762/exercise"

    constructor(private http: HttpClient) {}
    
    getAllExercisesFromApi() : Observable<Exercise[]> {
        return this.http.get<Exercise[]>(`${this.apiMainUrl}/all`)
            .pipe(catchError(this.handleError))
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred in your browser:', error.error.message);
        } else {
            console.error(
                `The server returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');

    }
}