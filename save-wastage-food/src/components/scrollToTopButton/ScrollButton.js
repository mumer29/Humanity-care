import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './scrollBtn.css'
// import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 100) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='scrollBtn'>
            <FaArrowCircleUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </div>
    );
}

export default ScrollButton;
