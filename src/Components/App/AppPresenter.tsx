import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import OutHome from "../../Routes/OutHome";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import SocialLogin from "../../Routes/SocialLogin";
import VerifyPhone from "../../Routes/VerifyPhone";

interface IProps {
    isLoggedIn: boolean;
}

const LoggedOutRoutes: React.FC = () => (
    <Switch>
        <Route path={"/"} exact component={OutHome} />
        <Route path={"/phone-login"} component={PhoneLogin} />
        <Route path={"/verify-phone/:number"} component={VerifyPhone} />
        <Route path={"/social-login"} component={SocialLogin} />
        <Redirect from={"*"} to={"/"} />
    </Switch>
);

const LoggedInRoutes: React.FC = () => (
    <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/ride"} exact component={Ride} />
        <Route path={"/edit-account"} exact component={EditAccount} />
        <Route path={"/settings"} exact component={Settings} />
        <Route path={"/places"} exact component={Places} />
        <Route path={"/add-place"} exact component={AddPlace} />
        <Route path={"/find-address"} exact component={FindAddress} />
        <Redirect from={"*"} to={"/"} />
    </Switch>
);

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
    return (
        <BrowserRouter>
            {isLoggedIn
                ? <LoggedOutRoutes />
                : <LoggedInRoutes />
            }
        </BrowserRouter>
    )
}


export default AppPresenter;