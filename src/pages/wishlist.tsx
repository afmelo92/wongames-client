// import { Container } from './styles';

import WishList, { WishlistTemplateProps } from 'templates/WishList'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishListPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
