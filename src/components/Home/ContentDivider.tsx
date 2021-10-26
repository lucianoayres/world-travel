import { Center, Divider } from '@chakra-ui/react'
export function ContentDivider() {
  return (
    <Center mt={[10, 20]}>
      <Divider
        width={90}
        borderWidth={2}
        borderColor="dark.Headings and Text"
      />
    </Center>
  )
}
