"use strict";
var Hero = /** @class */ (function () {
    function Hero(playAreaId) {
        var _this = this;
        this.handleKeyDown = function (event) {
            switch (event.key) {
                case "ArrowDown": {
                    var currentPosition = _this.hero.offset();
                    if (currentPosition)
                        _this.hero.css("margin-top", currentPosition.top + 5);
                    break;
                }
                case "ArrowUp": {
                    var currentPosition = _this.hero.offset();
                    if (currentPosition)
                        _this.hero.css("margin-top", currentPosition.top - 5);
                    break;
                }
                case "ArrowLeft": {
                    var currentPosition = _this.hero.offset();
                    if (currentPosition)
                        _this.hero.css("margin-left", currentPosition.left - 5);
                    break;
                }
                case "ArrowRight": {
                    var currentPosition = _this.hero.offset();
                    if (currentPosition)
                        _this.hero.css("margin-left", currentPosition.left + 5);
                    break;
                }
            }
        };
        this.hero = $("#" + playAreaId).add("div");
        this.hero.addClass("hero");
        this.addEventHandlers();
    }
    Hero.prototype.addEventHandlers = function () {
        $(document).keydown(this.handleKeyDown);
    };
    return Hero;
}());
