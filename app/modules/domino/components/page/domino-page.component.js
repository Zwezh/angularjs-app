import template from './domino-page.component.html';
import './domino-page.component.css';

export default class DominoPageComponent {
    constructor() {
        this.template = template;
        this.controller = ($scope, dominoConstants, DominoModel) => {
            $scope.dominoModel = new DominoModel();
            $scope.faceCollection = dominoConstants.faces;

            $scope.getImageUrl = function (face) {
                return dominoConstants.urls.getFaceImageUrl.replace('{{face}}', face);
            }

            $scope.onSelectPart = (part) => {
                $scope.dominoModel.selectedFace = part;
            }
        };
    }
}
DominoPageComponent.$inject = ['$scope', 'dominoConstants', 'DominoModel'];