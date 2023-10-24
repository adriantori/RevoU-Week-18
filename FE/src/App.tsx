import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicLayout } from './layouts';
import { NotificationProvider } from './contexts/NotificationContext';
import AppProvider from './contexts/AppProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MainPage, LoginPage } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <MainPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    }
  ])

  return (
      <NotificationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        </LocalizationProvider>
      </NotificationProvider> 
  )
}

export default App
