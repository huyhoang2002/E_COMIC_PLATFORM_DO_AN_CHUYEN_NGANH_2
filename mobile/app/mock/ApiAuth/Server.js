const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('Auth.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for login
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get('users').find({ username, password }).value();
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

server.use(router);

const port = 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
