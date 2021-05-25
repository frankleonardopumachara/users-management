const mysqlx = require('@mysql/xdevapi')

const config = {
    password: 'secreto',
    user: 'root',
    host: 'localhost',
    port: 33060,
    schema: 'myCompanyPractice'
}

const mysqlConnection = mysqlx.getSession('root:secreto@localhost:33060/myCompanyPractice')
    .then(session => {
        console.log(session.inspect());
    })
    .catch(err => {
        console.log('Error', err);
    })


const clients = '339fce26-1e63-4f7c-a496-637d2122d757:71eeae0a-c18a-466d-bd32-577fd6ce2371'    
const clientsnw = '339fce26-1e63-4f7c-a496-637d2122d757:71eeae0a-c18a-466d-bd32-577fd6ce2371'    
const a = Buffer.from(clients).toString('base64')
console.log('encoded', a);

const data = 'N2RmZWRiMTItZWI1Mi00ZDAzLTljODAtMDczMTgwNWQ2MDRjOjU5OWVhZDMxLTcwNzMtNDBhNC05NmZlLTFiZjI3MTcwYTgwNg=='
const decoded = Buffer.from(data,'base64')
console.log('decoded', decoded.toString('ascii'));

module.exports = mysqlConnection


