import { ReactNode } from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            marginTop={"10px"}
            bg={useColorModeValue('#0f346c', 'gray.900')}
            color={useColorModeValue('white', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Safety Center</Link>
                        <Link href={'#'}>Community Guidelines</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link href={'#'}>Cookies Policy</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                    </Stack>

                    <Stack
                        display={"grid"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        align={'flex-start'}>
                        <ListHeader>Install App</ListHeader>
                        <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)",justifyItems:"center"}}>
                        <Image
                            cursor={"pointer"}
                            src='https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png'
                            ></Image>
                        <Image
                            cursor={"pointer"}
                            width={"150px"}
                            borderRadius={"5px"}
                            src='https://tse4.mm.bing.net/th?id=OIP.XA0MS-3g1rmABuzFkbYimgAAAA&pid=Api&P=0'
                        ></Image>
                        </div>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>If you are using a screen reader and are having problems using this website, please call 1-844-462-8299 for assistance.

</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}