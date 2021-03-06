class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (ex) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    handlePlusOne() {
        // this.state.count++;
        // console.log(this.state.count);

        //you only give the keys that change, the whole state is not re-written, only delta changes are re-written
        this.setState((prevState) => {
            return {
                count: parseInt(prevState.count, 10) + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: parseInt(prevState.count, 10) - 1
            };
        });
    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handlePlusOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById("app"));
// ReactDOM.render(<Counter count={10}/>, document.getElementById("app"));