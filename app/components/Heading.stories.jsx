import {Heading} from "./Heading";

export default {
    component: Heading,
    argTypes: {
        level: {
            control: 'radio'
        }
    },
};
export const Default = {
    render: (args) => <Heading {...args}/>
};

export const H2 = {
    render: (args) => <Heading {...args}/>
};
H2.args = {
    level: 2,
    className: 'font-lato font-bold text-6xl text-black'
};

