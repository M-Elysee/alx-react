import './header.css'
import $ from 'jquery'

$(document).ready(function() {
    $("body").append("<header></header>");
    $("header").append('<div id="logo"></div>', '<h1>Holberton Dashboard</h1>');

    console.log("Init header");
});