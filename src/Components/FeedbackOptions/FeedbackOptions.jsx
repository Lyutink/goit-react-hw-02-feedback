import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map((option) => (
        <button type="button" key={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
