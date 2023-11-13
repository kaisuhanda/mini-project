import { Flex, Box } from "@chakra-ui/react"
import SideNavbar from "./Navbar/SideNavbar"

const LayoutPage = (props) => {

    return <Flex width={"full"}>
        <SideNavbar display={{ base: "none", md: "block" }} />
        <Box padding={{ base: "4" }} maxWidth={"full"} flex={1}>
            {props.children}
        </Box>
    </Flex>
}

export default LayoutPage;