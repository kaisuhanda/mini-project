import "./style.css"
import { Flex, Box, } from "@chakra-ui/react";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";

const SideNavbar = (props) => {
    return (
        <Box
            display={props.display}
            bgColor={"rgba(245, 245, 245,1)"}
            position={"fixed"}
            boxShadow={"0px 2px 3px grey"}
            height={"100vh"}
            width={"250px"}
        >
            <Box w={250} h={20} textAlign={"center"} padding={8}>
                logo disini
            </Box>
            <Box display={"flex"} gap={2} flexDirection={"column"} marginTop={4}>
                <Flex
                    className="sidebar-button"
                    h={20}
                    w={250}
                    padding={7}
                    fontWeight={500}
                    color={"black"}
                    borderEndRadius={10}
                    boxShadow={"md"}
                    onClick={props.dashboard}
                    bgColor={"rgba(245, 245, 245,1)"}
                    _hover={{ bgColor: "rgba(1,0,128,255)", cursor: "pointer", color: "white" }}
                    gap={3}
                    alignItems={"center"}
                    fontSize={21}
                >
                    <MdOutlineDashboard size={28} /> Dashboard
                </Flex>
                <Flex
                    className="sidebar-button"
                    h={20}
                    w={250}
                    padding={7}
                    fontWeight={500}
                    color={"black"}
                    borderEndRadius={10}
                    boxShadow={"md"}
                    onClick={props.settings}
                    bgColor={"rgba(245, 245, 245,1)"}
                    _hover={{ bgColor: "rgba(1,0,128,255)", cursor: "pointer", color: "white" }}
                    gap={3}
                    alignItems={"center"}
                    fontSize={21}
                >
                    <MdOutlineSettings size={28} /> Settings
                </Flex>
            </Box>
            <Flex
                className="sidebar-button"
                h={20}
                w={250}
                padding={7}
                fontWeight={500}
                color={"black"}
                borderEndRadius={10}
                boxShadow={"-1px -0.1111111111px 7px 0.1px rgb(190, 190, 190)"}
                onClick={props.mainMenu}
                bgColor={"rgba(245, 245, 245,1)"}
                _hover={{ bgColor: "rgba(1,0,128,255)", cursor: "pointer", color: "white" }}
                gap={3}
                alignItems={"center"}
                fontSize={17}
                position={"absolute"}
                bottom={0}
            >
                <BiArrowBack size={21} /> Back to Main Menu
            </Flex>
        </Box >
    )
}

export default SideNavbar;