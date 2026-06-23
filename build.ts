import tailwind from "bun-plugin-tailwind";
import { rm, mkdir, cp } from "node:fs/promises";
import { join } from "node:path";

const outdir = join(import.meta.dir, "dist");

await rm(outdir, { recursive: true, force: true });
await mkdir(outdir, { recursive: true });

const result = await Bun.build({
  entrypoints: [join(import.meta.dir, "index.html")],
  outdir,
  target: "browser",
  minify: true,
  sourcemap: "linked",
  plugins: [tailwind],
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

// Copy the public/images assets (referenced by absolute "/images/..." runtime
// paths in the components) alongside the bundled output.
await cp(join(import.meta.dir, "public", "images"), join(outdir, "images"), {
  recursive: true,
});

console.log(`✅ Build complete → ${outdir}`);
for (const artifact of result.outputs) {
  console.log(`  ${artifact.path}`);
}
