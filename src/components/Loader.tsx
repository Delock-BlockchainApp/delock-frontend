const Loader: React.FC = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-50">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            {['D', 'e', 'l', 'o', 'c', 'k'].map((letter, index) => (
              <span
                key={index}
                className="text-4xl font-bold text-dark-blue animate-bounce"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '1s'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="mt-4 h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-dark-blue animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Loader;