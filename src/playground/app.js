class IndecisionApp extends React.Component
{
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (ex) {

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount () {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState( () => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((optionToRemove) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }
    handleAddOption(optionVal) {
        if (!optionVal) {
            return 'Enter valid value to add an item';
        } else if (this.state.options.indexOf(optionVal) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(optionVal) }));
    }
    render() {
        const subTitle = 'Trying out different rules';
        return (
            <div onSubmit={this.onFormSubmit}>
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
        );
};

Header.defaultProps = {
    title: 'CRUD app'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>Select a random rule for me please!</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add a rule first!</p>}
            <ol>
                {
                    props.options.map((option) => 
                    <Option 
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                    )
                }
            </ol>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button
                onClick= {(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </li>
    );
};

class AddOption extends React.Component
{
    //WHEN THE CHILD NEEDS SOME COMMUNICATION AND UPDATE STATE, IT NEEDS TO STILL KEEP ITS EVENT HANDLER FUNCTION
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.newOptionValue.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.newOptionValue.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='newOptionValue'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
