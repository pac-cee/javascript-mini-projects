const request = require('supertest');
const app = require('../src/server');
const mongoose = require('mongoose');
const User = require('../src/models/user.model');
const Note = require('../src/models/note.model');

let token;

beforeAll(async () => {
    await User.deleteMany();
    await Note.deleteMany();

    // Create test user and get token
    const response = await request(app)
        .post('/api/auth/register')
        .send({
            username: 'testuser',
            email: 'test@test.com',
            password: 'password123'
        });
    
