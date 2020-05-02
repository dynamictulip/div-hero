class AngleFire extends GamePiece {
    protected piece: JQuery<HTMLElement>;
    private intervalId: number;

    constructor(playAreaId: string, startingPositionLeft: number, startingPositionTop: number) {
        super();
        this.piece = $("<div class='angle-fire'>&gt;</div>").appendTo($("#" + playAreaId))

        this.piece.css("top", startingPositionTop);
        this.piece.css("left", startingPositionLeft);

        this.currentHorizontalSpeed = 5;

        this.intervalId = window.setInterval(this.movePiece, 10, this)
    }

    protected hitBoundary(boundary: Boundary): void {
        if (boundary == Boundary.TOP || boundary == Boundary.BOTTOM)
            return;

        clearInterval(this.intervalId);
        this.piece.remove();
    }
}