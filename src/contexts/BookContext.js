import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducers'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData): []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    })
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;


















// import React, { createContext, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'

// export const BookContext = createContext()

// const BookContextProvider = (props) => {
//     const [books, setBooks] = useState([
//         {title: 'the 48 laws of power', author: 'robert greene', id: 1},
//         {title: 'eat that frog', author: 'brian tracy', id: 2},
//         {title: 'the 80/20 principle', author: 'richard koch', id: 1},
//         {title: 'the 5 second rule', author: 'mel robbins', id: 1},
//         {title: 'the black swan', author: 'nassim nicholas taleb', id: 1},
//         {title: 'tiny habits', author: 'bj fogg', id: 1},
//     ])
//     const addBook = (title, author) => {
//         setBooks([...books, {title, author, id: uuidv4()}])
//     }
//     const removeBook = (id) => {
//         setBooks(books.filter(book => book.id !== id))
//     }
//     return ( 
//         <BookContext.Provider value={{books, addBook, removeBook}}>
//             {props.children}
//         </BookContext.Provider>
//      );
// }
 
// export default BookContextProvider;

