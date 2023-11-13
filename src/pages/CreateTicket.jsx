import {
    Box,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputLeftElement,
    InputGroup,
    ButtonGroup,
    Button,
    RadioGroup,
    Radio
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CreateTicket = () => {
    const [typeEvent, setTypeEvent] = useState(true);

    return (
        <Box>
            <FormControl> {/* TICKET*/}
                <FormControl isRequired> {/* event price */}
                    <RadioGroup onChange={setTypeEvent}>
                        <Radio value="">Free Event</Radio>
                        <Radio value="paid">Paid Event</Radio>
                    </RadioGroup>
                    <Box>
                        <FormLabel >Price</FormLabel>
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='Rp.'
                            />
                            <Input type="number" placeholder={"Event Price"} />
                        </InputGroup>
                    </Box>
                </FormControl>
            </FormControl>
        </Box>
    )
}

export default CreateTicket;