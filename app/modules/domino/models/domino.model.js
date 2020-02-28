export default class DominoModel {
    constructor(dominoConstants) {
        this.dominoConstants = dominoConstants;
        this._initialize();
    }

    resetFaces() {
        this._initialize();
    }

    _initialize() {
        this.top = null;
        this.bottom = null;
        this.selectedFace = '';
        this.size = this.dominoConstants.size.min;
        this.speed = this.dominoConstants.speed.min;
        this.angle = 0;
    }
}