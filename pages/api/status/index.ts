import { NextApiRequest, NextApiResponse } from "next";
import { cors, runMiddleware } from "@/middleware/apiCorsMiddleware";

export default async function status(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  if (req.method !== "GET") {
    const metodo: string = req.method ?? "Indefinido";
    return res
      .status(405)
      .json({ Error: `Verbo HTTP: => ${metodo} não suportado.` });
  }
  return res.status(200).json({ Success: "Api em funcionamento." });
}
