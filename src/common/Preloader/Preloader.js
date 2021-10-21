import React from 'react';
import preloader from "../../assets/images/Preloader.svg";

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt='preloader'/>
    </div>
}

export default Preloader;
