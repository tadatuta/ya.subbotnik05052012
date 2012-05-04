({
    block: 'b-page',
    title: 'Carousel',
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
                    content: {
                        tag: 'div',
                        attrs: {
                            style: 'width: 300px; height: 300px; background: #ccc'
                        }
                    }
                },
                {
                    elem: 'item',
                    content: {
                        tag: 'div',
                        attrs: {
                            style: 'width: 300px; height: 300px; background: #333'
                        }
                    }
                }
            ]
        }
    ]
})
