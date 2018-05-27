const user = {
    name: 'Trupti',
    age: '19',
    location: 'Bothell, Washington'//,  -- does not throw error on that extra comma
};
// var userName = 'Nishita';
// var userAge = '34';
// var userLocation = 'Bothell, Washington';

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {/* <p>Age: {user.age}</p> */}
        {true}
        {/* <p>Location: {getLocation(user.location)}</p> */}
        {user.age > 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);