const JOI = require('joi');

class OnBoardModel{
    constructor(rank, 
        nCT_Number, 
        title, 
        acronym, 
        status,
        study_Results, 
        conditions, 
        interventions, 
        outcome_messures, 
        sponsor_Collaborators, 
        gender, 
        age, 
        phases, 
        enrollment, 
        funded_bys, 
        study_type, 
        study_designs, 
        other_ids, 
        start_date, 
        primary_completion_date, 
        completion_date, 
        first_posted, 
        results_first_posted, 
        last_update_posted, 
        locations, 
        study_documents, 
        url){

            this.Rank = rank || null;
            this.NCT_Number = nCT_Number || null;
            this.Title = title || null;
            this.Acronym = acronym || null;
            this.Status = status || null;
            this.Study_Results = study_Results || null;
            this.Sonditions = conditions || null;
            this.Interventions = interventions || null;
            this.Outcome_messures = outcome_messures || null;
            this.Sponsor_Collaborators = sponsor_Collaborators || null;
            this.Gender = gender ||null;
            this.Age = age || null;
            this.Phases = phases || null;
            this.Enrollment = enrollment || null;
            this.Funded_bys = funded_bys || null;
            this.Study_type = study_type || null;
            this.Study_designs = study_designs || null;
            this.Other_ids = other_ids || null;
            this.Primary_completion_date = primary_completion_date || null;
            this.Completion_date = completion_date || null;
            this.First_posted = first_posted || null;
            this.Results_first_posted = results_first_posted || null;
            this.Last_update_posted = last_update_posted || null;
            this.Locations = locations || null;
            this.Study_documents = study_documents || null;
            this.Url = url || null;
    }

    static getValidation(){
        return{
            rank : JOI.number().required(),
            nCT_Number : JOI.string().required(),
            title : JOI.string().required(),
            acronym : JOI.string().required(),
            status : JOI.string().required(),
            study_Results : JOI.string().required(),
            conditions : JOI.string().required(),
            interventions : JOI.string().required(),
            outcome_messures :JOI.string().required(),
            sponsor_Collaborators:JOI.string().required(),
            gender :JOI.string().required(),
            age :JOI.string().required(),
            phases :JOI.string().required(),
            enrollment :JOI.string().required(),
            funded_bys :JOI.string().required(),
            study_type :JOI.string().required(),
            study_designs : JOI.string().required(),
            other_ids : JOI.string().required(),
            start_date : JOI.string().required(),
            primary_completion_date:JOI.string().required(),
            completion_date:JOI.string().required(),
            first_posted:JOI.string().required(),
            results_first_posted:JOI.string().required(),
            last_update_posted:JOI.string().required(),
            locations:JOI.string().required(),
            study_documents:JOI.string().required(),
            url:JOI.string().required()
        };
    }
    static isValid(obj){
        if(!obj)
            return false;

            return JOI.validate(obj, OnBoardModel.getValidation());
        
    }
}
module.exports = OnBoardModel;