abstract class GamePiece {
    protected abstract piece: JQuery<HTMLElement>;
    protected currentVerticalSpeed: number = 0;
    protected currentHorizontalSpeed: number = 0;
    protected speed: number = 3;

    public updatePosition() {
        let currentPosition = this.piece.position();
        let parent = this.piece.parent();

        const width = this.piece.width();
        const height = this.piece.height();

        const parentWidth = parent.width();
        const parentHeight = parent.height();
        if (currentPosition && width && height && parentWidth && parentHeight) {
            if (currentPosition.left < 0)
                this.hitBoundary(Boundary.LEFT);
            if (currentPosition.left > (parentWidth - width))
                this.hitBoundary(Boundary.RIGHT);
            if (currentPosition.top < 0)
                this.hitBoundary(Boundary.TOP);
            if (currentPosition.top > (parentHeight - height))
                this.hitBoundary(Boundary.BOTTOM);

            if (this.currentVerticalSpeed != 0)
                this.piece.css("top", currentPosition.top + this.currentVerticalSpeed);
            if (this.currentHorizontalSpeed != 0)
                this.piece.css("left", currentPosition.left + this.currentHorizontalSpeed);
        }
    }

    protected abstract hitBoundary(boundary: Boundary): void;

    protected movePiece(givenGamePiece: GamePiece) {
        givenGamePiece.updatePosition();
    }

}

enum Boundary {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT
}