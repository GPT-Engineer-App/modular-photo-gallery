import { Box, Flex, Heading, Image, SimpleGrid, Text, VStack, useBreakpointValue, Button } from "@chakra-ui/react";
import { FaCameraRetro, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  // Responsive columns for different breakpoints
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  // Sample images data for gallery
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzExMTc3NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080", alt: "Landscape" },
    { id: 2, src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGV8ZW58MHx8fHwxNzExMTc3NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080", alt: "Cityscape" },
    { id: 3, src: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzExMTc3NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080", alt: "Nature" },
    // Add more images as needed
  ];

  return (
    <Box>
      {/* Title Section */}
      <Flex direction="column" align="center" justify="center" py="6" bg="teal.500" color="white">
        <FaCameraRetro size="3rem" />
        <Heading as="h1" size="xl" mt="3">
          PhotoSite
        </Heading>
        <Text mt="2" fontSize="lg">
          Your daily dose of high-quality photography
        </Text>
      </Flex>

      {/* Search Bar */}
      <Flex my="6" px="6" py="3" maxW="lg" mx="auto" borderWidth="1px" borderRadius="lg" align="center" justify="space-between">
        <input type="text" placeholder="Search photos..." style={{ border: "none", flexGrow: 1, marginRight: "1rem" }} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" px="8">
          Search
        </Button>
      </Flex>

      {/* Gallery */}
      <SimpleGrid columns={columns} spacing="6" px="6" py="3">
        {galleryImages.map((image) => (
          <VStack key={image.id} spacing="3">
            <Image src={image.src} alt={image.alt} borderRadius="md" boxSize="100%" objectFit="cover" />
            <Flex align="center" justify="space-between" w="full">
              <Text fontSize="md" fontWeight="bold">
                {image.alt}
              </Text>
              <Button size="sm" colorScheme="pink" variant="ghost">
                <FaHeart />
              </Button>
            </Flex>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
