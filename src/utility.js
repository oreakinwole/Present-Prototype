export const usersData = [
    {
        firstname: 'Damilola', lastname: 'Banji-Alabi', email: 'todamilor@gmail.com', password: 'damid509',
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
        title: 'Planned',
        details: [
            'Make Logo Design',
            'Implement signin feature to present app',
            'Push feature to github',
        ],
        isOpen: false,
    },
    {
        title: 'Tomorrow',
        details: [
            'Create Stripe account',
            'Register Present App on Google',
            'Commit recent changes to github',
        ],
        isOpen: false,
    },
    {
        title: 'Today',
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
        isOpen: false,
        addItem: false,
    },
    {
        title: 'Done',
        details: [
        ],
        isOpen: false,
        addItem: false,
    },
];
