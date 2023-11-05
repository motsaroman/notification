import React, { useState, useEffect, useRef } from 'react';
import simulateServer from './simulateServer'
import { hideNotification } from './helpers/hideNotification';
import Notification from './components/notification-modal/Notification';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [notification, setNotification] = useState({ status: '', label: '', text: '' });
  const [showNotification, setShowNotification] = useState(false);
  const isHovering = useRef(false);
  const timeoutRef = useRef(null);

  const handleServerStart = () => {
    simulateServer()
      .then(() => {
        setNotification({ status: 'success', label: 'Успешно', text: 'Изменения успешно сохранены' });
        setShowNotification(true);
      })
      .catch(() => {
        setNotification({ status: 'error', label: 'Изменения не сохранены', text: 'Потеря интернет соединения' });
        setShowNotification(true);
      });
  };

  const handleMouseEnter = () => {
    setShowNotification(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    timeoutRef.current = setTimeout(() => {
      hideNotification(setShowNotification);
    }, 3000);
  };

  useEffect(() => {
    if (showNotification && !isHovering.current) {
      timeoutRef.current = setTimeout(() => {
        hideNotification(setShowNotification);
      }, 3000);
    }
  }, [showNotification]);


  return (
    <div className="App">
   <Button  onClick={handleServerStart} isDisabled={showNotification}/>
      {showNotification && (
        <Notification
          status={notification.status}
          label={notification.label}
          text={notification.text}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}

export default App;
