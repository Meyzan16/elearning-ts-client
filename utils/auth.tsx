interface Props {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    componentType: string; 
}

export const loginFormControls: Props[] = [  
    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        label: 'Email',
        componentType: 'input',
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your password',
        label: 'Password',
        componentType: 'input',
    },
];

export const RegisterFormControls: Props[] = [  
    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        label: 'Email',
        componentType: 'input'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your password',
        label: 'Password',
        componentType: 'input'
    },
    {
        id: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        label: 'Name',
        componentType: 'input'
    },
];