const Skill = ({title, description, img}) => {
    return ( 
        <article className="book" >
            <img src={img} alt="book"></img>
            <h2>{title}</h2>
            <h3>{author}</h3>
        </article>
    );
}
 
export default Book;