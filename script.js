$(document).ready(function () {
    $('.sidenav').sidenav(); // For mobile side navigation

    $('.materialboxed').materialbox(); // Image Zoom features

    $('.parallax').parallax(); // Parallax feature

    $('.tabs').tabs(); // Tab section

    $('.datepicker').datepicker({ // options for date pickers, modify date calendar
        //disableWeekends: true     // Greys out weekends
        // https://materializecss.com/pickers.html
    });

    $('.tooltipped').tooltip(); // tootip hover effect
});