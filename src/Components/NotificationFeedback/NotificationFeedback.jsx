import PropTypes from "prop-types";

export default function NotificationFeedback({ message }) {
  return <p>{message}</p>;
}

NotificationFeedback.propTypes = {
  message: PropTypes.string.isRequired,
};
