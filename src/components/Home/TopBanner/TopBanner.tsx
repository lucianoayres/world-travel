import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TopBannerProps {
  bgImageUrl: string
  children: ReactNode
}

export function TopBanner({ bgImageUrl, children }: TopBannerProps) {
  const isMobileVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      h={[225, 335]}
      bgImage={`url(${bgImageUrl})`}
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex
        width={1160}
        justify="space-between"
        align="center"
        mx={['4', '20']}
      >
        {children}
      </Flex>
    </Flex>
  )
}
