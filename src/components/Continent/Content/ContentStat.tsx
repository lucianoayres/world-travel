import { Stat, StatLabel, StatNumber, Tooltip } from '@chakra-ui/react'

import { InfoOutlineIcon } from '@chakra-ui/icons'

interface ContentStatProps {
  value: number
  label: string
  hasInfo?: boolean
  infoText?: string
}

export function ContentStat({
  value,
  label,
  hasInfo = false,
  infoText = ''
}: ContentStatProps) {
  const labelContent = (
    <StatLabel
      fontWeight="bold"
      fontSize={['sm', 'lg']}
      color="dark.Headings and Text"
    >
      {label}
    </StatLabel>
  )

  const labelContentWithInfo = (
    <StatLabel
      fontWeight="bold"
      fontSize={['sm', 'lg']}
      color="dark.Headings and Text"
    >
      {label}{' '}
      <Tooltip
        hasArrow
        label={infoText}
        bg="gray.300"
        color="black"
        fontSize="sm"
      >
        <InfoOutlineIcon w={[2, 4]} h={[2, 4]} color="gray.400" />
      </Tooltip>
    </StatLabel>
  )

  return (
    <Stat align="center">
      <StatNumber fontSize={['3xl', '5xl']} color="highlight.full">
        {value}
        {hasInfo ? labelContentWithInfo : labelContent}
      </StatNumber>
    </Stat>
  )
}
