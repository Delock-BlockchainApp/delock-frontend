import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

interface TextComponentProps {
  text: string;
}
function TextComponent2({text}: TextComponentProps) {    
  const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('issuers', { state: text });
    };
  return (
    <div className="flex justify-between cursor-pointer">
          <p  className="font-medium" >{text}</p> <p onClick={handleNavigate}>view all <i className="bi bi-arrow-right"></i></p>
    </div>
  )
}
TextComponent2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextComponent2
