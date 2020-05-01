class Hero {
    private hero: JQuery<HTMLElement>;
    private currentVerticalSpeed: number = 0;
    private currentHorizontalSpeed: number = 0;

    constructor(playAreaId: string) {
        this.hero = $("#" + playAreaId).add("div")
        this.hero.addClass("hero");

        this.addEventHandlers();

        window.setInterval(this.moveHero, 20, this)
    }

    private addEventHandlers() {
        $(document).keydown(this.handleKeyDown);
        $(document).keyup(this.handleKeyUp);
    }

    public updatePosition() {
        let currentPosition = this.hero.offset();
        const correction = -5;

        if (currentPosition) {
            if (this.currentVerticalSpeed != 0)
                this.hero.css("top", currentPosition.top + this.currentVerticalSpeed + correction);
            if (this.currentHorizontalSpeed != 0)
                this.hero.css("left", currentPosition.left + this.currentHorizontalSpeed + correction);
        }
    }

    private moveHero(givenHero: Hero) {
        givenHero.updatePosition();
    }

    private handleKeyDown = (event: JQuery.KeyDownEvent<Document, null, Document, Document>) => {
        let currentPosition = this.hero.offset();

        if (currentPosition)
            switch (event.key) {
                case "ArrowDown": {
                    this.currentVerticalSpeed = 3;
                    break;
                }
                case "ArrowUp": {
                    this.currentVerticalSpeed = -3;
                    break;
                }
                case "ArrowLeft": {
                    this.currentHorizontalSpeed = -3
                    break;
                }
                case "ArrowRight": {
                    this.currentHorizontalSpeed = 3
                    break;
                }
            }
    }

    private handleKeyUp = (event: JQuery.KeyUpEvent<Document, null, Document, Document>) => {
        switch (event.key) {
            case "ArrowDown":
            case "ArrowUp": {
                this.currentVerticalSpeed = 0;
                break;
            }
            case "ArrowLeft":
            case "ArrowRight": {
                this.currentHorizontalSpeed = 0
                break;
            }
        }
    }
}