$(function () {

    //Get all parking spots from the api
    var jqxhr = $.getJSON("http://52.214.71.73/api/parkingspot", function (result) {
        //Sort parking spots by id
        result.sort((a, b) => {
            return a.id - b.id
        })
        //Draw a box element for each parking spot and set its id to the corresponding parking id
        for (let i = 0; i < result.length; i++) {
            
            let el = $('<div class="box">' + result[i].id + '</div>');
            el.attr('id', 'box-' + result[i].id)
            el.css({ "background-color": result[i].occupied ? 'indianred' : 'lightgreen' });
            
            $('.content').append(el)
        }

    });

    //Set connection url and connect to parkingHub
    $.connection.hub.url = 'http://52.214.71.73/signalr';
    let hub = $.connection.parkingHub;

    hub.client.broadcastParkingUpdates = function (updates) {
        //Foreach update, change the corresponding box based on occupied status
        for (let i = 0; i < updates.length; i++) {
            $('#box-' + updates[i].id).css({ "background-color": updates[i].occupied ? 'indianred' : 'lightgreen' });
        }
    }

    //Start connection
    $.connection.hub.start();
});