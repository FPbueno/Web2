import { Router } from "express";
import { list } from "../controllers/grade";

const router = Router();

router.get("/", list);

export default router;