// DIV
const div_root = document.querySelector('#root');
const div_account = document.querySelector('.account');
const div_id = document.querySelector('.id');
const div_name = document.querySelector('.name');
const div_username = document.querySelector('.username');
const div_password = document.querySelector('.password');
const div_loading = document.querySelector('#loading');
const div_powerMarkArea = document.querySelector('#powerMarkArea');

// Variables
const id = div_id.innerHTML;
const name = div_name.innerHTML;
const username = div_username.innerHTML;
const password = div_password.innerHTML;


div_account.innerHTML = "";

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

const CLIENT_MESSAGE = {
    LOGIN_SUCCESSFULL: "Iniciaste sesión correctamente",
}

var socket = io();

const emit_message = (opcode, data) =>{
    socket.emit(CLIENT_SOCKET.WEB, { opcode, data });
}


const user = {
    id,
    name,
    username,
    password
}

emit_message(SERVER_OPCODE.WEB.CONNECT, user);

socket.on(CLIENT_OPCODE.WEB.DISCONNECT_ACCOUNT_NOT_FOUND, ()=>{
    window.location.href = "/logout";
});

socket.on(CLIENT_OPCODE.WEB.ERROR, (data)=>{ alertify.error(data.message); });

socket.on(CLIENT_OPCODE.WEB.LOGIN_SUCCESS, ()=>{   
    alertify.message(CLIENT_MESSAGE.LOGIN_SUCCESSFULL);
    div_loading.style.display = "none";
    div_powerMarkArea.style.visibility = "visible";
});

