import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import { error } from './components/error'
import { Router, Route, hashHistory} from 'react-router'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */
window.React = React

    render(
    	<Router history={hashHistory}>
    		<Route path="/" component={App}/>
    		<Route path="Search" component={App}/>
    		<Route path="Diagnostics" component={App}/>
    		<Route path="ODM" component={App}/>
    		<Route path="Mechanics" component={App}/>
    		<Route path="Sign In" coponent={App}/>
    		<Route path="*" component={error}/>
    	</Router>,
   document.getElementById('react-container'))