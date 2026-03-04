import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { WorkDetail } from './pages/WorkDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/work/:id',
    Component: WorkDetail,
  },
]);
