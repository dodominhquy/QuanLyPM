import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/REACTJS_LYTHUYET/WebBanHang/Webbanhang/quanly/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function AddAssignment() {

    const [IDAssignment, setIDAssignment] = useState("");
    const [IDLogin, setIDLogin] = useState("");
    const [DMY, setDMY] = useState("");
    const [ShiftTime, setShiftTime] = useState("");
    const [CreatedAt, setCreatedAt] = useState("");
    const [UpdatedAt, setUpdatedAt] = useState("");

    const usenavigate = useNavigate();

    const postAssignment = async (e) => {
        e.preventDefault();


        if (validate()) {
            await axios.post(`${API}${APIName.Assignment}/AddAssignment`,
                {
                    "IDAssignment": `${IDAssignment}`,
                    "IDLogin": `${IDLogin}`,
                    "DMY": `${DMY}`,
                    "ShiftTime": `${ShiftTime}`,
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
        if (IDAssignment === '' || IDAssignment === null) {
            result = false;
            alert('Please Enter ID Assignment');
        }
        if (IDLogin === '' || IDLogin === null) {
            result = false;
            alert('Please Enter ID Login');
        }
        if (DMY === '' || DMY === null) {
            result = false;
            alert('Please Enter Day Month Year');
        }
        if (ShiftTime === '' || ShiftTime === null) {
            result = false;
            alert('Please Enter Shift Time');
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
            <form onSubmit={postAssignment}>
                <Center>
                    <Text fontSize='40px' as='b' color='Blue'>Add Assignment</Text>
                </Center>
                <br />
                <Center>
                    <Text fontSize='20px' marginRight={690} as='b'>ID Assignment</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Assignment' marginBottom='5' width='50%' onChange={(e) => setIDAssignment(e.target.value)} value={IDAssignment}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={750} as='b'>ID Login</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Login' marginBottom='5' width='50%' onChange={(e) => setIDLogin(e.target.value)} value={IDLogin}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={530} as='b'>Working Day(Year/Month/Day)</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Date' marginBottom='5' width='50%' onChange={(e) => setDMY(e.target.value)} value={DMY}/>
                </Center>

                <Center>
                    <Text fontSize='20px' marginRight={730} as='b'>Shift Time</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='Shift Time' marginBottom='9' width='50%' onChange={(e) => setShiftTime(e.target.value)} value={ShiftTime}/>
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
            </form>
        </>
    );
}