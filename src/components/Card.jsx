const Card = ({ children, className, onClick }) => {
    return (
      <div
        onClick={onClick}
        className={`bg-white shadow-md rounded-lg p-4 cursor-pointer transition 
        hover:shadow-lg active:scale-95 ${className}`}
      >
        {children}
      </div>
    );
  };
  
  const CardContent = ({ children, className }) => {
    return <div className={`p-2 ${className}`}>{children}</div>;
  };
  
  export { Card, CardContent };
  