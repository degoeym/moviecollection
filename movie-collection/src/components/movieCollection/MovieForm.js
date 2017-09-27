import React from 'react';

const MovieForm = ({movie, onSave, onChange, onCancel, saving, isEdit}) => {
    debugger;
    var releaseDate = (isEdit) ? getReleaseDate(movie.releaseDate) : movie.releaseDate;
    return (
        <form>
            <h1>{isEdit ? 'Edit' : 'Add'} Movie</h1>
            <label htmlFor='title'>Title</label>
            <div className="field">
                <input type="text" name='title' className="form-control" 
                    placeholder="Title" value={movie.title} onChange={onChange} />
            </div>
            <label htmlFor='description'>Description</label>
            <div className="field">
                <input type="text" name='description' className="form-control" 
                    placeholder="Title" value={movie.description} onChange={onChange} />
            </div>
            <label htmlFor='rating'>Rating</label>
            <div className="field">
                <select name='rating' value={movie.rating} onChange={onChange} className="form-control">
                    <option value="">Select Rating</option>
                    {ratings.map((rating) => {
                        return <option key={rating.id} value={rating.id}>{rating.rating}</option>;
                    })}
                </select>
            </div>
            <label htmlFor='releaseDate'>Release Date</label>
            <div className="field">
                <input type="text" name='releaseDate' className="form-control" 
                    placeholder="MM/DD/YYYY" value={releaseDate} onChange={onChange} />
            </div>
            <input type="submit" 
                disabled={saving}  
                value={saving ? 'Saving...' : 'Save'} 
                className="btn btn-primary" 
                onClick={onSave} />
            <input type='button' value='Cancel' className='btn btn-danger' onClick={onCancel}/>
        </form>
    )
}

function getReleaseDate(date) {
    var returnDate = '';
    if (Date.parse(date)) {
        var releaseDate = new Date(date);
        returnDate = `${releaseDate.getMonth()+1}/${releaseDate.getDate()}/${releaseDate.getFullYear()}`;
    }
    return returnDate;
}

const ratings = [
    {
        id: -1,
        rating: "NR"
    },
    {
        id: 1,
        rating: "G"
    },
    {
        id: 2,
        rating: "PG"
    },
    {
        id: 3,
        rating: "PG-13"
    },
    {
        id: 4,
        rating: "R"
    },
    {
        id: 5,
        rating: "NC-17"
    },
    {
        id: 6,
        rating: "X"
    }
];

export default MovieForm;