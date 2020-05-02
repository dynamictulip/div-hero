class Hero extends GamePiece {
    protected piece: JQuery<HTMLElement>;
    private playAreaId: string;

    public constructor(playAreaId: string) {
        super();

        this.playAreaId = playAreaId;

        this.piece = $("<div class='hero'>&lt;div&gt;</div>").appendTo($("#" + this.playAreaId));

        this.addMotionSensors();

        window.setInterval(this.movePiece, 10, this);
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
                this.currentHorizontalSpeed = -this.speed;
                break;
            }
            case "ArrowRight": {
                this.currentHorizontalSpeed = this.speed;
                break;
            }
            case "0": {
                this.shoot();
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
                this.currentHorizontalSpeed = 0;
                break;
            }
        }
    }

    private shoot() {
        let currentPosition = this.piece.offset();
        let width = this.piece.width();

        if (currentPosition && width)
            var shot = new AngleFire(this.playAreaId, currentPosition.left + width, currentPosition.top);
    }

    protected hitBoundary(boundary: Boundary): void {
        switch (boundary) {
            case Boundary.TOP: {
                if (this.currentVerticalSpeed < 0)
                    this.currentVerticalSpeed = 0;
                break;
            }
            case Boundary.LEFT: {
                if (this.currentHorizontalSpeed < 0)
                    this.currentHorizontalSpeed = 0;
                break;
            }
            case Boundary.RIGHT: {
                if (this.currentHorizontalSpeed > 0)
                    this.currentHorizontalSpeed = 0;
                break;
            }
            case Boundary.BOTTOM: {
                if (this.currentVerticalSpeed > 0)
                    this.currentVerticalSpeed = 0;
                break;
            }
        }
    }
}