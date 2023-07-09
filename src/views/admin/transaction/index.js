import React from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

function Index(props) {
    return (
        <Box pt={{ base: "130px"}}>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th isNumeric>Amount</Th>
                            <Th>Receiver</Th>
                            <Th>Type</Th>
                            <Th>Bank</Th>
                            <Th>Description</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td isNumeric>$4,000</Td>
                            <Td>John Doe</Td>
                            <Td>Current</Td>
                            <Td>Bank of America</Td>
                            <Td>Salary</Td>
                            <Td>Active</Td>

                        </Tr>
                        <Tr>
                            <Td isNumeric>$4,000</Td>
                            <Td>John Doe</Td>
                            <Td>Current</Td>
                            <Td>Bank of America</Td>
                            <Td>Salary</Td>
                            <Td>Active</Td>

                        </Tr>
                        <Tr>
                            <Td isNumeric>$4,000</Td>
                            <Td>John Doe</Td>
                            <Td>Current</Td>
                            <Td>Bank of America</Td>
                            <Td>Salary</Td>
                            <Td>Active</Td>

                        </Tr>
                        <Tr>
                            <Td isNumeric>$4,000</Td>
                            <Td>John Doe</Td>
                            <Td>Current</Td>
                            <Td>Bank of America</Td>
                            <Td>Salary</Td>
                            <Td>Active</Td>

                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                            <Th isNumeric>multiply by</Th>
                            <Th isNumeric>multiply by</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Index;
