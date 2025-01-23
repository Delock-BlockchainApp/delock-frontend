
import PropTypes from 'prop-types';

interface TextComponentProps {
  text: string;
  fontSize?: string;
}

function TextComponent({ text, fontSize }: TextComponentProps) {
  const dynamicStyle = {
    fontSize: fontSize || '30px', // Default to 30px if no fontSize is provided
    color: '#004182', // Default to 1rem if no fontSize is provided
  };

  return (
    <p
      className="text-blue-500  font-poppins font-bold text-[30px]" // Tailwind classes for blue color and bold font
      style={dynamicStyle} // Apply dynamic font size via inline styles
    >
      {text}
    </p>
  );
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

export default TextComponent; 