const send_bar = document.querySelector('#send_bar');
const send_web = document.querySelector('#send_web');

var socket = io();

send_bar.addEventListener('click', function(){
    socket.emit('CLIENT_WEB_OPCODE', {
        data: 1
    });
});

send_web.addEventListener('click', function(){
    socket.emit('CLIENT_WEB_OPCODE', {
        message: "send_web"
    });
});