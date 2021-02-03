import { Exercise } from "../shared/exercise.model";

export class ExerciseService {
    private sampleExercises : Exercise[] = [
        new Exercise(1, 'Sample Exercise', 'Sample Description', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise2', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif')
    ];

    getExercises() {
        return this.sampleExercises;
    }
}