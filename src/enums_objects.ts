// Enums es una feature de TS no existe en JS
// enum podemos asignarle number a los items
// pero por lo gral se lo usa para asignarle strings
enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPERADMIN'
}

console.log(Roles.User);

// Objects
// es similar, a enums
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};

console.log(roles.User);