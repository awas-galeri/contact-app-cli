// mengambil argument dari command line
const yargs = require("yargs")
const contacts = require("./contacts")

// menambah data kontak
yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        nomor: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.nomor)
    }
}).demandCommand()

// menampilkan daftar semua nama dan nomor hp kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan nomor hp kontak',
    handler() {
        contacts.listContact()
    }
})

// menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama)
    }
})

// menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    }
})


yargs.parse()


























// console.log(process.argv[2]);
// const command = process.argv[2]
// if (command === 'add') {

// } else if (command === 'emove') {

// } else if (command === 'list') {

// }

// console.log(yargs.argv);



























// const contacts = require('./contacts')

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan Nama Anda : ')
//     const email = await contacts.tulisPertanyaan('Masukkan Email Anda : ')
//     const nomor = await contacts.tulisPertanyaan('Masukkan No. HP Anda : ')

//     // simpan kontak
//     contacts.simpanContact(nama, email, nomor)
// }

// main()





















// const {tulisPertanyaan, simpanContact} = require('./contacts')

// const main = async () => {
//     const nama = await tulisPertanyaan('Masukkan Nama Anda : ')
//     const email = await tulisPertanyaan('Masukkan Email Anda : ')
//     const nomor = await tulisPertanyaan('Masukkan No. HP Anda : ')

//     // simpan kontak
//     simpanContact(nama, email, nomor)
// }