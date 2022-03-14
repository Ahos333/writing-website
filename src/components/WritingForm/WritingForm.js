import React from 'react';
import '../../App.css';
//import { Button } from './components/Buttons/Button';
import './WritingForm.css';

function WritingBoard() {
  return (
    <div class="page-wrapper">
        <form>
            <div class="form-element">
                <label>Title:</label>
                <input
                    class="title-input"
                    placeholder="Title of Work"
                />
            </div>
            <div class="form-element">
                <label>Story:</label>
                <textarea
                    class="title-input"
                    placeholder="Title of Work"
                />
            </div>class
            <div class="button-container">
                <div class="form-element">
                    <button
                        className="btns submit-btn"
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Post Work
                    </button>
                </div>
                <div class="form-element">
                    <button
                        className="btns submit-btn"
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Save Work
                    </button>
                </div>
            </div>
        </form>
    </div>
    
  );
}

export default WritingBoard;
