import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import { Auth, Root } from './routes';
import StoreContext from './app/store/provider';
import Store from './app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivateRoute from './components/private-route/PrivateRoute';
import { Disciplines } from './routes/disciplines';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute redirectPath="/auth">
        <Root />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'disciplines/',
        element: <Disciplines />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
  },
]);

const store = new Store();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StoreContext.Provider>
  </React.StrictMode>
);
