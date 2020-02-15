const DbUtil = require("../config");
const dbRef = DbUtil;

class OnBoardDAO{
    static addLists(lists){
        if(!lists || !lists.length){
            return null;
        }

        const mysqlConnection = DBUtil
        if (!mysqlConnection) {
            console.log("Connection Failed");
            return null;
        }

        let sql = '';
        const objs =[];
        sql = "INSERT into dataset('rank','nCT_Number','title','acronym','status','study_Results','conditions','interventions','outcome_messures','sponsor_Collaborators', 'gender', 'age', 'phases', 'enrollment','funded_bys','study_type', 'study_designs', 'other_ids', 'start_date','primary_completion_date','completion_date', 'first_posted','results_first_posted', 'last_update_posted','locations', 'study_documents','url')VALUES";
        lists.array.forEach(element => {
            objs.push('("${element.rank}","${element.nCT_Number}","${element.title}","${element.acronym}","${element.status}","${element.study_Results}","${element.conditions}","${element.interventions}","${element.outcome_messures}","${element.sponsor_Collaborators}","${element.gender}","${element.age}","${element.phases}","${element.enrollment}","${element.funded_bys}","${element.study_type}","${element.study_designs}","${element.other_ids}","${element.start_date}","${element.primary_completion_date}","${element.completion_date}","${element.first_posted}","${element.first_posted}","${element.results_first_posted}","${element.last_update_posted}","${element.locations}","${element.study_documents}","${element.url}")');   
        })
        sql +=objs.join(",");

        return new Promise((resolve, reject) => {
            mysqlConnection.query(sql, (err, rows, fields) => {
                if (!err) {
                    resolve({rows: rows, fields: fields})
                } else {
                    reject(err);
                }
            });
        })
    }



// GET All
static getAll(){
    const mysqlConnection = DBUtil;
    if(!mysqlConnection) {
        console.log("Connection Failed");
        return null;
    }
    return new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * FROM dataset', (err, rows, fields) => {
            if(!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    });
}

//GET BY Name
static getByTitle(title) {
    const mysqlConnection = DBUtil
    if (!mysqlConnection) {
        console.log("Connection Failed");
        return null;
    }
    return new Promise((resolve, reject) => {
    mysqlConnection.query('SELECT * FROM dataset WHERE title LIKE "%'+[title]+'%"', (err, rows, fields) => {
            if (!err) {
                resolve(rows)
            } else {
                reject(err);
            }
        });
    });
}


}
module.exports = OnBoardDAO;