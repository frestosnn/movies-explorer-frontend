import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<NotFound />}></Route>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
            </>
          }
        ></Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Routes>
    </>
  );
}

export default App;
