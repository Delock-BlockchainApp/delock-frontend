import PropTypes from 'prop-types';

interface TextComponentProps {
  text: string;
}
function TextComponent2({text}: TextComponentProps) {
  return (
    <div className="flex justify-between">
          <p className="font-medium" >{text}</p><p>view all <i className="bi bi-arrow-right"></i></p>
    </div>
  )
}
TextComponent2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextComponent2
