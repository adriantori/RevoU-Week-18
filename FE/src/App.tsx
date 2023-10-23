import { NotificationProvider, useNotification } from './contexts/NotificationContext';

function App() {
  const showNotification = useNotification();

  const handleButtonClick = () => {
    showNotification('success', 'login success', 'user successfully logged in');
  }

  return (
    <NotificationProvider>
      <div>
        <button onClick={handleButtonClick}>Show Notification</button>
      </div>
    </NotificationProvider>
  );
}

export default App;
