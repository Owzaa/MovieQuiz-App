const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/Quiz",
    "/Question",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7123',
        secure: false
    });

    app.use(appProxy);
};
