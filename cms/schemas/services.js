export default {
    name: 'services',
    title: 'Services',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },

        {
            name: 'desc',
            title: 'Description',
            type: 'string'
        },

        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]

}