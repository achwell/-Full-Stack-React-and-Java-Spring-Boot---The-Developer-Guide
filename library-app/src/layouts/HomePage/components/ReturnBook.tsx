import {FC} from 'react';
import BookModel from "../../../models/BookModel";

interface Props {
    book: BookModel
}

const ReturnBook: FC<Props> = ({book}) => {

    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                {book.img ?
                    <img
                        src={book.img}
                        width='151'
                        height='233'
                        alt="book"
                    />
                    :
                    <img
                        src={require('../../../images/bookimages/book-luv2code-1000.png')}
                        width='151'
                        height='233'
                        alt="book"
                    />
                }
                <h6 className='mt-2'>{book.title}</h6>
                <p>{book.author}</p>
                <a className='btn main-color text-white' href={`checkout/${book.id}`}>Reserve</a>
            </div>
        </div>
    );
};

export default ReturnBook;