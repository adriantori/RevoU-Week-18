import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PublicLayout } from './layouts'
import { NotificationProvider } from './contexts/NotificationContext'
import AppProvider from './contexts/AppProvider'
import { LoginPage } from './pages'

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    }
  ])

  return (
      <NotificationProvider>
        <AppProvider>
        <RouterProvider router={router} />
        </AppProvider>
      </NotificationProvider> 
  )
}

export default App
