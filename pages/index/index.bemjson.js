({
    block: 'b-page',
    title: 'Btn',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'index.js' }
    ],
    content: [
        {
            block: 'carousel',
            content : [
                {
                    elem: 'item',
                    content: 'bla1'
                },
                {
                    elem: 'item',
                    content: 'bla2'    
                }
            ]
        },
        {
            block: 'button'    
        }
    ]
})
