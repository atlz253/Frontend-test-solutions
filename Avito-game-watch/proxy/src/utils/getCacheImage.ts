import Downloader from "nodejs-file-downloader";
import { existsSync } from "fs";
import { resolve } from "path";

export async function getCacheImage(url: string) {
  const path = "." + url;

  if (!existsSync(resolve(__dirname, path))) {
    const downloader = new Downloader({
      url: new URL(url, "https://www.freetogame.com").href,
      directory: resolve(__dirname, path.split("/").slice(0, -1).join("/")),
      fileName: path.split("/").at(-1),
    });

    try {
      await downloader.download();

      console.log("Cache image: ", url);
    } catch (error) {
      console.log("Cache download failed: ", error);

      return url;
    }
  }

  return resolve(__dirname, path);
}
