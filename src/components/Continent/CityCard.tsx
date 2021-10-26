import { Box, Flex, Image, VStack } from '@chakra-ui/react'

interface CityCardProps {
  imageUrl: string
  name: string
  country: string
  countryImageUrl: string
}

export function CityCard({
  imageUrl,
  name,
  country,
  countryImageUrl
}: CityCardProps) {
  return (
    <Box
      maxW="256"
      borderWidth="1px"
      borderColor="highlight.half"
      borderRadius="lg"
      overflow="hidden"
      mb={['6', '10']}
    >
      <Image src={imageUrl} alt={name} />

      <Box p="6">
        <Flex justify="space-between">
          <VStack align="left">
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {name}
            </Box>

            <Box color="dark.info">{country}</Box>
          </VStack>

          <Image src={countryImageUrl} alt={country} w={30} h={30} />
        </Flex>
      </Box>
    </Box>
  )
}
