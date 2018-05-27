import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default class AddRule extends React.Component
{
    //WHEN THE CHILD NEEDS SOME COMMUNICATION AND UPDATE STATE, IT NEEDS TO STILL KEEP ITS EVENT HANDLER FUNCTION
    state = {
        error: undefined
    };

    handleAddRule = (e) => {
        e.preventDefault();
        const rule = e.target.elements.newRuleValue.value.trim();
        const error = this.props.handleAddRule(rule);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.newRuleValue.value = '';
        }
    };

    render = () => (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddRule}>
                <input type="text" name='newRuleValue'/>
                <Button bsStyle="success" onClick={(e) => {
                    const rule = e.target.elements.newRuleValue.value.trim();
                    props.handleAddRule(rule);
                }}>Add Rule</Button>
            </form>
        </div>
    );
}