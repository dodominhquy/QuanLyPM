import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Link } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API, APIName } from '/REACTJS_LYTHUYET/WebBanHang/Webbanhang/quanly/src/service/apiconfig';

export default function EditFindRoom() {

    const [IdRoom, setIdRoom] = useState("");
    const usenavigate = useNavigate();

    const localStorage = window.localStorage;

  localStorage.setItem('IdRoom', JSON.stringify(IdRoom));

    const getIdRoom = async () => {

        await axios.get(`${API}${APIName.Room}/getid/${IdRoom}`,
        {
            "IdRoom": `${IdRoom}`
        }
        )
            .then((response) => {
                alert('Successful')
                console.log(response.data);
                window.onload = function () {
                    if (localStorage) {
                      document.getElementById('contactForm').addEventListener('submit', function () {
                        var Username = document.getElementById('IdRoom').value;
                        localStorage.setItem('IdRoom', Username);
                      });
                    }
                  }
                usenavigate('/editroom');
            })
            .catch(function (error) {
                alert('Error')
                console.log(error);
            });

    };

    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Find Room to Edit</Text>
            </Center>
            <br />
            <form onSubmit={getIdRoom}>
                <Center>
                    <Text fontSize='20px' marginRight={745} as='b'>ID Room</Text>
                </Center>
                <Center>
                    <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' onChange={(e) => setIdRoom(e.target.value)} value={IdRoom} />
                </Center>

                <Center>
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='blue' rightIcon={<DeleteIcon />} type='submit'>Delete</Button>
                        <Link href='/roompage'>
                            <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                        </Link>

                    </Stack>
                </Center>
            </form>

        </>
    );
}