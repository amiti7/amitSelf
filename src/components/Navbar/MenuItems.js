export const MenuItems = [
    {
        title:'Home',
        url: '/',
        cName: 'nav-links',
    },
    {
        title:'About',
        url: '/about',
        cName: 'nav-links',
    },
    {
        title:'Work',
        url: '/work',
        cName: 'nav-links',
    },
    {
        title:'Projects',
        url: '/projects',
        cName: 'nav-links',
        className: 'fas fa-caret-down',
        dropDown: [
            {
                title:'Data Structures',
                path: '/dataStructures',
                cName: 'dropdown-link'
            },
            {
                title:'Algorithms',
                path: '/algo',
                cName: 'dropdown-link'
            },
            {
                title:'Machine Learning',
                path: '/machineLearning',
                cName: 'dropdown-link'
            },
            {
                title:'Miscellaneous',
                path: '/miscellaneous',
                cName: 'dropdown-link'
            }
        ]
    },
    {
        title:'Connect',
        url: '/connect',
        cName: 'nav-links',
    },

]