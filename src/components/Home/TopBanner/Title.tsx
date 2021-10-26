import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

interface TitleProps {
  firstLineHeading: string
  secondLineHeading: string
  firstLineSubHeading: string
  secondLineSubHeading: string
}

export function Title({
  firstLineHeading,
  secondLineHeading,
  firstLineSubHeading,
  secondLineSubHeading
}: TitleProps) {
  const isMobileVersion = useBreakpointValue({ base: true, md: false })
  return (
    <Box>
      <Heading
        fontSize={['2xl', '4xl']}
        color="white"
        fontWeight="semiBold"
        lineHeight="1.4"
      >
        {firstLineHeading}
        <br />
        {secondLineHeading}
      </Heading>

      {isMobileVersion ? (
        <Text fontSize="sm" color="white">
          {`${firstLineSubHeading} ${secondLineSubHeading}`}
        </Text>
      ) : (
        <Text fontSize="xl" color="white">
          {firstLineSubHeading}
          <br /> {secondLineSubHeading}
        </Text>
      )}
    </Box>
  )
}
