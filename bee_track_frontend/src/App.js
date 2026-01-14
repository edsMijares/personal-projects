import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "./components/reuseable/Loading";
import { LoadingProvider, useLoading } from "./js/loading-context";
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import TimeLogs from './pages/TimeLogs';

import NotFound from './pages/NotFound';

function AppContent() {
  const { isLoading } = useLoading();

  return (
    <>
      <Loading isLoading={isLoading} />
      <BrowserRouter>
        <SideBar>
          <TopBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/timelogs" element={<TimeLogs />} />
            </Route>
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;
