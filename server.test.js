const request = require('supertest');
const app = require('./server');

describe('POST /users', () => {

    test('Reject invalid email', async () => {

        const response = await request(app)
            .post('/users')
            .send({
                name: 'Student A',
                email: 'invalid-email'
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test('Accept valid email', async () => {

        const response = await request(app)
            .post('/users')
            .send({
                name: 'Student A',
                email: 'student@gmail.com'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
    });

});