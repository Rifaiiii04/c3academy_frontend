import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminDashboard from './pages/admin/Dashboard';
import Profile from './pages/profile/Profile';
import BecomeInstructor from './pages/instructor/BecomeInstructor';
import InstructorDashboard from './pages/instructor/Dashboard';
import BrowseCourses from './pages/courses/BrowseCourses';
import Wishlist from './pages/wishlist/Wishlist';
import MyLearning from './pages/learning/MyLearning';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/become-instructor" element={<BecomeInstructor />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/courses" element={<BrowseCourses />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-learning" element={<MyLearning />} />
      </Routes>
    </Router>
  );
}

export default App;
