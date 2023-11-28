import React from "react";

const useToggle = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const onToggleOpen = () => {
        setIsOpen(true);
    };

    const onToggleClose = () => {
        setIsOpen(false);
    };

    return { isOpen, onToggleOpen, onToggleClose };
};

export default useToggle;