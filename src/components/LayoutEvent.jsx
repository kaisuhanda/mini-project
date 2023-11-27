import { Flex, Box } from "@chakra-ui/react"
import SideNavbar from "./Navbar/SideNavbar"
import { useNavigate } from "react-router-dom";

const LayoutPage = (props) => {
    const navigate = useNavigate();

    return <Flex minWidth={"100vw"} minH={"100vh"}>
        <SideNavbar display={{ base: "none", md: "block" }} mainMenu={() => navigate("/")} />
        <Box padding={{ base: "4" }} maxWidth={"full"} minH={"100vh"}>
            {props.children}
        </Box>
    </Flex>
}

export default LayoutPage;