import {
    Flex,
    Box,
    Button,
    ButtonGroup,
    Image,
    Text,
} from "@chakra-ui/react";

const EventCardDashboard = (props) => {



    return (
        <Flex
            position={"relative"}
            top={150}
            left={280}
            width={1150}
            height={140}
            gap={4}
            padding={2}
            borderRadius={10}
            boxShadow={"md"}
            _hover={{ bgColor: "rgba(220, 220, 220, 0.4)" }}
            marginBottom={4}
        >
            <Image
                onClick={props.onClick}
                bgColor={"rgba(220, 220, 220, 0.4)"}
                alt="image here"
                width={220}
                borderStartRadius={10}
                _hover={{ cursor: "pointer" }}
            />

            <Flex
                onClick={props.onClick}
                flexDirection={"column"}
                gap={4}
                _hover={{ cursor: "pointer" }}
            >
                <Text
                    height={"fit-content"}
                    width={"fit-content"}
                    fontSize={21}
                    fontWeight={700}
                >
                    {props.title}
                </Text>
                <Text

                    height={"fit-content"}
                    width={"fit-content"}
                    fontSize={14}
                >
                    {props.category}
                </Text>
                <Button
                    bgColor={"yellow"}
                    color={"black"}
                >
                    {props.ticketName}
                </Button>
            </Flex>
            <Flex
                flexDirection={"column"}
                gap={1}
                position={"absolute"}
                right={190}
                top={3}
            >
                <Box
                    fontWeight={500}
                    h={"60px"}
                    w={180}
                >
                    Event Started at:
                    <Text
                        fontWeight={400}
                    >
                        {props.start_date}
                    </Text>
                </Box>

                <Box
                    fontWeight={500}
                    h={"60px"}
                    w={180}
                >
                    Event Ended at:
                    <Text
                        fontWeight={400}
                    >
                        {props.end_date}
                    </Text>
                </Box>
            </Flex>

            <ButtonGroup

                position={"absolute"}
                right={2}
                top={0}
                w={"160px"}
                h={"100%"}
                display={"flex"}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                <Button
                    boxShadow={"sm"}
                    color={"white"}
                    bgColor={"rgba(253, 166, 0, 255)"}
                    _hover={{ bgColor: "rgba(253, 200, 0, 255)" }}
                    onClick={props.edit}
                >
                    Edit
                </Button>
                <Button
                    boxShadow={"sm"}
                    color={"white"}
                    bgColor={"rgba(253, 166, 0, 255)"}
                    _hover={{ bgColor: "rgba(253, 200, 0, 255)" }}
                    onClick={props.delete}
                >
                    Delete
                </Button>
                <Button
                    boxShadow={"sm"}
                    color={"white"}
                    bgColor={"rgba(253, 166, 0, 255)"}
                    _hover={{ bgColor: "rgba(253, 200, 0, 255)" }}
                    onClick={props.newTicket}
                >
                    Add Ticket
                </Button>
            </ButtonGroup>
        </Flex>
    )
}

export default EventCardDashboard;