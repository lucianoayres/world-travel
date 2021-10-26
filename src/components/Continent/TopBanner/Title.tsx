import { Box, Heading } from '@chakra-ui/react'

interface TitleProps {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <Box>
      <Heading
        fontSize={['3xl', '4xl']}
        color="white"
        fontWeight="semiBold"
        lineHeight="1.4"
        mt={['0', '20rem']}
      >
        {text}
      </Heading>
    </Box>
  )
}
