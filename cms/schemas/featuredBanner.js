export default {
    name: 'featuredBanner',
    title: 'Featured Banner',
    type: 'document',

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name:'subtitle',
            title: 'Subtitle',
            type: 'string',
        },

        {
            name:'title',
            title: 'Title',
            type: 'string',
        },

        {
            name:'text',
            title: 'Text',
            type: 'text',
        },

        {
            name:'buttonText',
            title: 'Button Text',
            type: 'string',
        },

        {
            name:'buttonFilled',
            title: 'Is the button filled?',
            type: 'boolean',
        },
    ]

}