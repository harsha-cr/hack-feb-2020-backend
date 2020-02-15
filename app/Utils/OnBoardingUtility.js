class OnboardingUtility {
    
    static readExcelFileContent(excelFilePath) {
        if (!excelFilePath) {
            return null;
        }
 
        const XLSX = require('xlsx');
        const OnBoardModel = require('../models/OnBoardingModel');
 
        const workbook = XLSX.readFile(excelFilePath);
        const sheet_name_list = workbook.SheetNames;
        const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
 
        if (!xlData || !xlData.length) {
            console.log('No Credentials...!');
            return;
        }
 
        const success = [];
        const failed = [];
        xlData.forEach(data => {
            const o = new OnBoardModel(data.rank, 
                data.nCT_Number, 
                data.title, 
                data.acronym, 
                data.status,
                data.study_Results, 
                data.conditions, 
                data.interventions, 
                data.outcome_messures, 
                data.sponsor_Collaborators, 
                data.gender, 
                data.age, 
                data.phases, 
                data.enrollment, 
                data.funded_bys, 
                data.study_type, 
                data.study_designs, 
                data.other_ids, 
                data.start_date, 
                data.primary_completion_date, 
                data.completion_date, 
                data.first_posted, 
                data.results_first_posted, 
                data.last_update_posted, 
                data.locations, 
                data.study_documents, 
                data.url);
            const valid = OnBoardModel.isValid(o);
            (valid.error) ? failed.push(o) : success.push(o);
        });
 
        return {
            success: [...success],
            failed: [...failed]
        };
 
    }
 
}
 module.exports = OnboardingUtility;