import { Flex, Box } from "@chakra-ui/react"
import SideNavbar from "./Navbar/SideNavbar"
import { useNavigate } from "react-router-dom";

const LayoutPage = (props) => {
    const navigate = useNavigate();

    return <Flex width={"full"}>
        <SideNavbar display={{ base: "none", md: "block" }} mainMenu={() => navigate("/")} />
        <Box padding={{ base: "4" }} maxWidth={"full"} flex={1}>
            {props.children}
        </Box>
    </Flex>
}

export default LayoutPage;