import { Story, Meta } from '@storybook/react/types-6-0'
import FormSignIn from '.'

export default {
  title: 'FormSignIn',
  component: FormSignIn,
  args: {
    title: 'React Avançado',
    description: 'Typescript, NextJS e Styled Components'
  }
} as Meta

export const Default: Story = () => <FormSignIn />
