import template from './domino-details.component.html';
import './domino-details.component.css';

class DominoDetailsComponent {

    static get $inject() { return ['dominoConstants', 'ModelService']; }

    constructor(dominoConstants, modelService) {
        this.modelService = modelService;
        this.dominoModel = modelService.dominoModel;
        this.faceCollection = dominoConstants.faces;
        this.types = dominoConstants.types;
        this.size = dominoConstants.size;
        this.speed = dominoConstants.speed;
    }

    getImageUrl(face) {
        return this.modelService.getImageUrl(face);
    }
    getFaceSizeStyle() {
        return {
            height: `${this.dominoModel.size}px`,
            width: `${this.dominoModel.size}px`,
        }
    };

    getDominoRotation() {
        return {
            transition: `${this.dominoModel.speed}ms ease transform`,
            transform: `rotate(${this.dominoModel.angle}deg)`
        }
    }
    onSelectPart(value) {
        this.dominoModel.selectedFace = value;
    }
}

export default {
    template: template,
    controller: DominoDetailsComponent,
    bindToController: true
}