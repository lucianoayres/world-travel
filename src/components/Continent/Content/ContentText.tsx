import { Box, Heading } from '@chakra-ui/react'
interface ContentTextProps {
  children: string
}
export function ContentText({ children }: ContentTextProps) {
  return (
    <Box width={['100%', '55%']} m={[2, 0]}>
      <Heading
        fontSize={['sm', '2xl']}
        color="dark.Headings and Text"
        fontWeight="regular"
        textAlign="justify"
        lineHeight={['1.3rem', '2.2rem']}
      >
        {children}
      </Heading>
    </Box>
  )
}
