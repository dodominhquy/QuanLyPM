import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/REACTJS_LYTHUYET/WebBanHang/Webbanhang/quanly/src/service/apiconfig';
import { useNavigate } from 'react-router-dom';

export default function DeleteDevice() {

    const [IdDevice, setIDDevice] = useState("");
    const usenavigate = useNavigate();

    const deleteDevice = async () => {

        await axios.delete(`${API}${APIName.Device}/${IdDevice}`
        )
            .then((response) => {
                alert('Successful')
                console.log(response.data);
                usenavigate('/homepage');
            })
            .catch(function (error) {
                alert('Error')
                console.log(error);
            });

    };

    return (
        <>
            <form onSubmit={deleteDevice}>
            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Delete Device</Text>
            </Center>
            <br />

            <Center>
                <Text fontSize='20px' marginRight={730} as='b'>ID Device</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='ID Device' marginBottom='5' width='50%' onChange={(e) => setIDDevice(e.target.value)} value={IdDevice}/>
            </Center>


            <Center>
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='blue' rightIcon={<DeleteIcon />} type='submit'>Delete</Button>
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