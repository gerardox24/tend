const express = require('express');

const users = [{
    firstName: 'Johnny',
    lastName: 'Ramos',
    age: 23,
    dni: '72721759'
}];

const app = express();

app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Users listed successfully',
        users: users
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('server running on port 3000');
})