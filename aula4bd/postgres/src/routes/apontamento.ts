import { Router } from "express";
import { list } from "../controllers/apontamento";

const router = Router();

router.get("/", list);

export default router;