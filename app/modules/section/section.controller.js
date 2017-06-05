'use strict';
angular
    .module('testApp').controller('SectionController', function(){
        console.log("DashboardController is being initialized.");
        var vm = this;
        //Model of a student
        vm.student = {
            name: '',
            marks: 0,
            class: ''
        };
        //List that will store the student
        vm.studentList = [];

        //Init function
        function init(){
            populateStudent( { list: [{
                name: 'Sam',
                marks: 50,
                class: '8A'
            },{
                name: 'Jhon',
                marks: 60,
                class: '8B'
            },{
                name: 'Peter',
                marks: 70,
                class: '8C'
            } ] } );
        }

        /**
         * This method accepts a list of student and populates them in the vm.studentList 
         * of this controller
         */
        function populateStudent(params){
            for(var i in params.list){
                Array.prototype.push.apply(vm.studentList, [getStudent(params.list[i])]);
            }
        }

        /**
         * This function accepts a object with the details of the student and uses the 
         * values from this object to populate a student object and return it.
         * @param {Object} params 
         */
        function getStudent(params){
            var student = angular.copy(vm.student);
            angular.extend(student, {
                name: params.name | 'No Name',
                marks: params.marks | 0,
                class: params.class | 'No Class'
            });
            return student;
        }

        init();

    });