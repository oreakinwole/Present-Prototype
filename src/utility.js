export const usersData = [
    {
        firstname: 'Ore', lastname: 'Akinwole', email: 'todamilor@gmail.com', password: 'damid509',
    },
    {
        firstname: 'Atlas', lastname: 'Admin', email: 'admin@atlascc.com.ng', password: 'atlas',
    },
];

export const storeCurUser = cUser => sessionStorage.setItem('presentAppCurrentUser', cUser);
export const retrieveCurUser = () => sessionStorage.getItem('presentAppCurrentUser');
export const removeCurUser = () => sessionStorage.removeItem('presentAppCurrentUser');

export const getCurUserName = email => usersData.find(val => val.email === email);

export const todoData = [
    {
        title: 'Todo',
        details: [
            'Make Logo Design',
            'Implement signin feature to present app',
            'Push feature to github',
        ],
        isOpen: false,
    },
    {
        title: 'Todo Tomorrow',
        details: [
            'Create Stripe account',
            'Register Present App on Google',
            'Commit recent changes to github',
        ],
        isOpen: false,
    },
    {
        title: 'Todo Today',
        details: [
            'Create Paystack account',
            'Do something here',
            'Commit recent changes unto Codacy',
        ],
        isOpen: true,
        addItem: false,
    },
    {
        title: 'Work In progress',
        details: [
            'Cache Files',
        ],
        isOpen: true,
        addItem: false,
    },
    {
        title: 'Done',
        details: [
        ],
        isOpen: true,
        addItem: false,
    },
];
