import { Link } from 'react-router-dom';
import './index.css';

const MyLibraryPage = ({ library }) => {
  return (
    <div>
      <h1>Your Library</h1>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
      <ul className="library-list">
        {library.map((book) => (
          <li key={book.id} className="library-item">
            <div>
            <h2>{book.title}</h2>
            <div className='content'>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.rating}</p>
            </div>
            
            <p>{book.description}</p>

            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyLibraryPage;