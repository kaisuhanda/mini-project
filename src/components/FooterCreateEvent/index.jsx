import {
    Button,
    Flex,
}
    from "@chakra-ui/react";


const FooterCreate = (props) => {
    return (
        <Flex
            height={16}
            width={"100vw"}
            position={"fixed"}
            bottom={0}
            bgColor={"rgb(27, 24, 77)"}
            zIndex={9999}
        >
            {props.event}
            {props.cancel}
        </Flex>
    )
}

export default FooterCreate;