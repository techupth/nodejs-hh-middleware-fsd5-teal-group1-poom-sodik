import fs from "fs/promises";
async function logging(req, res, next) {
  try {
    const log = `IP : ${req.ip}, Method : ${req.method}, Endpoint : ${req.originalUrl}\n`;
    await fs.appendFile("log.txt", log);
  } catch {
    const errLog = `Error on IP : ${req.ip}, Method : ${req.method}, Endpoint : ${req.originalUrl}\n`;
    await fs.appendFile("log.txt", errLog);
  }
  next();
}

export default logging;
