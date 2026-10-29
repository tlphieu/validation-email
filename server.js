const express = require('express');
const { isValidEmail } = require('./validation');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {

    const { name, email } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }

    return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: { name, email }
    });
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}

module.exports = app;