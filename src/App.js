import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import WorkoutList from './components/Dashboard/WorkoutList';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Welcome to the Fitness Tracker</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />}>
                <Route path="workouts" element={<WorkoutList />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
