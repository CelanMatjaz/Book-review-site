import React from 'react';

const ReviewFormC = props => {
    const { author, review } = props.data;
    const { handleChange, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} id="review-form">
            <label>Author</label>
            <input type="text" id="author" onChange={handleChange} value={author}/>
            <label>Review</label>
            <textarea id="review" onChange={handleChange} value={review}/>
            <button>Submit review</button>
        </form>
    );
};

export default ReviewFormC;