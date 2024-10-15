import React from 'react';
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <WorkoutForm />
            <WorkoutList />
        </div>
    );
};

export default Dashboard;
