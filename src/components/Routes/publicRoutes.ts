import { React } from 'react';
import { links } from './links';

export const publicRoutes = [
    {
        path: links.HOME_ROUTER,
        element: React.lazy(() => import('../../Pages/Home/Home')),
    },
];
