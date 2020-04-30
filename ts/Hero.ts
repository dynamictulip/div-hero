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
        switch (event.key) {
            case "ArrowDown": {
                let currentPosition = this.hero.offset();
                if (currentPosition)
                    this.hero.css("margin-top", currentPosition.top + 5);
                break;
            }
            case "ArrowUp": {
                let currentPosition = this.hero.offset();
                if (currentPosition)
                    this.hero.css("margin-top", currentPosition.top - 5);
                break;
            }
            case "ArrowLeft": {
                let currentPosition = this.hero.offset();
                if (currentPosition)
                    this.hero.css("margin-left", currentPosition.left - 5);
                break;
            }
            case "ArrowRight": {
                let currentPosition = this.hero.offset();
                if (currentPosition)
                    this.hero.css("margin-left", currentPosition.left + 5);
                break;
            }
        }
    }
}