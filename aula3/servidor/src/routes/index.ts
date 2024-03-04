import { Router } from "express";
import matematica from "../routes/matematica";
import texto from "../routes/texto"

const router = Router();

router.use("/matematica", matematica);
router.use("/texto", texto);

export default router;
