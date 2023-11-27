import React from "react";

const isOffline = () => {

    const [isOnline, setIsOnline] = React.useState("offline");

    const onButtonA = () => {
        setIsOnline("online")
    };

    const onButtonB = () => {
        setIsOnline("offline")
    };

    return { isOnline, onButtonA, onButtonB }
};

export default isOffline;