let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    
    name: String,
    dateCreated:
    {
      type: String,
      default: new Date().toISOString()
    },
    responses:
    {
      type: Number,
      default: 0
    },
    questions: [{
      title: String,
      options: [{
        details: String,
        count:{ 
          type: Number, 
          default: 0
        }
      }]
    }]
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);