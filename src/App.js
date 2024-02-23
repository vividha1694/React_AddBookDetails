import React, { useState } from 'react'
import './App.css';

function App() {
  
  const [title,setTitle] = useState();
  const [author,setAuthor] = useState();
  const [year,setYear] = useState();
  const [addList,setAddList] =useState([]);

  const handleAddBook =() => {
    if(title !== '' && author !== '' && year !== '') {
      setAddList([...addList, {title,author,year}]);
      setTitle('');
      setAuthor('');
      setYear('');
    }else{
      alert('Please fill all the Details');
    }
  }

  return (
    <>
    <div  className='container'>
    <div>
        <label htmlFor=''>Book Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
       </div>
        <div>
          <label htmlFor="">Book Author:</label>
          <input type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Published Year:</label>
          <input type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)} />
        </div>
        <button className="btn" onClick={handleAddBook}>Add Book</button>

        <table className='table'>
        <thead className='table-section'>
          <tr>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Published Year</th>
          </tr>
        </thead>
        <tbody id='book-list'>
          {addList.map((book,index)=> (
            <tr key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
          </tr>
          ))}
        </tbody>
        </table>
  
    </div>
    </>
  );
}

export default App;
