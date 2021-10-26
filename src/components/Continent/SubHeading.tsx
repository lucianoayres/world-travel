import { Flex, Heading } from '@chakra-ui/react'

interface SubHeadingProps {
  heading: string
}

export function SubHeading({ heading }: SubHeadingProps) {
  return (
    <Flex justify="center" mt={['1', '90']} mx={['0', '16']}>
      <Flex width={1160} justify="space-between" wrap="wrap" px={['4', '0']}>
        <Heading
          fontSize={['2xl', '4xl']}
          color="dark.Headings and Text"
          fontWeight="semiBold"
        >
          {heading}
        </Heading>
      </Flex>
    </Flex>
  )
}
