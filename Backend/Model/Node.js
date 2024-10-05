const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSeriesDataSchema = new Schema(
  {
    timestamp: {
     type: Date, 
     required: true
   },
  value: {
     type: Number, 
     required: true
   },
  //  metadata:{
  //   patient_id: { 
  //     type: Schema.Types.ObjectId, ref: 'Patient', required: true
  //    },
  //  },
},
   {
    timeseries: {
      timeField: 'timestamp',
      //metaField: 'metadata',
    }
  },
);

const nodeSchema = new Schema({
  heart_rate: [timeSeriesDataSchema],  
  spo2: [timeSeriesDataSchema],        
  temperature: [timeSeriesDataSchema]  
});

const Node = mongoose.model('Node', nodeSchema);

module.exports = Node;
