import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Spacer, Link } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

export default function AddRoom() {
    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Add Room</Text>
            </Center>
            <br />
            <Center>
                <Text fontSize='20px' marginRight={745} as='b'>ID Room</Text>
            </Center>

            <Center>
                <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' />
            </Center>
            <Center>
                <Text fontSize='20px' marginRight={710} as='b'>Room Name</Text>
            </Center>

            <Center>
                <Input variant='filled' placeholder='Room Name' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={675} as='b'>Device Quantity</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Device Quantity' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={710} as='b'>Assignment</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Assignment' marginBottom='9' width='50%' />
            </Center>

            <Center>
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='blue' rightIcon={<AddIcon />}>Add</Button>
                    <Link href='/homepage'>
                        <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                    </Link>

                </Stack>
            </Center>

        </>
    );
}