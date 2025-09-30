export const Card = ({ children, className = '', variant = "default", ...props }) => {
    const variants = {
      default: "bg-black/70",
      dark: "bg-dark text-white",
      amber: "bg-black/80",
      white: "bg-white text-dark"

    };
   
    return (
      <div
        className={`shadow-lg p-6 rounded-xl ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
   
   