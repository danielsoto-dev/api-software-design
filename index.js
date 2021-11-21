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
app.get('/api/deparments/:deparment', function (req, res) {
  const {
    params: { deparment },
  } = req;
  let fixedDeparment;
  if (contains(deparment, 'bogotá')) {
    fixedDeparment = 'Cundinamarca';
  }
  if (contains(deparment, 'cartagena')) {
    fixedDeparment = 'Bolívar';
  }
  if (contains(deparment, 'buenaventura')) {
    fixedDeparment = 'Valle del Cauca';
  }
  if (contains(deparment, 'santa marta')) {
    fixedDeparment = 'Magdalena';
  }
  const response = {
    original: deparment,
    fixedDeparment,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
