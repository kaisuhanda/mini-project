import React from "react";

const isDisable = () => {

    const [isUsable, setIsUsable] = React.useState(true);

    const onButtonOpen = () => {
        setIsUsable(true)
    };

    const onButtonClose = () => {
        setIsUsable(false)
    };

    return { isUsable, onButtonOpen, onButtonClose }
};

export default isDisable;