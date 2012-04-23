BEM.DOM.decl('button', {
    onSetMod: {
        'js': function() {
            this.bindTo('click', function(){
                console.log(this.getMod('theme'));
            });
        }    
    }    
});
