import React from 'react';
import Rule from './Rule';
import ReactDOM from 'react-dom';

import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ExistingRules = (props) => (
    <div>
        {props.rules.length === 0 && <p>Please add a rule first!</p>}
        <ListGroup>
            {
                props.rules.map((rule) => 
                <Rule 
                    key={rule}
                    ruleText={rule}
                    handleDeleteRule={props.handleDeleteRule}
                />
                )
            }
        </ListGroup>
        <br/>
        <Button onClick={props.handleDeleteRules} bsStyle="warning">Remove All Rules</Button>
    </div>
);

export default ExistingRules;