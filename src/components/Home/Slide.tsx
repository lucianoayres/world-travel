import { Flex, Image, Link, Text, VStack } from '@chakra-ui/react'

interface SlideItemProps {
  heading: string
  subheading: string
  imageUrl: string
  link: string
}

export function Slide({ heading, subheading, imageUrl, link }: SlideItemProps) {
  return (
    <>
      <Image
        filter="brightness(0.6)"
        w="100vw"
        h="80vh"
        src={imageUrl}
        alt="image"
      />
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        pos="absolute"
      >
        <Link _hover={{ filter: 'brightness(0.8)' }} href={link}>
          <VStack spacing={0}>
            <Text
              textAlign="center"
              fontSize={['2xl', '5xl']}
              color="white"
              fontWeight="700"
            >
              {heading}
            </Text>
            <Text
              textAlign="center"
              fontSize={['1rem', '1.6rem']}
              color="white"
              fontWeight="semibold"
            >
              {subheading}
            </Text>
          </VStack>
        </Link>
      </Flex>
    </>
  )
}
