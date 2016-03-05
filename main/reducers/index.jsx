import {combineReducers}from 'redux'

import nav from '../../nav/reducers'

console.log('nav',nav)
export default   combineReducers({
	nav
})