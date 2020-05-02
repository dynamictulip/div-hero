class AngleFire extends GamePiece {
    protected piece: JQuery<HTMLElement>;

    constructor(playAreaId: string, startingPositionLeft: number, startingPositionTop: number) {
        super();
        this.piece = $("<div class='angle-fire'>&gt;</div>").appendTo($("#" + playAreaId))

        this.piece.css("top", startingPositionTop);
        this.piece.css("left", startingPositionLeft);
    }

}