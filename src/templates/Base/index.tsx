import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import { SectionFooter } from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </section>
)

export default Base
