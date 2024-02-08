const Service = ({ title, description }) => {
  return (
    <div className="serviceCard">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Service;
