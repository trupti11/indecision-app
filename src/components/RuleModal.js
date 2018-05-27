import React from 'react';
import Modal from 'react-modal';

import { Button } from 'react-bootstrap';

const RuleModal = (props) => (
    <Modal
        isOpen={!!props.selectedRule}
        onRequestClose={props.handleModalClose}
        contentLabel ="selectedRule"
    >
        <h3>Selected Rule</h3>
        {props.selectedRule && <p>{props.selectedRule}</p>}
    <Button onClick={props.handleModalClose} bsStyle="success">Okay</Button>
    </Modal>
);


export default RuleModal;