import { Box } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { CityCards } from '../components/Continent/CityCards'
import { CityCard } from '../components/Continent/CityCard'
import {
  ContentContainer,
  ContentText,
  ContentStats,
  ContentStat
} from '../components/Continent/Content'
import { SubHeading } from '../components/Continent/SubHeading'
import { Title, TopBanner } from '../components/Continent/TopBanner'
import { Header } from '../components/Header'
import { server } from '../config'

type Stat = {
  value: number
  label: string
  infoText?: string
}

type City = {
  name: string
  country: string
  imageUrl: string
  countryImageUrl: string
}

type Continent = {
  name: string
  slug: string
  bgImageUrl: string
  description: string
  stats: Stat[]
  cities: City[]
}

interface ContinentPageProps {
  continent: Continent
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  const { name, bgImageUrl, description, stats, cities } = continent
  return (
    <Box py={['3', '6']}>
      <Header />

      <TopBanner bgImageUrl={bgImageUrl}>
        <Title text={name} />
      </TopBanner>

      <ContentContainer>
        <ContentText>{description}</ContentText>

        <ContentStats>
          {stats.map(({ value, label, infoText }) => (
            <ContentStat
              key={value}
              value={value}
              label={label}
              hasInfo={!!infoText}
              infoText={infoText!}
            />
          ))}
        </ContentStats>
      </ContentContainer>

      <SubHeading heading="Cidades +100" />

      <CityCards>
        {cities.map(({ imageUrl, name, country, countryImageUrl }) => (
          <CityCard
            key={name}
            imageUrl={imageUrl}
            name={name}
            country={country}
            countryImageUrl={countryImageUrl}
          />
        ))}
      </CityCards>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const responseContinents = await fetch(`${server}/continents`)
  const continents = await responseContinents.json()

  const paths = continents.map((continent: Continent) => ({
    params: { slug: continent.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const responsePage = await fetch(`${server}/continents?slug=${slug}`)
  const [continent] = await responsePage.json()

  return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
