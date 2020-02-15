const mysql = require('mysql2');
const express = require('express');

class DBUtil {
    /**
     * Utility function to get Databse connection
     * @param config OPTIONAL
     * @return any
     */
    connectToDB(config = null) {
        config = config ? config : DBUtil.getMySqlConfig();
        console.log(config);

        if (!DBUtil.connection) {
            try {
                console.log(DBUtil.connection)
                DBUtil.connection = mysql.createConnection(config).connect(err => {
                    console.log('Connecting to DB failed', err);
                });
            } catch (e) {
                console.log(e);
                DBUtil.connection = null;
            }
        }
        return DBUtil.connection;
    }
    static getConnection(conf = null) {
        if (!DBUtil.connection) {
            this.connectToDB(conf);
        }
        return DBUtil.connection;
    }

    static getMySqlConfig(host = 'local') {
        if (host === 'local') {
            return {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'hackathon',
                multipleStatements: true
            };
        }
        else {
            return {
                host: '13.126.110.70',
                user: 'maiora',
                password: 'Madmin@6977',
                database: '',
                multipleStatements: true
            };
        }

    }
}
module.exports = DBUtil;