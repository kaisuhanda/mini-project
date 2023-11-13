import { Flex, Box, Button, ButtonGroup, color, Image, Text } from "@chakra-ui/react";

const EventCard = (props) => {
    return (
        <Box>
            <Image />
            <Box>
                <Text>
                    {props.title}
                </Text>
                <Text>
                    {props.category}
                </Text>
            </Box>
            <Box>
                <Text>
                    {props.dateTime}
                </Text>
                <Flex>
                    <icon />{props.date}
                </Flex>
                <Flex>
                    <icon />{props.time}
                </Flex>
            </Box>
            <Box>
                <Text>
                    {props.venueLocation}
                </Text>
                <Flex>
                    <icon />{props.location}
                </Flex>
            </Box>
        </Box>
    )
}

export default EventCard;