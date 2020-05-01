class Hero {
    private hero: JQuery<HTMLElement>;

    constructor(playAreaId: string) {
        this.hero = $("#" + playAreaId).add("div")
        this.hero.addClass("hero");

        this.addEventHandlers();
    }

    private addEventHandlers() {
        $(document).keydown(this.handleKeyDown);
    }


    private handleKeyDown = (event: JQuery.KeyDownEvent<Document, null, Document, Document>) => {
        let currentPosition = this.hero.offset();

        if (currentPosition)
            switch (event.key) {
                case "ArrowDown": {
                    this.hero.css("margin-top", currentPosition.top + 5);
                    break;
                }
                case "ArrowUp": {
                    this.hero.css("margin-top", currentPosition.top - 5);
                    break;
                }
                case "ArrowLeft": {
                    this.hero.css("margin-left", currentPosition.left - 13);
                    break;
                }
                case "ArrowRight": {
                    this.hero.css("margin-left", currentPosition.left - 3);
                    break;
                }
            }
    }
}