import React from "react";

const UserContext = React.createContext("iam the default value");//this default value get rendered while we not passing a user name

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer};