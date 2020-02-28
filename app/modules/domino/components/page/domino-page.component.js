import template from './domino-page.component.html';
import './domino-page.component.css';

export default class DominoPageComponent {
    constructor() {
        this.template = template;
        this.controller = ($scope, dominoConstants, ModelService) => {
            $scope.dominoModel = ModelService.dominoModel;
            $scope.faceCollection = dominoConstants.faces;
            $scope.rotates = dominoConstants.rotates;
            $scope.getImageUrl = face => ModelService.getImageUrl(face);
            $scope.onRotateDomino = rotate => { $scope.dominoModel.angle = $scope.dominoModel.angle + rotate; };
            $scope.onNewDomino = () => { $scope.dominoModel.resetFaces(); }
            $scope.onSelectAvailableFace = value => { $scope.dominoModel[$scope.dominoModel.selectedFace] = value; }
            $scope.getDisableFacesClass = () => $scope.dominoModel.selectedFace ? '' : 'domino-faces-lock';
        };
    }
}
DominoPageComponent.$inject = ['$scope', 'dominoConstants', 'ModelService'];