import { motion } from 'framer-motion';
import { animationNotification } from '../../helpers/animationNotification';
import successIcon from "../../assets/success.png"
import errorIcon from "../../assets/error.png"
import ProgressBar from "../ProgressBar";

const Notification = ({ status, label, text, onMouseEnter, onMouseLeave }) => {

  const getIcon = (status) => {
    switch (status) {
      case 'success':
        return <img src={successIcon} alt="Success" />;
      case 'error':
        return <img src={errorIcon} alt="Error" />;
      default:
        return null;
    }
  };

  return (
    <motion.div className={`notification-wrap`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationNotification}
    >
      <div className="notification__icon">
        {getIcon(status)}
      </div>
      <div className="notification-info">
        <div className="notification-info__title">{label}</div>
        <div className="notification-info__text">{text}</div>
        {status && <ProgressBar />}
      </div>
    </motion.div>
  );
};
export default Notification
