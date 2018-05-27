let count = 0;

const addOne = () => {
    count++;
    console.log("addOne", count);
    renderCounterApp();
}
const minusOne = () => {
    count--;
    console.log("minusOne");
    renderCounterApp();
}
const reset = () => {
    console.log("reset");
    count = 0;
    renderCounterApp();
}

//const myid  = 'my-id';
//it's an object the template

// you need to use "className" instead of "class" since "class" is a reserved word in javascript, that's why they are different.
//allowed attribute list for React can be found at: https://reactjs.org/docs/dom-elements.html

const templateThree = (
    <div>
        <h1>Count: {count}</h1>
        {/* <button id={myid} className="button">+1</button> */}
        <button onClick={addOne}>+1</button>
        {/* <button onClick={() => { console.log('button was clicked!'); }}>+1</button> */}
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>

);
console.log(templateThree);

const appRoot = document.getElementById("app");


const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            {/* <button id={myid} className="button">+1</button> */}
            <button onClick={addOne}>+1</button>
            {/* <button onClick={() => { console.log('button was clicked!'); }}>+1</button> */}
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    
    );
//render template
ReactDOM.render(templateThree, appRoot);
    
};

//calling render app doesn't really re-render the entire app.
//React uses super-efficient virtual DOM algorithm  (that runs in javascript) to determine minimal changes that have happened on the DOM and only render those
//To demonstrate that, we can go to the Dev tools, and check the comments in the h1 element.
//Also, try incrementing or decementing the count, and only that flashes in the dev tools
renderCounterApp();