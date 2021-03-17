import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { GetStaticProps } from 'next'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners.map(banner => ({
        img: `http://localhost:1338${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        ...(banner.button && {
          buttonLabel: banner.button?.label,
          buttonLink: banner.button?.link
        }),
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGameTitle: sections?.newGames?.title,
      newGames: newGames.map(game => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1338${game.cover?.url}`,
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularGames: sections!.popularGames!.games.map(game => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1338${game.cover?.url}`,
        price: game.price
      })),
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1338${sections?.popularGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1338${sections?.popularGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink
      },
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map(game => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1338${game.cover?.url}`,
        price: game.price
      })),
      freeHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1338${sections?.freeGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1338${sections?.freeGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink
      },
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: upcomingGames.map(game => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1338${game.cover?.url}`,
        price: game.price
      })),
      upcomingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1338${sections?.upcomingGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1338${sections?.upcomingGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        alignment: sections?.upcomingGames?.highlight?.alignment
      }
    }
  }
}
