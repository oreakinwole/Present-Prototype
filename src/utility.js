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

export const getCurUserName = email => usersData.find(val => val.email === email);

export const todoData = [
    {
        title: 'Cooking Recipe',
        details: [
            'Cook Food',
            'Add Spice',
            'Make Ready',
        ],
    },
    {
        title: 'Make Friends',
        details: [
            'Approach',
            'Meet',
            'Hangout',
        ],
    },
];
