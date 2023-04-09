
import { Meta, StoryObj } from "@storybook/react";

import { Logo } from ".";

export default {
  title: 'Components/Atoms/Logo',
  component: Logo,
  decorators: [
    (Story) => {
     return ( 
     <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     }}>
        {Story()}
      </div> )
    }
  ],
} as Meta

export const Default : StoryObj = {}
