import { Center, Input } from '@chakra-ui/react';
import { Text, Button, Stack, Spacer, Link } from '@chakra-ui/react';
import { EditIcon, CloseIcon } from '@chakra-ui/icons';

export default function EditRoom() {
    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Edit Assignment</Text>
            </Center>
            <br />
            <Center>
                <Text fontSize='20px' marginRight={690} as='b'>ID Assignment</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='ID Assignment' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={750} as='b'>ID Login</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='ID Login' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={780} as='b'>Date</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Date' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={730} as='b'>Shift Time</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Shift Time' marginBottom='9' width='50%' />
            </Center>

            <Center>
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='blue' rightIcon={<EditIcon />}>Edit</Button>
                    <Link href='/homepage'>
                        <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                    </Link>

                </Stack>
            </Center>

        </>
    );
}