import { Box, Flex } from '@chakra-ui/react'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

import { Slide } from './Slide'

interface Slide {
  heading: string
  subheading: string
  imageUrl: string
  link: string
}

interface SlidesProps {
  slides?: Slide[]
  children: React.ReactNode
}

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export function Slides({ children }: SlidesProps) {
  return (
    <Box mt={['4', '10']}>
      <Flex
        mx="auto"
        my="auto"
        w={['100vw', '80vw']}
        mb={['1rem', '2.5rem']}
        h={450}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </Flex>
    </Box>
  )
}
