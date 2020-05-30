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
        title: 'Monday Todo',
        details: [
            'Make Logo Design',
            'Implement signin feature to present app',
            'Push feature to github',
        ],
    },
    {
        title: 'Tuesday Todo',
        details: [
            'Create Stripe account',
            'Register Present App on Google ad service',
            'Commit recent changes to github',
        ],
    },
];
