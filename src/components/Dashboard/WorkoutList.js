import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get('https://fitnessapi-d773a1148384.herokuapp.com/workouts/'); // API endpoint
                setWorkouts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkouts();
    }, []);

    if (loading) {
        return <p>Loading workouts...</p>;
    }

    if (error) {
        return <p>Error fetching workouts: {error}</p>;
    }

    return (
        <div>
            {Array.isArray(workouts) && workouts.length > 0 ? (
                workouts.map(workout => (
                    <div key={workout.id}>
                        <h3>{workout.title}</h3>
                        <p>{workout.description}</p>
                    </div>
                ))
            ) : (
                <p>No workouts available.</p>
            )}
        </div>
    );
};

export default WorkoutList;
