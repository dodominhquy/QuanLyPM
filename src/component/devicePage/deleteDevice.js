import { Center, Input, Select } from '@chakra-ui/react';
import { Text, Button, Stack, Spacer, Link, Textarea } from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from '@chakra-ui/icons';

export default function DeleteDevice() {
    return (
        <>

            <Center>
                <Text fontSize='40px' as='b' color='Blue'>Delete Device</Text>
            </Center>
            <br />
            <Center>
                <Text fontSize='20px' marginRight={735} as='b'>ID Room</Text>
            </Center>

            <Center>
                <Input variant='filled' placeholder='ID Room' marginBottom='5' width='50%' />
            </Center>
            <Center>
                <Text fontSize='20px' marginRight={730} as='b'>ID Device</Text>
            </Center>

            <Center>
                <Input variant='filled' placeholder='ID Device' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={740} as='b'>Monitor</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Monitor' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={722} as='b'>Key Board</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Key Board' marginBottom='9' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={752} as='b'>Mouse</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Mouse' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={740} as='b'>PC Case</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='PC Case' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={620} as='b'>Quantity of software</Text>
            </Center>
            <Center>
                <Input variant='filled' placeholder='Quantity of software' marginBottom='5' width='50%' />
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={755} as='b'>Status</Text>
            </Center>
            <Center>
                <Select marginBottom='9' width='50%' variant='filled'>
                    <option value='option1'>Active</option>
                    <option value='option2'>Inactive</option>
                </Select>
            </Center>

            <Center>
                <Text fontSize='20px' marginRight={770} as='b'>Note</Text>
            </Center>
            <Center>
                <Textarea variant='filled' placeholder='Note cannot be empty' marginBottom='9' width='50%'/>
            </Center>

            <Center>
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='blue' rightIcon={<DeleteIcon />}>Add</Button>
                    <Link href='/homepage'>
                        <Button colorScheme='blue' rightIcon={<CloseIcon />}>Cancel</Button>
                    </Link>
                </Stack>
            </Center>
            <br />

        </>
    );
}