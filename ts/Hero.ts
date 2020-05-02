class Hero extends GamePiece {

    protected piece: JQuery<HTMLElement>;

    public constructor(playAreaId: string) {
        super();
        this.piece = $("<div class='hero'>&lt;div&gt;</div>").appendTo($("#" + playAreaId));

        this.addMotionSensors();

        window.setInterval(this.moveHero, 10, this)
    }

    private addMotionSensors() {
        $(document).keydown(this.handleKeyDown);
        $(document).keyup(this.handleKeyUp);
    }

    private handleKeyDown = (event: JQuery.KeyDownEvent<Document, null, Document, Document>) => {
        switch (event.key) {
            case "ArrowDown": {
                this.currentVerticalSpeed = this.speed;
                break;
            }
            case "ArrowUp": {
                this.currentVerticalSpeed = -this.speed;
                break;
            }
            case "ArrowLeft": {
                this.currentHorizontalSpeed = -this.speed
                break;
            }
            case "ArrowRight": {
                this.currentHorizontalSpeed = this.speed
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