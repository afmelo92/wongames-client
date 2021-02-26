import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'white' | 'black'
}

const Showcase = ({ title, highlight, games, color }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
