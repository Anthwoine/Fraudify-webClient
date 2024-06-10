import React, {useEffect, useRef, useState} from 'react';
import './PlayerSlider.css'; // Assurez-vous d'avoir un fichier CSS pour vos styles personnalisés

function PlayerSlider({
                    max,
                    value,
                    step,
                    onChange,
                    onInput,
                    onMouseUp,
                    onTouchEnd,
                }) {

    const [isHovered, setIsHovered] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const percent = (100 * value) / max;
        sliderRef.current.style.background =
            `linear-gradient(to right, #fff 0%, #fff ${percent}%, #bcb1d0 ${percent}%, #bcb1d0 100%)`;
    }, [max, value]);

    return (
        <input
            ref = {sliderRef}
            type="range"
            min="0"
            max={max}
            value={value}
            step={step}
            onChange={onChange}
            onInput={onInput}
            onMouseUp={onMouseUp}
            onTouchEnd={onTouchEnd}
            className={`slider ${isHovered ? 'show-thumb' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
}

export default PlayerSlider;