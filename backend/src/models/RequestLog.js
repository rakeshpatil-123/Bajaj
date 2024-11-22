const mongoose = require('mongoose');

const RequestLogSchema = new mongoose.Schema({
    requestData: Object,
    responseData: Object,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RequestLog', RequestLogSchema);
