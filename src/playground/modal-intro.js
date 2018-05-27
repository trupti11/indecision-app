
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            {/* {props.content} */}
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>title</h1>
        <p>this is my page</p>
    </div>
);

ReactDOM.render(<Layout><p>this is inline</p></Layout>, document.getElementById("app"));
//ReactDOM.render(<Layout content={template}/>, document.getElementById("app"));