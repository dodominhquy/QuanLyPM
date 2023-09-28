import { Center, Input, Select } from '@chakra-ui/react';
import { Text, Button, Stack, Link, Textarea } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/REACTJS_LYTHUYET/WebBanHang/Webbanhang/quanly/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function AddDevice() {
    const [IDDevice, setIDDevice] = useState("");
    const [IDRoom, setIDRoom] = useState("");
    const [Monitor, setMonitor] = useState("");
    const [Keyboard, setKeyboard] = useState("");
    const [Mouse, setMouse] = useState("");
    const [PCcase, setPCcase] = useState("");
    const [QuantityOfSoftware, setQuantityOfSoftware] = useState("");
    const [Status, setStatus] = useState("");
    const [Note, setNote] = useState("");
    const [CreatedAt, setCreatedAt] = useState("");
    const [UpdatedAt, setUpdatedAt] = useState("");


    const usenavigate = useNavigate();


    const postDevice = async (e) => {
        e.preventDefault();


        if (validate()) {
            await axios.post(`${API}${APIName.Device}/AddDevice`,
                {
                    "IDDevice": `${IDDevice}`,
                    "IDRoom": `${IDRoom}`,
                    "Monitor": `${Monitor}`,
                    "Keyboard": `${Keyboard}`,
                    "Mouse": `${Mouse}`,
                    "PCcase": `${PCcase}`,
                    "QuantityOfSoftware": `${QuantityOfSoftware}`,
                    "Status": `${Status}`,
                    "Note": `${Note}`,
                    "CreatedAt": `${CreatedAt}`,
                    "UpdatedAt": `${UpdatedAt}`
                }
            )
                .then((response) => {
                    alert('Success');
                    console.log(response.data);
                    usenavigate('/homepage');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };


    const validate = () => {
        let result = true;
        if (IDDevice === '' || IDDevice === null) {
            result = false;
            alert('Please Enter ID Device');
        }
        if (IDRoom === '' || IDRoom === null) {
            result = false;
            alert('Please Enter ID Room');
        }
        if (Monitor === '' || Monitor === null) {
            result = false;
            alert('Please Enter Monitor');
        }
        if (Keyboard === '' || Keyboard === null) {
            result = false;
            alert('Please Enter Key board');
        }
        if (Mouse === '' || Mouse === null) {
            result = false;
            alert('Please Enter Mouse');
        }
        if (PCcase === '' || PCcase === null) {
            result = false;
            alert('Please Enter PC case');
        }
        if (QuantityOfSoftware === '' || QuantityOfSoftware === null) {
            result = false;
            alert('Please Enter Quantity Of Software');
        }
        if (Status === '' || Status === null) {
            result = false;
            alert('Please Enter Status');
        }
        if (Note === '' || Note === null) {
            result = false;
            alert('Please Enter Note');
        }
        if (CreatedAt === '' || CreatedAt === null) {
            result = false;
            alert('Please Enter Created At');
        }
        if (UpdatedAt === '' || UpdatedAt === null) {
            result = false;
            alert('Please Enter Updated At');
        }
        return result;
    }

    return (
        <>
            <form onSubmit={postDevice}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Add Device</Text>
                </Center>
                <br />
                <Center>
                    <Text fontSize='20px' marginRight={730} as='b'>ID Device</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Device' marginBottom='5' width='50%' onChange={(e) => setIDDevice(e.target.value)} value={IDDevice}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={735} as='b'>ID Room</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' onChange={(e) => setIDRoom(e.target.value)} value={IDRoom}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>Monitor</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Monitor' marginBottom='5' width='50%' onChange={(e) => setMonitor(e.target.value)} value={Monitor}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={722} as='b'>Key Board</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Key Board' marginBottom='9' width='50%' onChange={(e) => setKeyboard(e.target.value)} value={Keyboard}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={752} as='b'>Mouse</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Mouse' marginBottom='5' width='50%' onChange={(e) => setMouse(e.target.value)} value={Mouse}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={740} as='b'>PC Case</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='PC Case' marginBottom='5' width='50%' onChange={(e) => setPCcase(e.target.value)} value={PCcase}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={620} as='b'>Quantity of software</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Quantity of software' marginBottom='5' width='50%' onChange={(e) => setQuantityOfSoftware(e.target.value)} value={QuantityOfSoftware}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={755} as='b'>Status</Text>
                </Center>
                <Center>
                    <Select marginBottom='9' width='50%' variant='filled' onChange={(e) => setStatus(e.target.value)} value={Status}>
                        <option value='None'>None</option>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                    </Select>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={770} as='b'>Note</Text>
                </Center>
                <Center>
                    <Textarea variant='filled' placeholder='Note cannot be empty' marginBottom='9' width='50%' onChange={(e) => setNote(e.target.value)} value={Note}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={725} as='b'>Created At</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Created At' marginBottom='5' width='50%' onChange={(e) => setCreatedAt(e.target.value)} value={CreatedAt} />
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={710} as='b'>Updated At</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Updated At' marginBottom='9' width='50%' onChange={(e) => setUpdatedAt(e.target.value)} value={UpdatedAt} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<AddIcon />} type='submit'>Add</Button>
                        <Link href='/homepage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>
                    </Stack>
                </Center>
                <br />
            </form>
        </>
    );
}