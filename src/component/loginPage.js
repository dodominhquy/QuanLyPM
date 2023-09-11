import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import { Input, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button, InputGroup, InputRightElement } from '@chakra-ui/react';
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
            <Text fontSize='40px' color='Blue' as='b'>LOGIN</Text>

            <FormControl marginTop='5'>
              <FormLabel fontSize='20'>Username</FormLabel>
              <Input type='text' width='100%' height='100%' variant='filled' />
              <FormHelperText textAlign='left'>Username cannot be empty</FormHelperText>
            </FormControl>
            <br />
            <FormControl>
              <FormLabel fontSize='20'>Password</FormLabel>
              <Input type='password' width='100%' height='100%' variant='filled' />
              <FormHelperText textAlign='left'>Password cannot be empty</FormHelperText>
            </FormControl>
            <br />
            <Button colorScheme='blue' variant='solid' width='100%' >Button</Button>

          </GridItem>

        </Grid>

      </AspectRatio>

    </>

  );
}



