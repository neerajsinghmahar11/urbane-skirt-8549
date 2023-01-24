import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    chakra,
    Tooltip,
} from '@chakra-ui/react';
// import { useState } from 'react';
// import ProductDetails from '././Routes/ProductDetails';
//   import axios from 'axios';
import { NavLink } from 'react-router-dom';
function Cards(data) {

    


    return (
            <NavLink  to={`/product/${data.id}`}>

                <Box
                    style={{width:"fit-content"}}
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">
                    {data && (
                        <Circle
                            size="10px"
                            position="absolute"
                            top={2}
                            right={2}
                            bg="red.200"
                        />
                    )}

                    <Image
                        style={{height:"300px",width:"100%"}}
                        src={data.image}
                        alt={`Picture of ${data.name}`}
                        roundedTop="lg"
                    />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            {data && (
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                height={"40px"}
                                width={"90%"}
                                overflow={"hidden"}
                                lineHeight="tight"
                                isTruncated>
                                {data.name}
                            </Box>
                            <Tooltip
                                label="Add to cart"
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                </chakra.a>
                            </Tooltip>
                        </Flex>

                        <Flex justifyContent="space-between" alignContent="center">
                            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                                <Box style={{ fontWeight: 500, fontSize: "25px" }} as="span" color={'gray.600'} fontSize="lg">
                                    ₹
                                </Box>
                                {" " + data.price}
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </NavLink>
    );
}

export default Cards;



