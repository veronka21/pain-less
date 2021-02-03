import { Exercise } from "../shared/exercise.model";

export class ExerciseService {
    private sampleExercises : Exercise[] = [
        new Exercise(1, 'Sample Exercise', 'Sample Description', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
        new Exercise(2, 'Sample Exercise with very long name', 'Sample Description2', 'https://coveteur.com/wp-content/uploads/2015/12/erika_bloom-1.gif'),
    ];

    getExercises() {
        return this.sampleExercises;
    }
}