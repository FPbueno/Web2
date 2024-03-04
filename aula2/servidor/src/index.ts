import express, {Request,Response} from "express";//aqui nos chamamos o express o request e os response para fazermos a resposta do servidor;
import dotenv from "dotenv";//chamamos o dotenv para que eu posso mudar coisas como a port la e as informações sao passadas para esse documento
import routes from "./routes";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.listen(PORT,function(){
    console.log(`Rodando na porta ${PORT}...`);
});


app.use(routes);