import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
dotenv.config();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API DOCUMENTATION',
            version: '1.0.0',
            description: '',
            contact: {
                name: 'YUDHA GINONG PRATIDINA',
                url: 'https://github.com/yudhaginongpratidina',
            },
        },
        servers: [
            {
                url: process.env.APPLICATION_BASE_URL,
                description: ``,
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                BearerAuth: [],
            },
        ],
    },
    apis: ['./domain/**/*.js'],
};

const specs = swaggerJsdoc(options);
export { specs };
