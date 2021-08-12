import * as expressWinston from 'express-winston';
import * as winston from 'winston';
import * as moment from 'moment';
import { loadConfig } from './config';
const config = loadConfig();
const tsFormat = (ts) => moment(ts).format('YYYY-MM-DD HH:mm:ss').trim();
const logger = expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), winston.format.printf(info => {
        return `-> ${tsFormat(info.timestamp)}: ${info.message}`;
    })),
    meta: false,
    // msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) {
        if (req.path.startsWith('/json'))
            return true; // debugger
        return false;
    } // optional: allows to skip some log messages based on request and/or response
});
export default logger;
const logging = {
    Express: config.logging && config.logging.includes('EXPRESS'),
    Lightning: config.logging && config.logging.includes('LIGHTNING'),
    Meme: config.logging && config.logging.includes('MEME'),
    Tribes: config.logging && config.logging.includes('TRIBES'),
    Notification: config.logging && config.logging.includes('NOTIFICATION'),
    Network: config.logging && config.logging.includes('NETWORK'),
    DB: config.logging && config.logging.includes('DB'),
};
export { logging };
//# sourceMappingURL=logger.js.map