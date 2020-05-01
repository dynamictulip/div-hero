class Hero {
    private hero: JQuery<HTMLElement>;

    constructor(playAreaId: string) {
        this.hero = $("#" + playAreaId).add("div")
        this.hero.addClass("hero");

        this.addEventHandlers();


        //  $(document).
    }

    private addEventHandlers() {
        $(document).keydown(this.handleKeyDown);
    }


    private handleKeyDown = (event: JQuery.KeyDownEvent<Document, null, Document, Document>) => {
        let currentPosition = this.hero.offset();

        if (currentPosition)
            switch (event.key) {
                case "ArrowDown": {
                    this.hero.css("top", currentPosition.top);
                    break;
                }
                case "ArrowUp": {
                    this.hero.css("top", currentPosition.top - 10);
                    break;
                }
                case "ArrowLeft": {
                    this.hero.css("left", currentPosition.left - 10);
                    break;
                }
                case "ArrowRight": {
                    this.hero.css("left", currentPosition.left);
                    break;
                }
            }
    }
}