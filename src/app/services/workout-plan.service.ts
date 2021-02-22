import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Workout } from "../shared/workout.model";
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class WorkoutPlanService {
    private apiMainUrl : string = "https://pain-less-backend.herokuapp.com/workout"

    constructor(private http: HttpClient) {}

    getAllWorkoutsFromApi() : Observable<Workout[]> {
        return this.http.get<Workout[]>(`${this.apiMainUrl}/all`)
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