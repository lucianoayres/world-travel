import { Box, StatGroup } from '@chakra-ui/react'

interface ContentStatsProps {
  children: React.ReactNode
}

export function ContentStats({ children }: ContentStatsProps) {
  return (
    <Box width={['100%', '55%']} m={[2, 0]}>
      <StatGroup>{children}</StatGroup>
    </Box>
  )
}
