import template from './domino-details.component.html';
import './domino-details.component.css';

export default class DominoDetailsComponent {

    static get $inject() { return ['$scope', 'dominoConstants', 'ModelService']; }

    constructor() {
        this.template = template;
        this.controller = ($scope, dominoConstants, ModelService) => {
            $scope.dominoModel = ModelService.dominoModel;
            $scope.faceCollection = dominoConstants.faces;
            $scope.types = dominoConstants.types;
            $scope.size = dominoConstants.size;
            $scope.speed = dominoConstants.speed;
            $scope.getImageUrl = face => ModelService.getImageUrl(face);
            $scope.getFaceSizeStyle = () => {
                return {
                    height: `${$scope.dominoModel.size}px`,
                    width: `${$scope.dominoModel.size}px`,
                }
            };
            $scope.getDominoRotation = () => {
                return {
                    transition: `${$scope.dominoModel.speed}ms ease transform`,
                    transform: `rotate(${$scope.dominoModel.angle}deg)`
                }
            };
            $scope.onSelectPart = value => { $scope.dominoModel.selectedFace = value; }
        };
    }
}