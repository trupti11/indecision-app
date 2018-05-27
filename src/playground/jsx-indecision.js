console.log('App.js is running!');

//JSX Javascript XML
//Not core js
//find templates and insert data in those templates is made possible with JSX

//create app object with title/sub-title
let banner = {
    title: 'Indecision App',
    subTitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //stops full refresh
    //console.log('form submitted');

    const option = e.target.elements.option.value;

    if (option) {
        banner.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAllOptions = () => {
    banner.options = [];
    render();
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * banner.options.length);
    const option = banner.options[randNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
    //use title, subtitle from object in the template
    const template = (
        <div>
            <h1>{banner.title}</h1>
            {banner.subTitle && <p>{banner.subTitle}</p>}
            {/* <p>{banner.options.length}</p> */}

            <form onSubmit={onFormSubmit}>
            <ol>
            {
                banner.options.map((option) =>  <li key={option}>Option: {option}</li>)
            }
            </ol>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={removeAllOptions}>Remove All</button>
                <button onClick={onMakeDecision} disabled={banner.options.length == 0}>What should I do?</button>
            </form>
            {/* {
                [9, 8, 7, 'john doe', null, undefined, true]
            }
            {
                [<p key='1'>A</p>,<p key='2'>B</p>,<p key='3'>C</p>,]
            } */}



            {/* {app.subTitle && <p>{banner.subTitle}</p>}
            {(banner.options && banner.options.length > 0) ? "Here are your options" : "No options"}
            {/* <ol>
                <li>One</li>
                <li>Two</li>
            </ol> */}
        
        </div>);


        ReactDOM.render(template, appRoot);
};

render();