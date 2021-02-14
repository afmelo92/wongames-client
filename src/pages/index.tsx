import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const Index = (props: HomeTemplateProps) => {
  return <Home {...props} />
}

export default Index

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
      mostPopularGames: gamesMock,
      mostPopularHighlight: highlightMock,
      newGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock
    }
  }
}
