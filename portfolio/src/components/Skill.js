const Skill = ({ title, img, onClick }) => {
  return (
    <article className="skill" onClick={onClick}>
      <img src={img} alt="skill"></img>
      <h2>{title}</h2>
    </article>
  );
};

export default Skill;
