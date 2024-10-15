import axios from 'axios';

const API_URL = 'https://fitnessapi-d773a1148384.herokuapp.com/';

export const getWorkouts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createWorkout = async (workoutData) => {
    const response = await axios.post(API_URL, workoutData);
    return response.data;
};

// Add more workout-related functions as needed
