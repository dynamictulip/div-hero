abstract class GamePiece {
    protected abstract piece: JQuery<HTMLElement>;
    protected currentVerticalSpeed: number = 0;
    protected currentHorizontalSpeed: number = 0;
    protected speed: number = 3;

    public updatePosition() {
        let currentPosition = this.piece.offset();
        if (currentPosition) {
            if (this.currentVerticalSpeed != 0)
                this.piece.css("top", currentPosition.top + this.currentVerticalSpeed);
            if (this.currentHorizontalSpeed != 0)
                this.piece.css("left", currentPosition.left + this.currentHorizontalSpeed);
        }
    }

    protected moveHero(givenGamePiece: GamePiece) {
        givenGamePiece.updatePosition();
    }

}