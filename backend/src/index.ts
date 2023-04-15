import express, {Request, Response} from "express";

const app = express();

const appPort = 8080;

// 1) Create and connect AWS S3 Bucket
// 2) Create a file upload route
// 3) Create a route for getting the files

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(appPort, () => console.log(`Hello to port ${appPort}.`));