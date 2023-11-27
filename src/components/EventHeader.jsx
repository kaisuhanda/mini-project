import { Flex, Input, Box, border, Avatar, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EventHeader = (props) => {
    const navigate = useNavigate();

    return (
        <Flex
            // bgColor={"green"}
            position={"absolute"}
            margin={{ base: "20px", md: "20px 20px 0px 280px", xl: "20px 20px 0px 280px" }}
            width={{ base: "450px", md: "75%" }}
            boxShadow={"md"}
            padding={5}
            justifyContent={"space-between"}
        // minH={"100vh"}
        >
            <Input
                width={"50%"}
                placeholder="Search here"
                variant={"outline"}
                border={"1px solid black"}
                paddingLeft={5}
            />

            <Button
                color={"white"}
                bgColor={"rgba(253, 166, 0, 255)"}
                boxShadow={"md"}
                onClick={() => navigate("/create-event")}
                _hover={{ bgColor: "rgba(253, 200, 0, 255)" }}
            >
                + Add Event
            </Button>


            <Avatar _hover={{ bgColor: "rgba(1,0,128,255)" }} />
        </Flex >
    )
}

export default EventHeader;