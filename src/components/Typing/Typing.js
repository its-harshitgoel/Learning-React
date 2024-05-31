import { useEffect, useState } from 'react';
import './Typing.css';
function Typing({
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    duration = 1000
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[textIndex].length) {
                    setDisplayedText((prev) => prev + text[textIndex].charAt(displayedText.length));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, typingSpeed, deletingSpeed, text]);

    return (
        <div className="typing">
            <span className="caret">
                <span className="text">{displayedText}</span>
                <span className='pipe'>|</span>
            </span>
        </div>
    );
}

export default Typing;
