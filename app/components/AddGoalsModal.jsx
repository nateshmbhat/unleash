import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import GoalsModal from './GoalsModal';

const AddGoalsModal = ({ onSubmit, onCancel, parameters, ...modalProps }) => {
  const { showSpinner } = parameters;
  const modalActions = [(
    <FlatButton
      label="Cancel"
      onTouchTap={onCancel}
      disabled={showSpinner}
    />), (<FlatButton
      label="Submit"
      secondary
      onTouchTap={onSubmit}
      disabled={showSpinner}
    />),
  ];

  return (
    <GoalsModal
      modalActions={modalActions}
      parameters={parameters}
      editable
      {...modalProps}
    />
  );
};

AddGoalsModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  parameters: PropTypes.shape({
    showModal: PropTypes.bool.isRequired,
    showSpinner: PropTypes.bool,
    name: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
    icon: PropTypes.string,
    level: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),

};

export default AddGoalsModal;
