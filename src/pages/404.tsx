import { Container } from 'components/Container'
import Base from 'templates/Base'
import Empty from 'components/Empty'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Ops... this page does not exist. Go back to the store and enjoy our offers"
          hasLink
        />
      </Container>
    </Base>
  )
}
