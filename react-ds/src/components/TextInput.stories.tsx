import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import {TextInput, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/Input',
    component: TextInput.Root,
    args:{
        children: [

            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,

            <TextInput.Input placeholder='joaroque@example.com'/>
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
    
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children:  (
            <TextInput.Input placeholder='joaroque@example.com' />
        )
    }
}

