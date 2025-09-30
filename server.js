const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for order submissions
app.post('/api/order', (req, res) => {
    const { name, phone, pizza, instructions } = req.body;
    
    // In a real application, you would:
    // 1. Validate the data
    // 2. Store in database
    // 3. Send confirmation email/SMS
    // 4. Integrate with payment processor
    
    console.log('New order received:', {
        name,
        phone,
        pizza,
        instructions,
        timestamp: new Date().toISOString()
    });
    
    // Simulate processing delay
    setTimeout(() => {
        res.json({
            success: true,
            message: 'Order received successfully!',
            orderId: 'PZ' + Date.now(),
            estimatedDelivery: '25-35 minutes'
        });
    }, 1000);
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    console.log('Contact form submission:', {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    });
    
    res.json({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you soon.'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🍕 Pizza Paradiso server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});