export default class ResourceService {

    static get $inject() { return ['$http']; }
    
    constructor($http) {
        this.$http = $http;
    }
    getGrades() {
        return this.$http
            .get('./data.json')
            .then(response => response.data, error => {console.log(error)});
    }
}