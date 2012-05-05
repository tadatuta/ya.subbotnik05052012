BEM.DOM.decl('carousel',
{
    onSetMod: {
        'js': function() {
            this.__base();

            this._getImages(this.cycle);            
        },
    },
    _getImages: function(callback) {
        var _this = this;
        $.ajax({
            url: 'http://api-fotki.yandex.ru/api/recent/?format=json&limit=10',
            dataType: 'jsonp',
            success: function(data) {
                _this.elem('inner').html(
                    (data.entries.map(function(photo, idx) {
                        return '<div class="carousel__item">' +
                                   '<img src="' + photo.img.L.href + '">' +
                                '</div>';
                    })).join('')
                );
                _this.update();
                callback(_this);
            }
        });   
    }
}
);