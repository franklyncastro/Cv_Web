import style from "../../CSS/About.module.css";

const About = () => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>About me</h1> 
      <div className={style.containerText}>
        <p>Hey there,</p>
        <p>
          Hey there, I'm Franklyn, and I'm from Dominican Republic, Santo Domingo. I work
          at Accenture Applied Intelligence as an AI Engineering Associate
          Manager. For almost the past eight years, I've been diving into my
          passion and profession: creating beautiful and usable products with
          web technologies. Computers have intrigued me ever since I first saw
          one. This fascination led me to my current job, and it's one of the
          reasons why I love exploring all things computer-related – from coding
          and software to hardware and networking.
        </p>
        <p>
          Outside of my professional commitments, I dedicate my time to
          contributing to open-source projects. On occasion, you might just
          catch me wandering around Rook Islands, Kyrat, or Great Plains – yep,
          I'm a bit of a gamer.
        </p>
      </div>
    </section>
  );
};

export default About;
