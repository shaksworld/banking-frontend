import React from 'react';
import {Button, Flex, Heading, Select, SimpleGrid, Text,  useColorModeValue} from '@chakra-ui/react';
import Card from "../../../../components/card/Card";


function LoanTable(props) {

    const textColor = useColorModeValue("secondaryGray.900", "white");
    const iconColor = useColorModeValue("secondaryGray.500", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
    return (
        <Card
            direction='column'
            w='100%'
            px='0px'
            overflowX={{ sm: "scroll", lg: "hidden" }}>
            <SimpleGrid>
                <Flex
                    justify='space-between'
                    align='center'
                    px='25px'
                    py='20px'
                    borderBottom='1px solid'
                    borderColor={borderColor}>
                    <Heading
                        color={textColor}
                        fontSize='22px'
                        fontWeight='700'
                        lineHeight='100%'>
                        Loan and Acquisition Form
                    </Heading>
                    <Button
                        bg='primaryBlue'
                        color='white'
                        fontSize='14px'
                        fontWeight='400'
                        lineHeight='100%'
                        borderRadius='5px'
                        px='20px'
                        py='10px'
                        _hover={{ bg: 'primaryBlue' }}
                        _focus={{ boxShadow: 'none' }}>
                        Add New
                    </Button>
                </Flex>
                <Text
                    color={iconColor}
                    fontSize='14px'
                    fontWeight='400'
                    lineHeight='100%'
                    margin-bottom='10px'
                >
                    Estimated Duration
                </Text>
                <Select placeholder='Select Duration'>
                    <option value='option1'>3-6 Months</option>
                    <option value='option2'>6-12 Months</option>
                    <option value='option3'>12-24 Months</option>
                </Select>
            </SimpleGrid>
            {/*<Flex>*/}
            {/*    <Select placeholder='Select Duration'>*/}
            {/*        <option value='option1'>3-6 Months</option>*/}
            {/*        <option value='option2'>6-12 Months</option>*/}
            {/*        <option value='option3'>12-24 Months</option>*/}
            {/*    </Select>*/}
            {/*</Flex>*/}
        </Card>
    );
}

export default LoanTable;