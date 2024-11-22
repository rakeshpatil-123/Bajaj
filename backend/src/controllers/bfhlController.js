const RequestLog = require('../models/RequestLog');

const processRequest = async (req, res) => {
    const { data, file_b64 } = req.body;

    // Process input and prepare response
    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: data.filter((item) => !isNaN(item)),
        alphabets: data.filter((item) => isNaN(item)),
        highest_lowercase_alphabet: data.filter((item) => /[a-z]/.test(item)).sort().pop(),
        is_prime_found: data.some((item) => isPrime(parseInt(item))),
        file_valid: !!file_b64,
        file_mime_type: "image/png",
        file_size_kb: file_b64 ? Buffer.from(file_b64, 'base64').length / 1024 : 0,
    };

    // Log to database
    await RequestLog.create({ requestData: req.body, responseData: response });

    res.status(200).json(response);
};

const getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

module.exports = { processRequest, getOperationCode };
