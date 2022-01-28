const CLIENT_SOCKET = {
    EXTENSION: "extension",
    WEB: "web",
};

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
};

const CLIENT_MESSAGE = {
    LICENCIA_NOT_ACTIVE: "Tu licencia o esta activa. Comunicate con el administrador para activarla",
    USER_NOT_FOUND: "Usuario no encontrado",
};

export {
    CLIENT_SOCKET,
    CLIENT_OPCODE,
    CLIENT_MESSAGE,
    SERVER_OPCODE,
};
