import style from "../../CSS/About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={style.container}>
      <Link to='/' className={style.link}><h1 className={style.title}>Go Home</h1></Link>
      <div className={style.containerText}>
      <h1 className={''}>ABOUT ME</h1>
        <p>Hey there,</p>
        <p>
          Hey there, I'm Franklyn, and I'm from Dominican Republic, Santo
          Domingo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime deleniti laborum tempore itaque expedita quibusdam id
          architecto reprehenderit cum culpa. Impedit maiores, consectetur animi
          voluptatibus debitis nihil ratione quis qui. Dicta voluptatem ad sunt
          incidunt! Repellat, maxime minus ratione eos amet cum, ducimus optio
          voluptas illo nobis officiis temporibus. Nihil deserunt fugit
          officiis, iure eaque ab est cum ex harum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          ratione nihil, reiciendis laborum hic distinctio iure quidem minima.
          Eius labore obcaecati recusandae nisi reiciendis. Vero minus hic vel
          ipsam quis.
        </p>
      </div>
    </section>
  );
};

export default About;
