import { join } from "node:path";
import homepage from "../index.html";

const PUBLIC_DIR = join(import.meta.dir, "..", "public");
const isProd = process.env.NODE_ENV === "production";

const server = Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  development: isProd
    ? false
    : {
        hmr: true,
        console: true,
      },

  routes: {
    "/": homepage,
  },

  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname.startsWith("/images/")) {
      const file = Bun.file(join(PUBLIC_DIR, url.pathname));
      if (await file.exists()) {
        return new Response(file);
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`🚀 UNNI landing page running at ${server.url}`);
