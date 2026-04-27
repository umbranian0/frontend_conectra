import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import ActivitiesPage from '../pages/ActivitiesPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import UsersPage from '../pages/UsersPage';

function AppRouter() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;