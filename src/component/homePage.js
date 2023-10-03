import { Heading, Stack, Text } from '@chakra-ui/react';
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
import { Link, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API, APIName } from '../service/apiconfig';

export default function HomePage() {
    const [Room, setRoom] = useState([]);
    const [Assignment, setAssignment] = useState([]);
    const [Device, setDevice] = useState([]);
    const [DeviceCompoment, setDeviceCompoment] = useState([]);

    const storedData = localStorage.getItem("Username");
    const toast = useToast();

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

    const getDeviceCompoment = async () => {

        await axios.get(`${API}${APIName.DeviceCompoment}/GetDeviceCompoment`
        )
            .then((response) => {
                console.log(response.data);
                setDeviceCompoment(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    };


    useEffect(() => {
        // getLogin();
        getRoom();
        getAssignment();
        getDevice();
        getDeviceCompoment();
    }, [])


    return (
        <>

            <Tabs variant='unstyled'>
                <TabList>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}><Text fontSize='20px' as='b'>Room</Text></Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}><Text fontSize='20px' as='b'>Device</Text></Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}><Text fontSize='20px' as='b'>Component Device</Text></Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}><Text fontSize='20px' as='b'>Assignment</Text></Tab>


                    <Stack direction='row-reverse' spacing={4}>
                        <Link href='/' marginStart={10} marginTop={5} marginBottom={5}>
                            <Button fontSize='20px' as='b' colorScheme='blue'
                                onClick={() =>
                                    toast({
                                        title: 'Loading',
                                        status: 'loading',
                                        duration: 500,
                                        isClosable: true,
                                    })
                                }>Log Out</Button>
                        </Link>
                        <Heading marginStart={800} marginTop={5} marginBottom={5}>
                            <Text colorScheme='blue' color='blue'>{JSON.parse(storedData)}</Text>
                        </Heading>
                    </Stack>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Center>
                            <Text fontSize='40px' as='b' color='Blue'>Room List</Text>
                        </Center>

                        <Stack direction='row-reverse' spacing={4}>
                            <Link href='/deleteroom'>
                                <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Delete
                                </Button>
                            </Link>

                            <Link href='/editroom' >
                                <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Edit
                                </Button>
                            </Link>

                            <Link href='/addroom'>
                                <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Add
                                </Button>
                            </Link>

                        </Stack>
                        <TableContainer>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Room</Th>
                                        <Th>Room Name</Th>
                                        <Th>Location</Th>
                                        <Th>Subject</Th>
                                        <Th>Device Quantity</Th>
                                        <Th>Id Assignment</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                    {Room.map((data, index) =>
                                        <Tr key={index}>
                                            <Td>{data['IDRoom']}</Td>
                                            <Td>{data['RoomName']}</Td>
                                            <Td>{data['Location']}</Td>
                                            <Td>{data['Subject']}</Td>
                                            <Td><Center>{data['DeviceQuantity']}</Center></Td>
                                            <Td><Center>{data['IDAssignment']}</Center></Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    <TabPanel>
                        <Center>
                            <Text fontSize='40px' as='b' color='Blue'>Device List</Text>
                        </Center>

                        <Stack direction='row-reverse' spacing={4}>
                            <Link href='/deletedevice'>
                                <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Delete
                                </Button>
                            </Link>

                            <Link href='/editdevice' >
                                <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Edit
                                </Button>
                            </Link>

                            <Link href='/adddevice'>
                                <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Add
                                </Button>
                            </Link>

                        </Stack>

                        <TableContainer>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Device</Th>
                                        <Th>ID Room</Th>
                                        <Th>PC Code</Th>
                                        <Th>Number Of Computer Components</Th>
                                        <Th>Quantity Of Software</Th>
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
                                            <Td>{data['PCCODE']}</Td>
                                            <Td>{data['NumberOfComputerComponents']}</Td>
                                            <Td><Center>{data['QuantityOfSoftware']}</Center></Td>
                                            <Td>{data['Status']}</Td>
                                            <Td>{data['Note']}</Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    <TabPanel>

                        <Center>
                            <Text fontSize='40px' as='b' color='Blue'>Component Device List</Text>
                        </Center>

                        <Stack direction='row-reverse' spacing={4}>
                            <Link href='/deletedevicecomponent'>
                                <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Delete
                                </Button>
                            </Link>

                            <Link href='/editdevicecomponent' >
                                <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Edit
                                </Button>
                            </Link>

                            <Link href='/adddevicecomponent'>
                                <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Add
                                </Button>
                            </Link>

                        </Stack>

                        <TableContainer>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Device Component</Th>
                                        <Th>ID Device</Th>
                                        <Th>PC Code</Th>
                                        <Th>Device Component Name</Th>
                                        <Th>Status</Th>
                                        <Th>Note</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                    {DeviceCompoment.map((data, index) =>
                                        <Tr key={index}>
                                            <Td>{data['IDDEVICEComponent']}</Td>
                                            <Td>{data['IDDevice']}</Td>
                                            <Td>{data['PCCODE']}</Td>
                                            <Td>{data['DEVICEComponentName']}</Td>
                                            <Td>{data['Status']}</Td>
                                            <Td>{data['Note']}</Td>
                                            <Td>{data['CreatedAt']}</Td>
                                            <Td>{data['UpdatedAt']}</Td>
                                        </Tr>
                                    )}

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>

                    <TabPanel>

                        <Center>
                            <Text fontSize='40px' as='b' color='Blue'>Assignment List</Text>
                        </Center>

                        <Stack direction='row-reverse' spacing={4}>
                            <Link href='/deleteassignment'>
                                <Button rightIcon={<DeleteIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Delete
                                </Button>
                            </Link>

                            <Link href='/editassignment'>
                                <Button rightIcon={<EditIcon />} colorScheme='blue' variant='outline'
                                    onClick={() =>
                                        toast({
                                            title: 'Loading',
                                            status: 'loading',
                                            duration: 500,
                                            isClosable: true,
                                        })
                                    }>
                                    Edit
                                </Button>
                            </Link>

                            <Link href='/addassignment'>
                                <Button rightIcon={<AddIcon />} colorScheme='blue' variant='outline' onClick={() =>
                                    toast({
                                        title: 'Loading',
                                        status: 'loading',
                                        duration: 800,
                                        isClosable: true,
                                    })
                                }>
                                    Add
                                </Button>
                            </Link>
                        </Stack>

                        <TableContainer>

                            <br />
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID Assignment</Th>
                                        <Th>ID Login</Th>
                                        <Th>Lecturers</Th>
                                        <Th>Subject</Th>
                                        <Th>Year/Mouth/Day Work</Th>
                                        <Th>Shiftt Time</Th>
                                        <Th>Created At</Th>
                                        <Th>Updated At</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Assignment.map((data, index) =>
                                        <Tr key={index}>
                                            <Td><Center>{data['IDAssignment']}</Center></Td>
                                            <Td><Center>{data['IDLogin']}</Center></Td>
                                            <Td>{data['Lecturers']}</Td>
                                            <Td>{data['Subject']}</Td>
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