import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h4>{props.subTitle}</h4>}
    </div>
);


Header.defaultProps = {
    title: 'Rules Management App'
};

export default Header;