const div_sendmessage = document.querySelector('#sendmessage');
const div_list_user = document.querySelector('#list_user');

var socket = io();

const CLIENT_SOCKET = {
    WEB: "web",
}

const CLIENT_OPCODE = {
    EXTENSION: {},
    WEB: {
        DISCONNECT_ACCOUNT_NOT_FOUND: "client web opcode disconnect account not found",
        ERROR: "client web opcode error",
        LOGIN_SUCCESS: "client web opcode login success",
        LICENSE_INACTIVE: "client web opcode license inactive",
        GET_ALL_USERS: "client web opcode get all users",
    },
};

const SERVER_OPCODE = {
    EXTENSION: {},
    WEB: {
        CONNECT: "server web opcode connect",
        GET_ALL_USERS: "server web opcode get all users",
    }
}

const emit_message = (opcode, data = {}) =>{
    socket.emit(CLIENT_SOCKET.WEB, { opcode, data });
}

emit_message(SERVER_OPCODE.WEB.GET_ALL_USERS);

socket.on(CLIENT_OPCODE.WEB.GET_ALL_USERS, (data) => {
    console.log(data);
});