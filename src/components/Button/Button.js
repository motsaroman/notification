const Button = ({ onClick,  isDisabled  }) => {
    return (
      <button className='start-server__btn' onClick={onClick} disabled={isDisabled}>
        Start Server
      </button>
    );
  };

export default Button  
 