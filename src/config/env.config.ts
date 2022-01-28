import dotenv from "dotenv";

function initLoadEnvFile() {
  const result = dotenv.config();

  if (result.error) { throw result.error; }
}

export default initLoadEnvFile;
