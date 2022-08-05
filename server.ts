import App from "./src/app";

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = new App(PORT);

app.listen();
