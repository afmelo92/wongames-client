import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: {
      type: 'string'
    },
    lineLeft: 'boolean',
    lineBottom: 'boolean'
  }
} as Meta

export const Default: Story<HeadingProps> = args => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}
