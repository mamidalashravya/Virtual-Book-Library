import {Link} from 'react-router-dom'
import './index.css'

const BookList = ({userDetailsList,addBookToLibrary}) => {
    const {id, title, author, genre, rating} = userDetailsList;

    const handleAddClick = () => {
        addBookToLibrary(userDetailsList);
    };
    return (
        <Link to={`/bookdetails/${id}`} className="linkname">
    <li className="user-card-container">
        
        <div className="user-details-container">
            <h1 className="user-name">{title}</h1>
            <p className="user-author">{author}</p>
            <p className="user-genre">{genre}</p>
            <p className="user-rating">{rating}</p>
            <button onClick={handleAddClick}>Add</button>
               
        </div>
        

    </li>
    </Link>
    )
}

export default BookList
    