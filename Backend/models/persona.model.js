import mongoose from "mongoose";

const PersonaSchema = new mongoose.Schema({

   name : {
    type : String,
    required : true
   },

   ageRange : {
    type : String,
    required : true
   },

   gender : {
    type : String,
    enum : ["Male", "Female", "Other"],
    required : true
   },

   location : {
    type : String
   },

   maritalStatus : {
    type: String, 
    enum: ["Single", "Married", "Divorced", "Other"], 
    required: true 
   },

   incomeLevel : {
    type: String, 
    required: true
   },

   educationLevel : {
    type : String,
    enum: ["High School", "Bachelor's", "Master's", "PhD", "Other"],
    required : true
   },

   jobTitle : {
    type : String,
    required : true
   },

   industry : {
    type : String,
    required : true
   },

   goalsAndAspirations : {

    primaryGoal : {
        type : String,
        required : true
    },
    secondaryGoals : [{
        type : String
    }],
    longTermVision : {
        type : String
    }

   },

   painPointsAndChallenges : {

    biggestProblems : [{
        type : String
    }],
    frustration : [{
        type : String
    }],
    commonObjections : [{
        type : String
    }]

   },

   buyingBehaviour : {

    platforms : [{
        type : String
    }],
    influencersFollowed : [{
        type : String
    }],
    contentTypes : [{
        type : String
    }],
    decisionMakingProcess : [{
        type : String
    }]

   },

   psychologicalTriggers : {

    emotionalTriggers : [{
        type : String
    }],
    logicalTriggers : [{
        type : String
    }],
    socialProofPreferences : [{
        type : String
    }]

   },

   solutionFit : {

    productBenefits : {
        type : String,
        required : true
    },

    keyFeatures : [{
            type : String
    }],

    messagingTone : {
        type : String,
        enum : ["Professional", "Friendly", "Authoritative"],
        required : true
    }

   }
}, {timestamps : true})

const BuyerPersona = mongoose.model("BuyerPersona", PersonaSchema)

export default BuyerPersona