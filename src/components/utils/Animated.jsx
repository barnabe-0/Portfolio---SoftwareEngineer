import React, { useEffect, useState } from 'react';

const Animated = () => {
        const roles = [
            { title: 'Engenheiro de Software' },
            { title: 'Desenvolvedor FullStack' },
            { title: 'Software Developer' }
        ];

        const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
        const [currentText, setCurrentText] = useState('');
        const [isDeleting, setIsDeleting] = useState(false);
        const [typingSpeed, setTypingSpeed] = useState(150);


        useEffect(() => {
            const handleTyping = () => {
                const currentRole = roles[currentRoleIndex].title;
                
                if (!isDeleting) {
                    if (currentText === currentRole) {
                        setTimeout(() => setIsDeleting(true), 2000);
                        setTypingSpeed(500);
                    } else {
                        setCurrentText(currentRole.substring(0, currentText.length + 1));
                        setTypingSpeed(150);
                    }
                } else {
                    if (currentText === '') {
                        setIsDeleting(false);
                        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                        setTypingSpeed(500);
                    } else {
                        setCurrentText(currentText.substring(0, currentText.length - 1));
                        setTypingSpeed(100);
                    }
                }
            };

            const timer = setTimeout(handleTyping, typingSpeed);
            return () => clearTimeout(timer);
        }, [currentText, currentRoleIndex, isDeleting, typingSpeed, roles]);

        
    return (
        <div className="text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="text-outline pb-1">{currentText}</span>
                <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
            </h1>
        </div>
    );
}

export default Animated;