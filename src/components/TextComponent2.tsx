import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

interface TextComponentProps {
  text: string;
  dept: string;
}
function TextComponent2({text,dept}: TextComponentProps ) {    
  const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('issuers', { state: text });
    };
  return (
    <div className="flex justify-between cursor-pointer">
          <p  className="font-medium" >{dept}</p>
          { text !== dept && (
            <p onClick={handleNavigate}>view all <i className="bi bi-arrow-right"></i></p>
          )}
    </div>
  )
}
TextComponent2.propTypes = {
  text: PropTypes.string.isRequired,
  dept: PropTypes.string.isRequired,
};

export default TextComponent2
