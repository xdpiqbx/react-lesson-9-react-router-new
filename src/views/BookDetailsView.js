import { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null)

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <PageHeading text={`Книга ${bookId}`} />
      {
        book && 
        <>
          <h2>{book.title} <small>[{book.genre}]</small></h2>
          <img src={book.imgUrl} alt={book.descr}/>
          <p>Автор: <b>{book.author.name}</b></p>
          <p>{book.descr}</p> 
        </>
      }
    </>
  );
}
