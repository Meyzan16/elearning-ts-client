interface Option {
    id: string;
    label: string;
}

interface Props {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    componentType: string; 
    options? : Option[];
}

// interface Props {
//     id: string;
//     name: string;
//     email: string;
//     username: string;
//     personalGoal: PersonalGoal;
//     myoccupation: MyOccupation;
//     phone: number;
//     city: string
// }


export const UpdateUser: Props[] = [  
    {
        id: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        label: 'Name',
        componentType: 'input',
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        label: 'Email',
        componentType: 'input',
    },
    {
        id: 'username',
        type: 'text',
        placeholder: 'Enter your username',
        label: 'Username',
        componentType: 'input',
    },
    {
        id: 'personalgoal',
        type: '',
        placeholder: '',
        label: 'Personal Goal',
        componentType: 'select',
        options: [
            {
                id:'notfound',
                label: 'Pilih-Keahlian',
            },
            {
                id:'fs',
                label: 'Fullstack Developer',
            },
            {
                id:'be',
                label: 'Backend Developer',
            },
            {
                id:'fe',
                label: 'Frontend Developer',
            },
        ]
    },
]