const simulateServer = () => {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        return resolve();
      }
      const t = setTimeout(() => {
        reject();
        return clearTimeout(t);
      }, 1000);
    });
  };
  
export default simulateServer