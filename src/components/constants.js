import {
    ContactsSharp, DesignServicesSharp,
    GroupSharp,
    HomeSharp,
    InfoSharp,
    LocalLaundryServiceSharp,
    MiscellaneousServicesSharp
} from "@mui/icons-material";

export const kNavItems = [
    {
        name: 'Home',
        icon: <HomeSharp/>,
        route: '/',
        columns: 1,

    },
    {
        name: 'Services',
        icon: <MiscellaneousServicesSharp/>,
        collapse: [
            {
                name: 'State Equipment',
                description: "Facility offers high quality",
                dropdown: true,
                collapse: [
                    {
                        name: "Cardio",
                        route: "/sections/page-sections/page-headers",
//                        component: <PageHeaders />,
                    },
                    {
                        name: "Strength Equipment",
                        route: "/sections/page-sections/features",
                        //                      component: <Features />,
                    },
                ],
            },
            {
                name: 'Group Classes',
                description: "Each Powerhouse facility offers high quality",
                dropdown: true,
                collapse: [
                    {
                        name: "Yoga",
                        route: "/sections/page-sections/page-headers",
//                        component: <PageHeaders />,
                    },
                    {
                        name: "Zumba",
                        route: "/sections/page-sections/features",
                        //                      component: <Features />,
                    }, {
                        name: "Circuit Training",
                        route: "/sections/page-sections/features",
                        //                      component: <Features />,
                    },
                ],
            }, {
                name: 'Personal Trainers',
                description: "Maximize your workout",
            },{
                name: '24/7 Access',
                description: "Workout when the time is right for you with 24/7 access.",
            }
        ],
    }, {
        name: 'About Me',
        icon: <InfoSharp/>,
        route: '/profile',

    },{
        name: 'Contacts',
        icon: <ContactsSharp/>,
        route: '/about',
    },
]
