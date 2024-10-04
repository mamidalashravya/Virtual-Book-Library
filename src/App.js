import { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyLibraryPage from './components/MyLibraryPage';
import BookList from './components/BookList';
import EachBookDetails from './components/EachBookDetails';
import './App.css';

const userDetailsList = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.7,
    description: "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    publication_year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    description: "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publication_year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    publication_year: 1949,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.9,
    description: "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    publication_year: 1813,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    description: "A story about a young boy’s journey through the challenges of adolescence.",
    publication_year: 1951,
  },
];

class App extends Component {
  state = {
    library: [] ,
    searchInput: ""

  };

  addBookToLibrary = (book) => {
    this.setState((prevState) => ({
      library: [...prevState.library, book]
    }));
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    });
  };


  render() {
    const { library } = this.state;
    const { searchInput } = this.state;
    const searchResults = userDetailsList.filter((eachItem) =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <BrowserRouter>
        <div className="main-container">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="main-heading">VIRTUAL BOOK LIBRARY</h1>
                <div>
                  <Link to="/library">
                    <button className="button">
                      My Library 
                    </button>
                  </Link>
                </div>
                <input
                      className="Search-Bar"
                      type="search"
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                      placeholder="SearchBooks"
                    />
                <ul>
                  {searchResults.map((book) => (
                    <BookList
                      key={book.id}
                      userDetailsList={book}
                      addBookToLibrary={this.addBookToLibrary}
                    />
                  ))}
                </ul>
              </div>
            } />
            <Route path="/library" element={<MyLibraryPage library={library} />} />
            <Route path="/bookdetails/:id" element={<EachBookDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;