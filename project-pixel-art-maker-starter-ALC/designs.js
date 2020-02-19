// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid(u) {
    u.preventDefault();
    $('table').children().remove();
    let row = $('#inputHeight').val();
    const column = $('#inputWeight').val();
    for (let s = 1; s <= row; s++) {
        $('table').append('<tr></tr>');
        for (let v = 1; v <= column; v++) {
            $('tr:last').append('<td></td>');
        }
    }
    $('td').click(function(u) {
        u.preventDefault();
        var color = $('#colorPicker').val()
        $(this).css('background-color', color)
    })
    $('td').dblclick(function(u) {
        u.preventDefault();
        $(this).css('background-color', 'transparent')
    })
});