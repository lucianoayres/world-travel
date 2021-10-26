import { Flex } from '@chakra-ui/react'

interface ContentContainerProprs {
  children: JSX.Element[]
}

export function ContentContainer({ children }: ContentContainerProprs) {
  return (
    <Flex justify="center" mt={['2', '90']} mx={['0', '16']}>
      <Flex
        width={1160}
        justify={['left', 'space-between']}
        wrap="wrap"
        px={['4', '0']}
      >
        <Flex
          justify="space-between"
          align="center"
          direction={['column', 'row']}
          p={[2, 0]}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
