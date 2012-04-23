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
            block: 'button',
            url: '',
            content : 'Link'
        },
        {
            block: 'button',
            type: 'submit',
            content : 'Submit'
        },
        {
            block: 'button',
            mods: { theme: 'primary' },
            content : 'Primary'
        },
        {
            block: 'button',
            mods: { theme: 'info' },
            content : 'Info'
        },
        {
            block: 'button',
            mods: { theme: 'success' },
            content : 'Success'
        },
        {
            block: 'button',
            mods: { theme: 'warning' },
            content : 'Warning'
        },
        {
            block: 'button',
            mods: { theme: 'danger' },
            content : 'Danger'
        },
        {
            block: 'button',
            mods: { theme: 'inverse' },
            content : 'Inverse'
        },
        {
            block: 'alert',
            mods: { type: 'block', visibility: 'hidden' },
            content: [
                {
                    elem: 'heading',
                    content: 'ололо'
                },
                'опа-па!'
            ]
        }
    ]
})
