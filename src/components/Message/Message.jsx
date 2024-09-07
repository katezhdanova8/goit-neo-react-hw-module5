import css from './Message.module.css';

const Message = ({ children }) => {
  return (
    <div className={css.Message}>
      {children}
    </div>
  );
}

export default Message;