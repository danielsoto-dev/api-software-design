var express = require('express');
var app = express();

const PORT = process.env.PORT || 3001;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(
    '<h1>Hi this is the main page of the API for the lecture "Diseño de Software"</h1>'
  );
});

const contains = (string, substr) => {
  return string.toLowerCase().includes(substr);
};
app.get('/api/departments/:department', function (req, res) {
  const {
    params: { department },
  } = req;
  let fixeddepartment;
  if (contains(department, 'bogotá')) {
    fixeddepartment = 'Cundinamarca';
  }
  if (contains(department, 'barranquilla')) {
    fixeddepartment = 'Atlántico';
  }
  if (contains(department, 'cartagena')) {
    fixeddepartment = 'Bolívar';
  }
  if (contains(department, 'buenaventura')) {
    fixeddepartment = 'Valle del Cauca';
  }
  if (contains(department, 'santa marta')) {
    fixeddepartment = 'Magdalena';
  }
  if (!fixeddepartment) {
    fixeddepartment = department;
  }
  const response = {
    original: department,
    fixeddepartment,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
