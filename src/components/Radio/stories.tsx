import { Story, Meta } from '@storybook/react/types-6-0'
import Radio from '.'

export default {
  title: 'Radio',
  component: Radio,
  args: {
    title: 'React Avançado',
    description: 'Typescript, NextJS e Styled Components'
  }
} as Meta

export const Default: Story = () => <Radio />
