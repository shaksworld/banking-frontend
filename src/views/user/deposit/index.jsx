import React from 'react';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Button,
    Tooltip,
    Input,
    Stack,
    InputGroup,
    InputLeftElement, InputRightElement, Text, Textarea, useColorModeValue
} from '@chakra-ui/react'
import {ArrowForwardIcon, CheckIcon, PhoneIcon} from "@chakra-ui/icons";

function Index(props) {

    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)

    //color
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const iconColor = useColorModeValue("secondaryGray.500", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

    return (
        <Box pt={{ base: "130px"}}>
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tooltip hasArrow label='Please Note this transaction takes within 24hrs' bg='gray.300' color='black'>
                        <Tab>Same Bank Transfer</Tab>
                    </Tooltip>

                    <Tooltip hasArrow label='Please Note this transaction takes within 48hrs' bg='gray.300' color='black'>
                        <Tab>Other Bank Transfer</Tab>
                    </Tooltip>
                    <Tooltip hasArrow label='Please Note this transaction might take longer time' bg='gray.300' color='black'>
                        <Tab>Wire/Intl Transfer</Tab>
                    </Tooltip>

                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Stack spacing={4}>
                            {/*<InputGroup>*/}
                            {/*    <InputLeftElement pointerEvents='none'>*/}
                            {/*        <PhoneIcon color='gray.300' />*/}
                            {/*    </InputLeftElement>*/}
                            {/*    <Input type='tel' placeholder='Phone number' />*/}
                            {/*</InputGroup>*/}

                            <Text mb='8px'>Amount</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                    children='$'
                                />
                                <Input placeholder='Enter amount' />
                                <InputRightElement>
                                    <CheckIcon color={iconColor} />
                                </InputRightElement>
                            </InputGroup>

                            <Text mb='8px'>Recipient Account</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter amount' />
                            </InputGroup>

                            <Text mb='8px'>Recipient Name</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter recipient name' />
                            </InputGroup>
                            <Text mb='8px'>Description</Text>
                            <Textarea placeholder='Enter your description here please' />

                        </Stack>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            rightIcon={<ArrowForwardIcon />}
                            type='submit'
                        >
                            Transfer
                        </Button>
                        {/*<button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>Transfer</button>*/}
                    </TabPanel>
                    <TabPanel>
                        <Stack spacing={4}>
                            {/*<InputGroup>*/}
                            {/*    <InputLeftElement pointerEvents='none'>*/}
                            {/*        <PhoneIcon color='gray.300' />*/}
                            {/*    </InputLeftElement>*/}
                            {/*    <Input type='tel' placeholder='Phone number' />*/}
                            {/*</InputGroup>*/}

                            <Text mb='8px'>Amount</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                    children='$'
                                />
                                <Input placeholder='Enter amount' />
                                <InputRightElement>
                                    <CheckIcon color={iconColor} />
                                </InputRightElement>
                            </InputGroup>

                            <Text mb='8px'>Recipient Account</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter amount' />
                            </InputGroup>

                            <Text mb='8px'>Recipient Name</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter recipient name' />
                            </InputGroup>
                            <Text mb='8px'>Bank Name</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter recipient Bank Name' />
                            </InputGroup>
                            <Text mb='8px'>Description</Text>
                            <Textarea placeholder='Enter your description here please' />

                        </Stack>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            rightIcon={<ArrowForwardIcon />}
                            type='submit'
                        >
                            Transfer
                        </Button>
                    </TabPanel>
                    <TabPanel>
                        <Stack spacing={4}>

                            <Text mb='8px'>Amount</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                    children='$'
                                />
                                <Input placeholder='Enter amount' />
                                <InputRightElement>
                                    <CheckIcon color={iconColor} />
                                </InputRightElement>
                            </InputGroup>

                            <Text mb='8px'>Recipient Account</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter amount' />
                            </InputGroup>

                            <Text mb='8px'>Recipient Name</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter recipient name' />
                            </InputGroup>
                            <Text mb='8px'>Bank Name</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter recipient Bank Name' />
                            </InputGroup>
                            <Text mb='8px'>Swift Code</Text>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color={textColor}
                                    fontSize='1.5em'
                                />
                                <Input placeholder='Enter your swift code' />
                            </InputGroup>
                            <Text mb='8px'>Description</Text>
                            <Textarea placeholder='Enter your description here please' />

                        </Stack>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            rightIcon={<ArrowForwardIcon />}
                            type='submit'
                        >
                            Transfer
                        </Button>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default Index;