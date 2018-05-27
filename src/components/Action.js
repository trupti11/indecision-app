import React from 'react';

import { Button } from 'react-bootstrap';

const Action = (props) => (
    <div>
        <Button onClick={props.handlePick} disabled={!props.hasRules} bsStyle="primary">Modal test</Button>
    </div>
);

export default Action;