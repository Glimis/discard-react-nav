import {
	List
}
from 'immutable'

export default function change(state = List([{
	"title": "禅道",
	"url": "http://172.16.10.14:8080/zentao/user-login-L3plbnRhby8=.html",
	"username": "liuchengyuan",
	"password": "123456"
}, {
	"title": "gitlab",
	"url": "http://172.16.10.16/users/sign_in",
	"username": "liuchengyuan",
	"password": "123456"
}, {
	"title": "wiki",
	"url": "http://wiki.huitongjy.com/login.action;jsessionid=9F2571C1E3D6D6D08487D42FAB635FD5?os_destination=%2Findex.action",
	"username": "liuchengyuan",
	"password": "123456"
}, {
	"title": "官网",
	"url": "http://www.willclass.com/"
}, {
	"title": "教师端",
	"url": "http://local_teacher.testc.huitong.com/class/list",
	"username": "1600000030",
	"password": "123456"
}, {
	"title": "学生端",
	"url": "http://local_student.testc.huitong.com/class/list"
}]), action) {
	console.log(action.type, 'NAV-ChangeName');
	return state;
}