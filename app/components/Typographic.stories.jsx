import { Typographic } from './Typographic';
export default {
    title: 'Components/Typographic',
    component: Typographic,
    argTypes: {
        fontFamily: {
            control: {
                type: 'select',
                options: ['xl', 'md']
            }
        }
    }
}

export const Default = {

    render: (args) => {
        return <Typographic args />
    }
}