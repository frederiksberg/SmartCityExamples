$(function () {

    $.connection.hub.url = 'http://52.214.71.73/signalr';
    let hub = $.connection.parkingHub;  

    //Listen to the pong event from the server
    hub.client.pong = function (value) {
       let el = $('<div>' + value + '</div>');
       $('#container').append(el);
    }

    $.connection.hub.start();

    //Send ping to server when on click is called on button
    $('#send-button').click(function (){
        var text = $('#input').val();
        hub.server.ping(text);
    });

});