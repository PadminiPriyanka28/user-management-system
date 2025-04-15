const request = require('supertest');
const app = require('../app');
const db = require('../config');

let token = '';

beforeAll(done => {
  // Clear and setup test user
  db.query('DELETE FROM users WHERE username = ?', ['testuser'], () => {
    done();
  });
});

afterAll(() => {
  db.end(); // Close DB connection after tests
});

describe('User API', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/register').send({
      username: 'testuser',
      password: 'testpass'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('User registered');
  });

  it('should login and return token', async () => {
    const res = await request(app).post('/api/login').send({
      username: 'testuser',
      password: 'testpass'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  it('should fetch profile with token', async () => {
    const res = await request(app)
      .get('/api/profile')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.username).toBe('testuser');
  });

  it('should reject access without token', async () => {
    const res = await request(app).get('/api/profile');
    expect(res.statusCode).toEqual(401);
  });

  it('should reject wrong login', async () => {
    const res = await request(app).post('/api/login').send({
      username: 'testuser',
      password: 'wrongpass'
    });
    expect(res.statusCode).toEqual(401);
  });
});
