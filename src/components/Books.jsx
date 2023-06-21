import React from 'react'

const Book = ({book}) => {
  return (
      <div>
          <h2>Title: {book.title }</h2>
    </div>
  )
}
//outputing ListaQ  Q
const Booklist = () => {
    const books = [
        { id: 1, title: "Sugar Girl" },
        { id: 2, title: "Journey Of a Developer" },
        { id: 3, title: "Drummer Girl" },
    ];
    return (
        <div>
            <h3>Bestselling Books</h3>{
                books.map((book, index) =>{
                    return <Book key={index} book={book} />;
                })}
        </div>
    );

};





export default Booklist