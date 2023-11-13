import { Flex, Box, Button, ButtonGroup, color } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";

const SideNavbar = (props) => {
    return (
        <Box
            display={props.display}
            style={{ position: "fixed", boxShadow: "0px 2px 5px grey", backgroundColor: "rgb(251, 251, 251)", height: "100vh", width: "250px" }}>
            <Box w={250} h={20} textAlign={"center"} padding={8}>
                logo disini
            </Box>
            <Box display={"flex"} gap={1} flexDirection={"column"} marginTop={4}>
                <Box
                    h={20}
                    padding={7}
                    fontWeight={500}
                    color={"black"}
                    rounded={"md"}
                    boxShadow={"md"}
                    onClick={props.onClick}
                    _hover={{ bgColor: "rgb(231, 231, 231)", cursor: "pointer" }}
                >
                    Dashboard
                </Box>
                <Box
                    h={20}
                    padding={7}
                    fontWeight={500}
                    color={"black"}
                    rounded={"md"}
                    boxShadow={"md"}
                    onClick={props.onClick}
                    _hover={{ bgColor: "rgb(231, 231, 231)", cursor: "pointer" }}
                >
                    Settings
                </Box>
            </Box>
            <Flex
                padding={7}
                justifyContent={"space-around"}
                position={"absolute"}
                bottom={0}
                w={250}
                h={20}
                fontWeight={500}
                color={"black"}
                borderTop={"1px solid black"}
                onClick={props.onClick}
                _hover={{ bgColor: "rgb(231, 231, 231)", cursor: "pointer" }}
            >
                <BiArrowBack style={{ marginTop: "5px", }} /> Back to Main Menu
            </Flex>
        </Box >
    )
}

export default SideNavbar;