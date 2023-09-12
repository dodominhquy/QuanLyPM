import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { LockIcon, AddIcon, InfoIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import { Input, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button, InputGroup, InputRightElement, InputLeftElement } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Box, ButtonGroup } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';

export default function LoginPage() {

  return (
    <>
      <AspectRatio ratio={10 / 5}>
        <Grid
          templateAreas={`"nav main"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='200px'
          gap='1'
          bgColor='white'
          color='blackAlpha.700'
          fontWeight='bold'
          width='100%'
          height='100%'
        >

          <GridItem pl='2' bg='white' area={'nav'} width='100%' height='100%'>
            <Image src='wel.jpg' width='100%' height='100%' />
          </GridItem>

          <GridItem pl='50' area={'main'} width='100%' height='100%' bgColor='white.700' textAlign='center'>
            <br />
            <br />
            <br />
            <br />
            <Text fontSize='40px' color='Blue' as='b'>LOGIN</Text>

            <FormControl marginTop='75'>
              <Center marginRight={290}>
                <FormLabel fontSize='20'>Username</FormLabel>
              </Center>
              <InputGroup marginLeft={190}>
                <InputLeftElement pointerEvents='none'>
                  <InfoIcon color='gray.300' />
                </InputLeftElement>
                <Input type='text' width='50%' variant='filled' placeholder='Username'/>
              </InputGroup>
            </FormControl>
            <br />
            <FormControl>
              <Center marginRight={290}>
                <FormLabel fontSize='20'>Password</FormLabel>
              </Center>
              <InputGroup marginLeft={190}>
                <InputLeftElement pointerEvents='none'>
                  <LockIcon color='gray.300' />
                </InputLeftElement>
                <Input type='password' width='50%' variant='filled' placeholder='Password' />
              </InputGroup>
            </FormControl>
            <br />
            <Button colorScheme='blue' variant='solid' width='20%' >Button</Button>

          </GridItem>

          {/* <GridItem pl='2' bg='blue.300' area={'footer'}>
            Footer
          </GridItem> */}

        </Grid>

      </AspectRatio>

    </>

  );
}



