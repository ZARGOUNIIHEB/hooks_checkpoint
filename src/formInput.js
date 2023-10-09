import './App.css';
//import PropTypes from 'prop-types';

function formInput(props) {
    return (
        <div className='inputForm'>
            <div className="input-wrapper">
                <label className='inputLabel'>Title</label>
                <input ref={props.refTitle} className='inputField' id="titleId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>Description</label>
                <input ref={props.refDescription} className='inputField' id="descriptionId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>PosterURL</label>
                <input ref={props.refPosterURL} className='inputField' id="posterURLId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label className='inputLabel'>Rating</label>
                <input ref={props.refRating} className='inputField' id="ratingId" placeholder=''></input>
            </div>
            <button onClick={() => props.addMovie()}> ADD</button>
        </div>);
}
formInput.defaultProps = {
    refTitle: 'Xxxxxxxxx',
    refDescription: 'Xxxxxxxxxxxxx',
    refRating: 0.0,
    refPosterURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'
}

export default formInput;