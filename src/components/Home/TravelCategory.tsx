import { Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react'

interface TravelCategory {
  title: string
  imageUrl: string
}

export function TravelCategory({ title, imageUrl }: TravelCategory) {
  const isMobileVersion = useBreakpointValue({ base: true, md: false })

  return (
    <VStack spacing="4" width={160} align="center">
      <Image src={imageUrl} alt="more" hidden={isMobileVersion} />

      <Text
        fontSize="2xl"
        fontWeight="semibold"
        color="dark.Headings and Text"
        textTransform="lowercase"
      >
        {title}
      </Text>
    </VStack>
  )
}
