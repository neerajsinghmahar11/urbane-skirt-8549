import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import {    useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function ProductDetails() {

    const Navigate=useNavigate();
    const [product, setProduct] = useState({});
    const { id } = useParams();
    // console.log(page);
    let Name=JSON.parse(localStorage.getItem("userName"));

    useEffect(() => {
        axios
            .get(`https://confused-bear-life-jacket.cyclic.app/products/${id}`)
            .then(({ data }) => {
                setProduct(data);
            })
            .catch((err) => console.log(err));
    }, [id])
    console.log(product);
    const { image, price, name } = product;
    
    const AddtoCart = async() => {
        if(!Name){
            Navigate("/signin");
        }else{
            alert("Added to Wistlist")
            try {
                let res = await fetch(`https://confused-bear-life-jacket.cyclic.app/cart`, {
                    method: "POST",
                    body: JSON.stringify(product),
                    headers: {
                        "content-type": "application/json"
                    }
                });
                
                let updatedData = await res.json();
                console.log(updatedData);
                
            } catch (error) {
                console.log(error);
            }
            
        }
        
      
    }
    return (
        <Container style={{ marginTop: "50px" }} maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={image}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            color={"#002cb5"}
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {name}
                        </Heading>
                        <Text
                            mt={"10px"}
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={700}
                            fontSize={'2xl'}>
                            {"Price ₹ "+price}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                {product.desc}
                            </Text>
                            <Text fontSize={'lg'}>
                                {product.details}
                            </Text>
                        </VStack>
                        <Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem><b>Nutrition</b></ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>PER SERVING</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem><b>Calories</b></ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>{product.calories} Cals</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                It Takes {product.time} Minutes To Cook
                            </Text>

                            
                        </Box>
                    </Stack>

                    <Button
                        onClick={AddtoCart}
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('#f26226', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Add to Wishlist
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>24/7 delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}