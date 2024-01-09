import fs from "fs/promises";

async function logging(req, res, next) {
  console.log(`IP:${req.ip}, Method: ${req.method}, Endpoint: ${req.baseUrl}`);
  try {
    await fs.appendFile(
      "./data/logs.txt",
      `IP:${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`
    );
  } catch (error) {
    console.log(error);
  }
  next();
}

export default logging;
