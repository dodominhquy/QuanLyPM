import { Stack, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API, APIName } from '../service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const [Room, setRoom] = useState([]);
    const [Device, setDevice] = useState([]);
    const [Assignment, setAssignment] = useState([]);

    const usenavigate = useNavigate();

    const getRoom = async () => {

        await axios.get(`${API}${APIName.Room}/GetRoom`
        )
            .then((response) => {
                console.log(response.data);
                setRoom(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const getDevice = async () => {

        await axios.get(`${API}${APIName.Device}/GetDevice`
        )
            .then((response) => {
                console.log(response.data);
                setDevice(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const getAssignment = async () => {

        await axios.get(`${API}${APIName.Assignment}/GetAssignment`
        )
            .then((response) => {
                console.log(response.data);
                setAssignment(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };


    useEffect(() => {
        // getLogin();
        getRoom();
        getDevice();
        getAssignment();
    }, [])


    return (
        <>

            <Tabs variant='enclosed'>
                <TabList>
                    <Tab><Text fontSize='20px' as='b'>Room</Text></Tab>
                    <Tab><Text fontSize='20px' as='b'>Device</Text></Tab>
                    <Tab><Text fontSize='20px' as='b'>Assignment</Text></Tab>

                    <Text as='b' fontSize='22' marginStart={100} marginTop={2} marginBottom={2}>
                        {}
                    </Text>

                    <Link href='/' marginStart={990} marginTop={2} marginBottom={2}>
                        <Button colorScheme='blue'>Log Out</Button>
                    </Link>

                </TabList>

                <TabPanels>

                    <TabPanel>
                        <TableContainer>
                            <Center>
                                <Text fontSize='40px' as='b' color='Blue'>Room List</Text>
                            </Center>

                            <Stack direction='row-reverse' spacing={4}>
                                <Link href='/deleteroom'>
                                    <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'>
                                        Delete
                                    </Button>
                                </Link>
                                <Link href='/editroom'>
                                    <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'>
                                        Edit
                                    </Button>
                                </Link>
                                <Link href='/addroom'>
                                    <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'>
                                        Add
                                    </Button>
                                </Link>

                            </Stack>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Room</Th>
                                        <Th>Room Name</Th>
                                        <Th>Device Quantity</Th>
                                        <Th>Id Assignment</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                    {Room.map((data, index) =>
                                        <Tr key={index}>
                                            <Td>{data['IDroom']}</Td>
                                            <Td>{data['RoomName']}</Td>
                                            <Td>{data['DeviceQuantity']}</Td>
                                            <Td>{data['IDAssignment']}</Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}



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

                            <Stack direction='row-reverse' spacing={4}>
                                <Link href='/deletedevice'>
                                    <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'>
                                        Delete
                                    </Button>
                                </Link>
                                <Link href='/editdevice'>
                                    <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'>
                                        Edit
                                    </Button>
                                </Link>
                                <Link href='/addevice'>
                                    <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'>
                                        Add
                                    </Button>
                                </Link>
                            </Stack>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Device</Th>
                                        <Th>ID Room</Th>
                                        <Th>Monitor</Th>
                                        <Th>Key Board</Th>
                                        <Th>Mouse</Th>
                                        <Th>PC Case</Th>
                                        <Th>Software Quantity</Th>
                                        <Th>Status</Th>
                                        <Th>Note</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Device.map((data, index) =>
                                        <Tr key={index}>
                                            <Td>{data['IDDevice']}</Td>
                                            <Td>{data['IDRoom']}</Td>
                                            <Td>{data['Monitor']}</Td>
                                            <Td>{data['Keyboard']}</Td>
                                            <Td>{data['Mouse']}</Td>
                                            <Td>{data['PCcase']}</Td>
                                            <Td>{data['QuantityOfSoftware']}</Td>
                                            <Td>{data['Status']}</Td>
                                            <Td>
                                                {data['Note']}
                                            </Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    <TabPanel>
                        <TableContainer>
                            <Center>
                                <Text fontSize='40px' as='b' color='Blue'>Assignment List</Text>
                            </Center>

                            <Stack direction='row-reverse' spacing={4}>
                                <Link href='/deleteassignment'>
                                    <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'>
                                        Delete
                                    </Button>
                                </Link>
                                <Link href='/editassignment'>
                                    <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'>
                                        Edit
                                    </Button>
                                </Link>
                                <Link href='/addassignment'>
                                    <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'>
                                        Add
                                    </Button>
                                </Link>
                            </Stack>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Assignment</Th>
                                        <Th>ID Login</Th>
                                        <Th>Date</Th>
                                        <Th>Shiftt Time</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Assignment.map((data, index) =>
                                        <Tr key={index}>
                                            <Td>{data['IDAssignment']}</Td>
                                            <Td>{data['IDLogin']}</Td>
                                            <Td>{data['DMY']}</Td>
                                            <Td>{data['ShiftTime']}</Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                </TabPanels>

            </Tabs>
        </>

    );
}