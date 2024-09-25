import { h } from 'preact';
import style from 'style/index.css';

const BackButton = ({ onClick }) => {
  return (
    <button class={style.backButton} onClick={onClick}>
      &larr; {/* Aquí utilizamos un carácter de flecha */}
    </button>
  );
};

export default BackButton;