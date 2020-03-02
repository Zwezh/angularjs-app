import template from './domino-page.component.html';
import './domino-page.component.css';
class DominoPageComponent {

    static get $inject() { return ['dominoConstants', 'ModelService', '$document']; }

    constructor(dominoConstants, modelService, $document) {
        $document[0].title = 'Domino playground';
        this.modelService = modelService;
        this.dominoModel = modelService.dominoModel;
        this.faceCollection = dominoConstants.faces;
        this.rotates = dominoConstants.rotates;
    }

    getImageUrl(face) {
        return this.modelService.getImageUrl(face);
    }
    onRotateDomino(rotate) {
        this.dominoModel.angle = this.dominoModel.angle + rotate;
    }
    onNewDomino() {
        this.dominoModel.resetFaces();
    }
    onSelectAvailableFace(value) {
        this.dominoModel[this.dominoModel.selectedFace] = value;
    }
    getDisableFacesClass() {
        return this.dominoModel.selectedFace ? '' : 'domino-faces-lock';
    }
}

export default {
    template: template,
    controller: DominoPageComponent,
    bindToController: true
}