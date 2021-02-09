import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    title: 'React Avançado',
    description: 'Typescript, NextJS e Styled Components'
  }
} as Meta

export const Default: Story = () => <Menu />
