import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FromBlankPage, HomePage, StatsPage } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/fromBlank',
        element: <FromBlankPage />
    },
    {
        path: '/stats',
        element: <StatsPage />
    },
])

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
};