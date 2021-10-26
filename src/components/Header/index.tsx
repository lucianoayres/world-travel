import {
  Box,
  Center,
  Container,
  Button,
  Flex,
  Link,
  Spacer
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { Logo } from './Logo'

interface HeaderProps {
  home?: boolean
}

export function Header({ home = false }: HeaderProps) {
  const router = useRouter()
  return (
    <Center>
      <Flex
        width={1160}
        as="header"
        justify="space-between"
        align="center"
        pb={[3, 6]}
      >
        <Box _hover={{ cursor: 'pointer' }}>
          <ChevronLeftIcon
            as="button"
            w={[6, 8]}
            h={[6, 8]}
            color="dark.Headings and Text"
            visibility={router.pathname !== '/' ? 'visible' : 'hidden'}
            onClick={() => router.back()}
          />
        </Box>
        <Box>
          <Link href="/">
            <Logo />
          </Link>
        </Box>
        <Box>&nbsp;</Box>
      </Flex>
    </Center>
  )
}
