import React from "react";
import PropTypes from "prop-types";

const CloseButton = ({ closeHandler }) => (
  <button
    type="button"
    className="close text-secondary close-btn"
    aria-label="Close"
    onClick={closeHandler}
  >
    <span aria-hidden="true">&times;</span>
  </button>
);

CloseButton.propTypes = {
  closeHandler: PropTypes.func.isRequired
};

export default CloseButton;
