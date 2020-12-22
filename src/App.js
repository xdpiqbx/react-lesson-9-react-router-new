import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import BookDetailsView from './views/BookDetailsView';
import NotFoundView from './views/NotFoundView';

export default function App() {
  // const match = useRouteMatch()
  // console.log(match);
  return (
    <Container>
      <AppBar />
      {/* <Route exact path='/' component={HomeView} /> */}
      <Switch>
        <Route exact path='/'>
          <HomeView />
        </Route>
        <Route path='/authors'>
          <AuthorsView />
        </Route>
        <Route exact path='/books'>
          <BooksView />
        </Route>
        <Route path='/books/:bookId'>
          <BookDetailsView />
        </Route>
        <Route >
          <NotFoundView />
        </Route>
      </Switch>


    </Container>
  );
}
