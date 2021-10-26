import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TopBannerProps {
  bgImageUrl: string
  children: ReactNode
}

export function TopBanner({ bgImageUrl, children }: TopBannerProps) {
  return (
    <Flex
      h={[150, 500]}
      bgImage={`url(${bgImageUrl})`}
      bgPos="0 60%"
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex
        width={1160}
        justify={['center', 'space-between']}
        align="center"
        mx={['4', '20']}
      >
        {children}
      </Flex>
    </Flex>
  )
}
