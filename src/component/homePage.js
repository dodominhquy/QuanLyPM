import { Stack, Text, Select } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import {
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
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Spacer } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import AddRoom from './roomPage/addRoom';
import EditRoom from './roomPage/editRoom';
import DeleteRoom from './roomPage/deleteRoom';
import AddDevice from './devicePage/addDevice';
import EditDevice from './devicePage/editDevice';
import DeleteDevice from './devicePage/deleteDevice';
import { Link } from '@chakra-ui/react';

export default function HomePage() {
    return (
        <>

            <Tabs variant='enclosed'>
                <TabList>
                    <Tab><Text fontSize='20px' as='b'>Room</Text></Tab>
                    <Tab><Text fontSize='20px' as='b'>Device</Text></Tab>
                </TabList>
                <TabPanels>

                    <TabPanel>
                        <TableContainer>
                            <Center>
                                <Text fontSize='40px' as='b' color='Blue'>Room List</Text>
                            </Center>
                            <br/>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Room</Th>
                                        <Th>Room Name</Th>
                                        <Th>Device Quantity</Th>
                                        <Th>Assignment</Th>
                                        <Th isNumeric></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>25.4</Td>
                                        <Td>25.4</Td>
                                        <Td isNumeric>
                                            <Stack direction='row-reverse' spacing={4}>
                                                <Link href='./roomPage/addRoom'>
                                                    <Button leftIcon={<AddIcon />} colorScheme='teal' variant='outline'>
                                                        Add
                                                    </Button>
                                                </Link>
                                                <Link href='./roomPage/editRoom'>
                                                    <Button rightIcon={<EditIcon />} colorScheme='teal' variant='outline'>
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <Link href='./roomPage/deleteRoom'>
                                                    <Button rightIcon={<DeleteIcon />} colorScheme='teal' variant='outline'>
                                                        Delete
                                                    </Button>
                                                </Link>
                                            </Stack>
                                        </Td>
                                    </Tr>
                                </Tbody>
                                {/* <Tfoot>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Tfoot> */}
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    <TabPanel>
                        <TableContainer>
                            <Center>
                                <Text fontSize='40px' as='b' color='Blue'>Device List</Text>
                            </Center>
                            <br/>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Room</Th>
                                        <Th>ID Device</Th>
                                        <Th>Monitor</Th>
                                        <Th>Key Board</Th>
                                        <Th>Mouse</Th>
                                        <Th>PC Case</Th>
                                        <Th>Quantity of software</Th>
                                        <Th>Status</Th>
                                        <Th>Note</Th>
                                        <Th isNumeric></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>25.4</Td>
                                        <Td>25.4</Td>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td>25.4</Td>
                                        <Td>
                                            <Select>
                                                <option value='option1'>Active</option>
                                                <option value='option2'>Inactive</option>
                                            </Select>
                                        </Td>
                                        <Td>25.4</Td>
                                        <Td isNumeric>
                                            <Stack direction='row-reverse' spacing={4}>
                                                <Link href='./devicePage/addDevice'>
                                                    <Button leftIcon={<AddIcon />} colorScheme='teal' variant='outline'>
                                                        Add
                                                    </Button>
                                                </Link>
                                                <Link href='./devicePage/editDevice'>
                                                    <Button rightIcon={<EditIcon />} colorScheme='teal' variant='outline'>
                                                        Edit
                                                    </Button>
                                                </Link>
                                                <Link href='./devicePage/deleteDevice'>
                                                    <Button rightIcon={<DeleteIcon />} colorScheme='teal' variant='outline'>
                                                        Delete
                                                    </Button>
                                                </Link>
                                            </Stack>
                                        </Td>
                                    </Tr>
                                </Tbody>
                                {/* <Tfoot>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Tfoot> */}
                            </Table>
                        </TableContainer>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </>

    );
}