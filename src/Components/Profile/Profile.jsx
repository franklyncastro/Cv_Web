import style from "../../CSS/Profile.module.css";
import img from "../../../public/img/me.jpg";
import Social from "../Social/Social";

const Profile = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.imgContainer}>
            <img src={img} alt="Franklyn's Picture" />
            <h4>Profile</h4>
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
