import style from "../../CSS/Social.module.css";
import '../../CSS/icons.css'

const Social = () => {
  return (
    <div className={style.social}>
      <a href="https://github.com/franklyncastro" target="blank">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/franklyncastro/" target="blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://twitter.com/franklyn_dev" target="blank">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
};

export default Social;
