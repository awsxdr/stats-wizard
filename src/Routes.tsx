import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FromBlankPage, HomePage } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/fromBlank',
        element: <FromBlankPage />
    }
])

export const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
};