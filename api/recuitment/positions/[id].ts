import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    // Harcoded Url For simplicty of deployment
    const data = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${request.query.id}`
    );
    return response.end(
      JSON.stringify({
        query: request.query,
        data: data.data,
        message: "Succesfuly retrieve data",
      })
    );
  } catch (error) {
    return response.status(404).json({ message: "Data Not found" });
  }
}
