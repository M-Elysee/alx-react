import $ from 'jquery';
import _ from 'lodash';


let i = 0;

function updateCounter() {
    i++;
    $('#count').text(`${i} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').on('click', _.debounce(updateCounter, 500));
});
