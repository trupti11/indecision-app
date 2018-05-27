// const obj = {
//     name: 'Tru',
//     getName() {
//         return this.name;
//     }
// };

// // console.log(obj.getName());
// // const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({name: 'myname'});
// // console.log(getName());

//FOR CHILD TO COMMUNICATE TO THE PARENT WE USE METHODS AS PROPS
//FOR PARENT TO COMMUNICATE TO THE CHILD, WE CAN USE THE STATE
//WHENEVER THE PARENT COMMUNICATES THAT SOME OF THE PROPS IN THE CHILD HAVE CHANGED, THEN THE CHILD COMPONENT GETS RE-RENDERED

//SIMILARITIES BETWEEN PROPS AND STATE
//1. BOTH ARE OBJECTS
//2. BOTH CAN BE USED WHEN RENDERING THE COMPONENT
//3. RE-RENDERS ARE CAUSED WHEN EITHER CHANGES

//DIS-SIMILARITIES BETWEEN PROPS AND STATE
//1. RE-RENDERS ON PROPS ARE ONLY CAUSED WHEN THE CHANGES ARE PASSED DOWN FROM PARENT COMPONENT/S
//2. PROPS ARE HANDED DOWN FROM THE PARENT/S, BUT STATE IS DEFINED WITHIN THE COMPONENT ITSELF
//3. PROPS CANNOT BE CHANGED BY THE COMPONENT ITSELF, BUT STATE CAN BE CHANGED BY THE COMPONENT ITSELF

class IndecisionApp extends React.Component
{
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            // options: []//['one', 'two', 'three']
            options: props.options
        };
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
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
        // console.log(optionVal);
        if (!optionVal) {
            return 'Enter valid value to add an item';
        } else if (this.state.options.indexOf(optionVal) > -1) {
            return 'This option already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //     options: prevState.options.concat(optionVal)
        //     };
        // });
        this.setState((prevState) => ({ options: prevState.options.concat(optionVal) }));
    }
    render() {
        // const title  = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
// console.log(this.state.options.length > 0);
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

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
        );
};
Header.defaultProps = {
    title: 'Indecision'
};
// class Header extends React.Component
// {
//     //require one method to be defined
//     render() {
//         // console.log(this.props);
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subTitle}</h2>
//         </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};
// class Action extends React.Component
// {
//     // handlePick() {
//     //     alert('handlepick');
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            {/* <p>{this.props.options.length}</p> */}
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
            {/* <ol>
                <Option />
                <Option></Option>
            </ol> */}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> //expensive binding */}
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
// class Options extends React.Component
// {
//     //binder constructor
//     // constructor(props) {
//     //     super(props); //if not done then we do not have access to this.props
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }

//     // handleRemoveAll() {
//     //     // console.log(this.props.options);
//     //     // // alert('Remove All button was clicked');
//     // }

//     render() {
//         return (
//             <div>
//                 {/* <p>{this.props.options.length}</p> */}
//                 <ol>
//                     {
//                         this.props.options.map((option) => <Option key={option} optionText={option} />)
//                     }
//                 </ol>
//                 {/* <ol>
//                     <Option />
//                     <Option></Option>
//                 </ol> */}
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> //expensive binding */}
//             </div>
//         );
//     }
// }

// class Option extends React.Component
// {
//     render() {
//         return (
//             <li>
//                 {this.props.optionText}
//             </li>
            
//         );
//     }
// }

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

        e.target.elements.newOptionValue.value = '';
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


// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

//ReactDOM.render(jsx, document.getElementById("app"));

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

//ReactDOM.render(<IndecisionApp options={['daniel den', 'whale belly']}/>, document.getElementById("app"));
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
// ReactDOM.render(<User name="trupti" age={34} />, document.getElementById("app"));