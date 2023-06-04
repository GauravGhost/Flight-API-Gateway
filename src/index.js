const express = require('express');
const rateLimit = require('express-rate-limit')
const { createProxyMiddleware } = require('http-proxy-middleware');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes')
const app = express();


const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 3, // Limit each IP to 3 requests per `window` per 2 minutes)
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter)

app.use('/flightsService', createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/FlightsService': '/' }
}));

app.use('/BookingService', createProxyMiddleware({
    target: ServerConfig.BOOKING_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/BookingService': '/' }
}));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server has started in ${ServerConfig.PORT}`);
    Logger.info("successfully started the server", "root", {})
})