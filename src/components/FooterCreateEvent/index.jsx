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
            <Button
                position={"absolute"}
                right={20}
                top={3}
                onClick={props.onClick}
                color={"white"}
                bgColor={"rgba(253, 166, 0, 255)"}
            >
                {props.event}
            </Button>

            {props.cancel}
        </Flex>
    )
}

export default FooterCreate;