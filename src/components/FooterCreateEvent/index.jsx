import {
    Button,
    Flex,
}
    from "@chakra-ui/react";


const FooterCreate = (props) => {
    return (
        <Flex
            height={16}
            width={"100%"}
            position={"fixed"}
            bottom={0}
            bgColor={"rgb(27, 24, 77)"}
            zIndex={9999}
        >
            <Button
                position={"absolute"}
                right={20}
                top={3}
                onClick={props.onClick}
            >
                Create Event
            </Button>
        </Flex>
    )
}

export default FooterCreate;