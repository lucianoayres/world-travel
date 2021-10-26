import { Flex } from '@chakra-ui/react'

interface TravelCategoriesProps {
  children: React.ReactNode
}

export function TravelCategories({ children }: TravelCategoriesProps) {
  return (
    <Flex justify="center" mt={['6', '100']} mx={['0', '16']}>
      <Flex
        width={1160}
        justify={['center', 'space-between']}
        wrap="wrap"
        px={['4', '0']}
      >
        {children}
      </Flex>
    </Flex>
  )
}
