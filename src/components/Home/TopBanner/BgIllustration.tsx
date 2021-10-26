import { Flex, Image, useMediaQuery } from '@chakra-ui/react'

interface BgIllustrationProps {
  description: string
  imageUrl: string
}

export function BgIllustration({ description, imageUrl }: BgIllustrationProps) {
  const [isScreenWidthLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  return (
    <Flex width={1160} mt={120} pos="absolute" align="rigth" justify="right">
      {!!isScreenWidthLargerThan1280 && (
        <Image src={imageUrl} alt={description} />
      )}
    </Flex>
  )
}
