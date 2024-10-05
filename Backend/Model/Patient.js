const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  node_id: { type: Schema.Types.ObjectId, ref: 'Node', required: true },  
  hospital_id: { type: Schema.Types.ObjectId, ref: 'Hospital', required: true },  
  health_condition: { type: String, required: true }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
