import React from 'react';
import ReactDOM from 'react-dom';
import AddRule from './AddRule';
import ExistingRules from './ExistingRules';
import Header from './Header';
import Action from './Action';
import RuleModal from './RuleModal';

class Rules extends React.Component
{
    state = {
            rules: [],
            selectedRule: undefined
    };


    handleDeleteRules = () => {
        this.setState( () => ({ rules: [] }));
    };

    handleDeleteRule = (rule) => {
        this.setState((prevState) => ({
            rules: prevState.rules.filter((ruleToRemove) => ruleToRemove !== rule)
        }));
    };

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.rules.length);
        const rule = this.state.rules[randNum];
        this.setState(() => ({selectedRule: rule}));
    };

    handleAddRule = (ruleVal) => {
        if (!ruleVal) {
            return 'Enter valid value to add an item';
        } else if (this.state.rules.indexOf(ruleVal) > -1) {
            return 'This rule already exists';
        }

        this.setState((prevState) => ({ rules: prevState.rules.concat(ruleVal) }));
    };

    handleModalClose = () => {
        this.setState(() => ({selectedRule: undefined}));
    };

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('rules');
            const rules = JSON.parse(json);
            if (rules) {
                this.setState(() => ({ rules }));
            }
        } catch (ex) {

        }
        
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.rules.length !== this.state.rules.length) {
            const json = JSON.stringify(this.state.rules);
            localStorage.setItem('rules', json);
        }
    };

    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    };

    render = () => {
        const subTitle = 'Manage rules for different products';
        return (
            <div onSubmit={this.onFormSubmit}>
                <Header subTitle={subTitle} />
                <Action hasRules={this.state.rules.length > 0} handlePick={this.handlePick} />
                <ExistingRules 
                    rules={this.state.rules}
                    handleDeleteRules={this.handleDeleteRules}
                    handleDeleteRule={this.handleDeleteRule}
                />
                <AddRule rules={this.state.rules} handleAddRule={this.handleAddRule} />
                <RuleModal selectedRule={this.state.selectedRule} handleModalClose={this.handleModalClose} />
            </div>
        );
    };
}

export default Rules;