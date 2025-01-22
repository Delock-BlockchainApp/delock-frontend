import photo from '/assets/photo.jpg';

const Card4: React.FC = () => {
  return (
    <div className="w-[250px] h-[150px] border border-gray-300 rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
      <div className="flex items-center">
        {/* Image Box */}
        <div className="w-20 h-20 bg-gray-300 rounded-sm flex-shrink-0 overflow-hidden">
          <img
            src="/assets/photo.jpg"
            alt="Driving"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-800">Class X Marksheet</h3>
          <p className="text-sm text-gray-600">431******2019</p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-400 mt-4 text-center">
        Motor Vehicle Department, Kerala
      </p>
    </div>
  );
};

export default Card4;
