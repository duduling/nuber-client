import React from "react";

interface IProps {
    isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) =>
    isLoggedIn ? <span>you are in</span> : <span>your are out</span>;

export default AppPresenter;