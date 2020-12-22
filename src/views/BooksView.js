import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function BooksView() {
  const [books, setBooks] = useState(null);
  const {url} = useRouteMatch()

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Книги" />
      <ul>
        {
          books 
            ? books.map(book => (
                <li key={book.id}>
                  <Link to={`${url}/${book.id}`}>{book.title}</Link>
                </li>
              ))
            : null
        }
      </ul>
    </>
  );
}
