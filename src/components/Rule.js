import React from 'react';
import ReactBootStrap  from 'react-bootstrap';
import ReactDOM from 'react-dom';
import FaClose from 'react-icons/lib/fa/close';

import { ListGroupItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Rule = (props) => (
    <ListGroupItem>
            <Button
                onClick= {(e) => {
                    props.handleDeleteRule(props.ruleText);
                }}
                bsSize="small"
                bsStyle="warning"
            >
                <FaClose name='deleteRule' />
            </Button>
            {props.ruleText}
    </ListGroupItem>
);


export default Rule;