export default class ModelService {

    static get $inject() { return ['DominoModel', 'dominoConstants']; }

    constructor(DominoModel, dominoConstants) {
        this._dominoModel = new DominoModel(dominoConstants);
        this.dominoConstants = dominoConstants;
    }

    get dominoModel() {
        return this._dominoModel;
    }

    getImageUrl(face) {
        return this.dominoConstants.urls.getFaceImageUrl.replace('{{face}}', face);
    }
}