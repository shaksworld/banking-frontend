import React from 'react';
import {Box, Select, SimpleGrid} from "@chakra-ui/react";
import LoanTable from "./components/loanTable";

function Index(props) {
    return (
        <Box pt={ {base: "130px", md: "80px", xl: "80px"}}>
            <SimpleGrid
                mb='20px'
                columns={{ sm: 1, md: 2 }}
                spacing={{ base: "20px", xl: "20px" }}>

                <LoanTable />
                <Select placeholder='Select Duration'>
                    <option value='option1'>3-6 Months</option>
                    <option value='option2'>6-12 Months</option>
                    <option value='option3'>12-24 Months</option>
                </Select>

                <Select placeholder='Select Duration'>
                    <option value='option1'>3-6 Months</option>
                    <option value='option2'>6-12 Months</option>
                    <option value='option3'>12-24 Months</option>
                </Select>
            </SimpleGrid>

        </Box>
    );
}

export default Index;