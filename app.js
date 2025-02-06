const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Deepgrid.io' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Handle contact form submission
app.post('/contact', (req, res) => {
    // Add your form handling logic here
    // For example, sending emails, storing in database, etc.
    res.redirect('/contact');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 