import Toggle from 'react-toggle';
import "react-toggle/style.css"
import "./DarkToggle.css"
import { useEffect, useState } from 'react';

const CLASS_LIGHT = "light";

function DarkToggle() {
    const [ isDark, setIsDark ] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.remove(CLASS_LIGHT);
        } else {
            document.documentElement.classList.add(CLASS_LIGHT);
        }
    }, [isDark]);

    return (
    <div className="DarkToggle">
        <Toggle
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode"
            checked={isDark}
            onChange={
                event => setIsDark(event.target.checked)
            }
        />
    </div>
    );
}

export default DarkToggle;