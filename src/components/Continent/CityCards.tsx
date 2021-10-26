import { Flex } from '@chakra-ui/react'

interface CityCardsProps {
  children: React.ReactNode
}

export function CityCards({ children }: CityCardsProps) {
  return (
    <Flex justify="center" mx={['0', '16']} mt={['6', '10']}>
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
