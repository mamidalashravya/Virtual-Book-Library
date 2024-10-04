import { useParams, Link } from 'react-router-dom';
import './index.css';

const EachBookDetails = () => {
 
  const bookDetailsData = [
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

  
  const { id } = useParams();

  
  const book = bookDetailsData.find((book) => book.id === parseInt(id));

 
  if (!book) {
    return "No Such Page Is Found"
  }

  const { title, author, genre, rating, description, publication_year } = book;

  return (
    <div className="book-details-container">
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
      <Link path="/bookdetails/:id" className='linkname'> 

      <div className="book-details">
        <h1 className='title'>{title}</h1>
        <div className="book-info">
            <div className='bookinfo-content'>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>Publication Year:</strong> {publication_year}</p>
                <p><strong>Rating:</strong> {rating}</p>
                <p><strong>Author:</strong> {author}</p>
            </div>
          <p className='description'><strong>Description:</strong> {description}</p>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default EachBookDetails;