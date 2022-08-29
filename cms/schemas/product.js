export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },

        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },

        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },

        {
            name: 'colors',
            title: 'Colors',
           type:'array',
           of: [
             {
               name:'color',
               title:'Color',
               type:'string'
             }
           ]
          },
        
        {
            name: 'desc',
            title: 'Description',
            type: 'text',
        },

        {
            name: 'productType',
            title: 'Product type (featured, rental or popular)',
            type: 'string',
        }
    ]
}