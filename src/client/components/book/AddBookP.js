import React from 'react';

const AddBookP = props => {
    const { author, title, genre } = props.data;
    const { handleChange, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} id="review-form">
            <label>Title</label>
            <input type="text" id="title" onChange={handleChange} value={title}/>
            <label>Author</label>
            <input type="text" id="author" onChange={handleChange} value={author}/>
            <label>Genre</label>
            <input type="text" id="genre" onChange={handleChange} value={genre}/>
            <button>Add new book</button>
        </form>
    );
};

export default AddBookP;