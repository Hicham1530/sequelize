import express from 'express';
import { Sequelize } from 'sequelize' ;
import dotenv from  'dotenv';

dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  });

const app = express ()
app.get ('/', function(req,res) {
    res.send ('Hello World')
})

app.listen(3000, function(){
console.log ('exemple app listening on port 3000!')
})

export default sequelize;