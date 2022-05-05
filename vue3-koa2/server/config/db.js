import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'  // mysql2 需要全局安装 npm i mysql2 -g  或 yarn add mysql2 -g

const options ={
  host: 'localhost',  //  接数据库的主机
  port: '3306',       //  接数据库的端口
  protocol: 'tcp',    //  连接数据库使用的协议
  dialect: 'mysql',   //  使用mysql
  dialectModule: mysql2,   //  使用mysql2
  // 是否开启日志，默认是用console.log
  // 建议开启，方便对照生成的sql语句
  //默认，显示日志函数调用的第一个参数
  // logging:console.log,
  //显示所有记录函数调用的参数
  // logging: (...msg) => console.log(msg),
  pool: { 
      max: 5,         //  最大连接数量
      min: 0,         //  最小连接数量
      //建立连接最长时间
      // acquire: 30000,
      idle: 10000     //  连接空置时间（毫秒），超时后将释放连接
  },
  retry: {        //  设置自动查询时的重试标志
      max: 3          //  设置重试次数
  },
  charset: 'utf8',
  // dialectOptions: {
  //     useUTC: false //for reading from database
  // },
  omitNull: false,    //  null 是否通过SQL语句查询
  timezone: '+08:00' , //  解决时差 - 默认存储时间存在8小时误差
    // 是否为表添加 deletedAt 字段
      // 默认情况下, destroy() 方法会删除数据，
      // 设置 paranoid 为 true 时，将会更新 deletedAt 字段，并不会真实删除数据。
      paranoid: false
};
if (options.dialect === 'mysql') {
  options.dialectModule = mysql2;
}
//数据库名，用户名，密码
const Demo = new Sequelize('Demo', 'root', '123456', options );
export default {
  Demo  // 将Demo暴露出接口方便Model调用
}
