import app from './app';
import http = require('http');

const httpApp = new http.Server(app);


const server = httpApp.listen(app.get("port"), () => {
    console.log(
        "Application is runnig on http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
});

export default server;