const SkillDetail = ({work, description, link}) => {
    return (
        <div className="hider">
        <h2>{work}</h2>
        <p>{description}</p>
        <a target="_blank" rel="noreferrer" href={link}>Project link</a>
    </div>
     );
}
 
export default SkillDetail;