import chalk from 'chalk';

const loggingMiddleware = (req, res, next) => {
    const currentTime = new Date().toISOString();
    const { method, url } = req;

    // MENGATUR WARNA UNTUK HTTP METHOD
    let coloredMethod;
    switch (method) {
        case 'GET':
            coloredMethod = chalk.black.bgGreen(` ${method} `);
            break;
        case 'POST':
            coloredMethod = chalk.black.bgBlue(` ${method} `);
            break;
        case 'PUT':
            coloredMethod = chalk.black.bgYellow(` ${method} `);
            break;
        case 'DELETE':
            coloredMethod = chalk.black.bgRed(` ${method} `);
            break;
        case 'PATCH':
            coloredMethod = chalk.black.bgMagenta(` ${method} `);
            break;
        default:
            coloredMethod = chalk.black.bgWhite(` ${method} `);
    }

    // MENGATUR DURASI RESPON
    const startTime = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        const statusCode = res.statusCode;

        // MENGATUR WARNA STATUS CODE
        let coloredStatus;
        if (statusCode >= 200 && statusCode < 300) {
            coloredStatus = chalk.black.bgGreen(` ${statusCode} `);         // 2xx: Hijau
        } else if (statusCode >= 300 && statusCode < 400) {
            coloredStatus = chalk.black.bgYellow(` ${statusCode} `);        // 3xx: Kuning
        } else if (statusCode >= 400 && statusCode < 500) {
            coloredStatus = chalk.black.bgRed(` ${statusCode} `);           // 4xx: Merah
        } else {
            coloredStatus = chalk.white.bgRed(` ${statusCode} `);           // 5xx: Merah terang
        }

        // MENGATUR WARNA DURASI
        let coloredDuration;
        if (duration < 50) {
            coloredDuration = chalk.black.bgGreen(` ${duration}ms `);       // Sangat cepat
        } else if (duration < 100) {
            coloredDuration = chalk.black.bgCyan(` ${duration}ms `);        // Cepat
        } else if (duration < 200) {
            coloredDuration = chalk.black.bgYellow(` ${duration}ms `);      // Sedang
        } else if (duration < 400) {
            coloredDuration = chalk.black.bgRed(` ${duration}ms `);         // Lambat
        } else {
            coloredDuration = chalk.white.bgRed(` ${duration}ms `);         // Sangat lambat
        }

        // MENGATUR FORMAT
        const logFormat = `${currentTime} - ${coloredMethod} - ${coloredStatus} - ${coloredDuration} - request to ${url}` ;
        console.log(logFormat);
    });

    next();
};

export default loggingMiddleware;
