import React, { useState } from 'react';
import './flag.css';

// onclick="changeLang('${item.cca2}', '${item.flags.png}')"
const Flag = (props) => {
    return(
        <div className={props.className}>
            <div className="row">
                <div className="col-5">
                    {props.name}
                </div>
                <div className="col-5">
                    <img src={props.flagImage} width="21" height="16"
                         alt=""/>
                </div>
            </div>
        </div>
    );
}
export default Flag;