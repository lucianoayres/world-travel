import type { InferGetStaticPropsType } from 'next'

import { Box } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'

import { server } from '../config'

import { CallToAction } from '../components/Home/CallToAction'
import { ContentDivider } from '../components/Home/ContentDivider'
import { Header } from '../components/Header'
import { Slides } from '../components/Home/Slides'
import { Slide } from '../components/Home/Slide'
import { TopBanner, Title, BgIllustration } from '../components/Home/TopBanner'
import { TravelCategories } from '../components/Home/TravelCategories'
import { TravelCategory } from '../components/Home/TravelCategory'

//TODO List:

// [  ] Create 'Continent' Pages with 'dynamic' pages in Next.js (getStaticPaths?)

function Home({
  categories,
  slides
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box py="6">
      <Header home />
      <TopBanner bgImageUrl="'/background.jpg'">
        <Title
          firstLineHeading="5 continentes,"
          secondLineHeading="infinitas possibilidades"
          firstLineSubHeading="Chegou a hora de tirar do papel a viagem que você"
          secondLineSubHeading="sempre sonhou."
        />
        <BgIllustration description="airplane" imageUrl="/airplane.svg" />
      </TopBanner>

      <TravelCategories>
        {categories.map(({ title, imageUrl }) => (
          <TravelCategory key={title} title={title} imageUrl={imageUrl} />
        ))}
      </TravelCategories>

      <ContentDivider />

      <CallToAction
        heading="Vamos nessa?"
        subheading="Então escolha seu continente"
      />

      <Slides>
        {slides.map(({ heading, subheading, imageUrl, link }) => (
          <SwiperSlide key={heading}>
            <Slide
              heading={heading}
              subheading={subheading}
              imageUrl={imageUrl}
              link={link}
            />
          </SwiperSlide>
        ))}
      </Slides>
    </Box>
  )
}

type Category = {
  title: string
  imageUrl: string
}

type Slide = {
  heading: string
  subheading: string
  imageUrl: string
  link: string
}

export const getStaticProps = async () => {
  const responseCategories = await fetch(`${server}/categories`)
  const categories: Category[] = await responseCategories.json()

  const responseSlides = await fetch(`${server}/slides`)
  const slides: Slide[] = await responseSlides.json()

  return {
    props: {
      categories,
      slides
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}

export default Home
