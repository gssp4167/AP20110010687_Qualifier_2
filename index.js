const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const user_id = "Penubothu_Gautham_Sai_Swaroop_16102002";

app.post('/bfhl', (req, res) => {
try {
    const post_data = req.body;
    const collegeEmail = post_data.college_email || 'gauthamsai_penubothu@srmap.edu.in';
    const collegeRollNumber = post_data.college_roll_number || 'AP20110010687';
    const data = post_data.data || [];

    const numbers = data.filter(item => typeof item === 'number');
    const alphabets = data.filter(item => typeof item === 'string');

    const highestAlphabet = alphabets.reduce((max, current) => {
    return current > max ? current : max;
    }, '');

    const response = {
        is_success: true,
        user_id: user_id,
        email: collegeEmail,
        roll_number: collegeRollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet,
    };

    res.status(200).json(response);
} 
catch (err) {
    res.status(400).send("Error in making the request");
}
});

app.get('/bfhl', (req, res) => {
try {
    const operationCode = 1;
    res.status(200).json({ operation_code: operationCode });
} 
catch (err) {
    res.status(400).send("Error making the request");
}
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
