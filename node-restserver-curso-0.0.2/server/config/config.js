// ============================
//  Port
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Enviroment
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// ============================
//  DB
// ============================


let urlDB

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb+srv://elliot:<password>@cluster0-pic7o.mongodb.net/test'
}

process.env.URLDB = urlDB