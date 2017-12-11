console.log('loaded frontend_app');
var frontend_app = angular.module('presidents', []);
frontend_app.controller('pres_data', do_data);


// function years_in_office(presidents) {
//     console.log('years_in_office');
//     var ptoy = $scope.president.took_office.slice(0, 4);
//     var ploy = $scope.president.left_office.slice(0, 4);
//     var ptom = $scope.president.took_office.slice(5, 7)
//     var plom = $scope.president.left_office.slice(5, 7)

// {{president.left_office-president.took_office}}
// {{if (president.left_office.slice(0,4) - president.took_office.slice(0,4) = 0) { 
//     return president.left_office.slice(0,4) - president.took_office.slice(0,4);}} 
//     {
// <!-- {president.left_office.slice(0,4) - president.took_office.slice(0,4)}} 
// {{president.left_office.slice(5,7) - president.took_office.slice(5,7)
// + " months"}}
//     return "1";
// }


function do_data($scope, $http) {
    $scope.searchPresidents = ''; // set the default search/filter term
    $scope.years_in_office = function () {
        console.log('years_in_office');
        // $http.get('/api/v1/read').then(function (results) {
        //     console.log(results);
        //     $scope.presidents = results.data;
    }

    $scope.read = function () {
        console.log('getting all data, still');
        $http.get('/api/v1/read').then(function (results) {
            // console.log(results);
            $scope.presidents = results.data;
        });
    }
    $scope.read();

    $scope.create = function () {
        console.log('creating president');
        var data = {
            president: $scope.input_president,
            birth_year: $scope.input_birth_year,
            death_year: $scope.input_death_year,
            took_office: $scope.input_took_office,
            left_office: $scope.input_left_office,
            party: $scope.input_party
        }
        console.log(data);
        $http.post('/api/v1/create', data).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }
    $scope.update = function (president) {
        console.log('updating president');
        console.log(president);
        $http.put('/api/v1/update', president).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }
    $scope.delete = function (president) {
        console.log('deleting president');
        console.log(president);
        $http.delete('/api/v1/delete/' + president._id).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }
}

// $scope.years_in_office = function () {
//     console.log('years_in_office');
//     $http.get('/api/v1/read').then(function (results) {
//         console.log(results);
//         $scope.presidents = results.data;
//     });
// }
// $scope.read();

