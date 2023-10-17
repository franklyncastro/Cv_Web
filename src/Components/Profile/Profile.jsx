import style from "../../CSS/Profile.module.css";
import img from "../../../public/img/me.jpg";
import Social from "../Social/Social";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.imgContainer}>
            <img src={img} alt="Franklyn's Picture" />
            <Link to='About' className={style.link}><h4><i className="fa-solid fa-user"></i> View Profile</h4></Link>
          </div>
          <h1>Hello, I'm Franklyn Yawerlyn Castro</h1>
          <h2>Full Stack Developer</h2>
          <Social/>
        </div>
      </main>
    </>
  );
};

export default Profile;
