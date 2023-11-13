import { Flex, Input, Box, border, Avatar } from "@chakra-ui/react";

const EventHeader = (props) => {


    return (
        <Flex
            position={"absolute"}
            margin={{ base: "20px", md: "20px 20px 0px 280px", xl: "20px 20px 0px 280px" }}
            width={{ base: "450px", md: "75%" }}
            boxShadow={"md"}
            padding={5}
            justifyContent={"space-between"} >
            <Input
                width={"50%"}
                placeholder="Search here"
                _focus={{ border: "none", outline: "none" }}

            />
            <Avatar _hover={{ bgColor: "black" }} />
        </Flex >
    )
}

export default EventHeader;