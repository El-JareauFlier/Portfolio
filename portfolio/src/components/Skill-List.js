import {useState} from "react";
import Book from "./Book";

const BookList = () => {
    const [books, setBooks] = useState([
        {
            title: "weee",
            author: "james",
            img: "./images/book1.jpg"
        },

        {
            title: "waaa",
            author: "james",
            img: "./images/book2.jpg"
        },

        {
            title: "wooo",
            author: "james",
            img: "./images/book3.jpg",
        },


    ]);

    return (
        <section className="container">
            <h2>alle boeken</h2>
            <div>
            {books.map((book) =>(
                <Book title={book.title} author={book.author} img={book.img} />
            ))}
            </div>
        </section>
    );
}

export default BookList;