export const hideNotification = (setShowNotification) => {
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };