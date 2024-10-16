import React, { useState } from 'react';
import { createWorkout } from '../../api/workouts';

const WorkoutForm = () => {
    const [workoutType, setWorkoutType] = useState('');
    const [duration, setDuration] = useState(0);
    const [calories, setCalories] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createWorkout({ workout_type: workoutType, duration, calories });
            console.log('Workout created', response);
        } catch (error) {
            console.error('Workout creation failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Workout</h3>
            <input type="text" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} placeholder="Workout Type" required />
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration (min)" required />
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories Burned" required />
            <button type="submit">Add Workout</button>
        </form>
    );
};

export default WorkoutForm;
