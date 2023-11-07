import React from 'react';
import './lightButton.css';

const LightButton = (props) => (
    <div>
        <div className="pt-4">
            <button type="button"
                className={`btn btn-secondary btn-lg bg-transparent colorRose borderRadius px-3 text-center bgHov btnStyle ${props.className1}`}>
                BUY NOW
            </button>
        </div>
    </div>
);
export default LightButton;

