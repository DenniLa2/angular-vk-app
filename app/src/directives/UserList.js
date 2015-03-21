import React from 'react';
import UserItemComponent from '../components/UserItemComponent';
import UserListComponent from '../components/UserListComponent';

var UserList = ($timeout) => ({
	restrict: "AE",
	scope: {
		users: '@'
	},
	link: (scope, element, attributes) => {
		attributes.$observe('users', users => {
            $timeout(() => {
                React.render(React.createElement(UserListComponent, {users: angular.fromJson(users)}), element[0]);
            }, 0);
        })
	}
});


export default UserList;