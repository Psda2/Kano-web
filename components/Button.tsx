import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-[#00838f] text-white hover:bg-[#006064] hover:scale-[1.03] hover:shadow-lg focus:ring-[#00838f]",
        secondary: "bg-transparent border-2 border-[#00838f] text-[#00838f] hover:bg-[#00838f] hover:text-white hover:border-transparent focus:ring-[#00838f]"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
