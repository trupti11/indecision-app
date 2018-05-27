// const showDetails = 'Show details';
// const hideDetails = 'Hide details';
// let buttonValue = showDetails;
// let detailsDisabled = true;

// const onSubmitAction = (e) => {
//     e.preventDefault();
//     if (buttonValue == showDetails) {
//         buttonValue = hideDetails;
//     } else {
//         buttonValue = showDetails;
//     }
//         render();
// };

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};
 const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && <p>Hey. These are some details you can now see!</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();