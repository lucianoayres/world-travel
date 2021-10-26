import { Center, Heading } from '@chakra-ui/react'

interface CallToActionProps {
  heading: string
  subheading: string
}

export function CallToAction({ heading, subheading }: CallToActionProps) {
  return (
    <Center mt={[8, 16]}>
      <Heading
        fontSize={['xl', '4xl']}
        color="dark.Headings and Text"
        fontWeight="semiBold"
        lineHeight="1.4"
        align="center"
      >
        {heading}
        <br />
        {subheading}
      </Heading>
    </Center>
  )
}
