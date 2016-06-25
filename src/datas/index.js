import { normalize, Schema, arrayOf } from 'normalizr';


export const sidemenu = [
    {
        id: 0,
        title: 'Summary',
        children: [
            {
                title: 'Overview',
                to: '/summary'
            }
        ]
    },
    {
        id: 1,
        title: 'Inventory Management',
        children: [
            {
                title: 'Inventory',
                to: '/inventory'
            },
            {
                title: 'Modifier',
                to: '/modifier'
            },
            {
                title: 'Department',
                to: '/summary'
            }
        ]
    },
    {
        id: 2,
        title: 'Dummy 3',
        children: [
            {
                title: 'Dummy 3-1',
                to: '/inventory'
            },
            {
                title: 'Dummy 3-2',
                to: '/summary'
            },
            {
                title: 'Dummy 3-3',
                to: '/modifier'
            }
        ]
    }
];

const rawTypes = [
    {
        id: 0,
        label: 'Type 1'
    },
    {
        id: 1,
        label: 'Type 2'
    },
    {
        id: 2,
        label: 'Type 3'
    },
    {
        id: 3,
        label: 'Type 4'
    }
];

export const dicts = normalize({ type: rawTypes }, { type: arrayOf(new Schema('type')) });

export const table_01 = {
    fields: [
        {
            label: 'Title',
            key: 'title'
        },
        {
            label: 'Type',
            key: 'type',
            useId: true
        },
        {
            label: 'Discount',
            key: 'discount'
        }
    ],
    items: [
        {
            id: 0,
            title: 'Item 132',
            type: 0,
            discount: '$1'
        },
        {
            id: 2,
            title: 'Item 23231',
            type: 0,
            discount: '$2'
        },
        {
            id: 33,
            title: 'Item 44433',
            type: 1,
            discount: '$4'
        },
        {
            id: 69,
            title: 'Item 629',
            type: 2,
            discount: '$10'
        }
    ]
};

export const table_02 = {
    fields: [
        {
            label: 'Title',
            key: 'title'
        },
        {
            label: 'Type',
            key: 'type',
            useId: true
        },
        {
            label: 'Discount',
            key: 'discount'
        },
        {
            label: '4th',
            key: 'fourth'
        }
    ],
    items: [
        {
            id: 0,
            title: 'Item 155555',
            type: 2,
            discount: '$144',
            fourth: '???'
        },
        {
            id: 2,
            title: 'Item 212512',
            type: 2,
            discount: '$255',
            fourth: '!???'
        },
        {
            id: 33,
            title: 'Item 335212',
            type: 3,
            discount: '$4',
            fourth: '!!???'
        },
        {
            id: 69,
            title: 'Item 62139',
            type: 1,
            discount: '$10',
            fourth: '!!!!???'
        }
    ]
};

export const table_03 = {
    fields: [
        {
            label: 'Title',
            key: 'title'
        },
        {
            label: 'Type',
            key: 'type',
            useId: true
        },
        {
            label: 'Discount',
            key: 'discount'
        },
        {
            label: '4th',
            key: 'fourth'
        },
        {
            label: '5th',
            key: 'fifth'
        }
    ],
    items: [
        {
            id: 0,
            title: 'Item 1241251',
            type: 3,
            discount: '$1',
            fourth: '???',
            fifth: '???'
        },
        {
            id: 2,
            title: 'Item 235232',
            type: 3,
            discount: '$2',
            fourth: '!???',
            fifth: 'ad???'
        },
        {
            id: 33,
            title: 'Item 87933',
            type: 1,
            discount: '$4',
            fourth: '!!???',
            fifth: 'ss???'
        },
        {
            id: 69,
            title: 'Item 8869',
            type: 0,
            discount: '$10',
            fourth: '!!!!???',
            fifth: 'PP???'
        }
    ]
};