import CardsList, { CardsListProps } from 'components/CardsList'
import Profile from 'templates/Profile'

import cardsMock from 'components/PaymentOptions/mock'

// import { Container } from './styles';

export default function ProfileCardsPage({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
