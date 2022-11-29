# Calendar
UCB Challenge 5. Refactor starter code to build a calendar application powered by jQuery.

## Description

N/A
## Installation

N/A

## Usage

### Notes on jQuery - this must be deleted
How to add a varaible
var variableName = $("#idName");

How to add text to an element
variableName.text('Insert string here');

How to initiate a click event
variableName.on('click',functionName());

How to add a class
variable/elementName.addClass('className');
OR variableName.attr('class', 'className');

How to append an element to another element
variableName.append('class you want to append to);

How to style an element
variableName.css('property','attribute attribute attribute') 
<!-- Not sure if attributes are seprated by commmas or not -->

How to select user input jQuery
index.html
<div class="col-12 col-sm-6">
    <label for="email">Email</label>
    <input type="email" class="form-input" name="email" placeholder="Enter email" />
</div>
script.js
$('input[name="email"]');

How to 