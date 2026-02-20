const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Source assets folder (relative to repo root)
const SRC_DIR = path.resolve(__dirname, '../src/assets');
const OUT_DIR = path.resolve(SRC_DIR, 'optimized');

const widths = [400, 800, 1200];
const formats = ['webp', 'avif'];

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function processFile(file) {
    const rel = path.relative(SRC_DIR, file);
    const parsed = path.parse(rel);
    const destFolder = path.join(OUT_DIR, parsed.dir);
    await ensureDir(destFolder);

    const input = file;
    // generate placeholder (tiny jpg) and multiple widths in webp+avif
    try {
        // small placeholder
        const placeholderPath = path.join(destFolder, `${parsed.name}-placeholder.jpg`);
        await sharp(input).resize(20).jpeg({ quality: 40 }).toFile(placeholderPath);

        for (const w of widths) {
            for (const fmt of formats) {
                const outName = `${parsed.name}-w${w}.${fmt}`;
                const outPath = path.join(destFolder, outName);
                await sharp(input).resize(w).toFormat(fmt, { quality: 70 }).toFile(outPath);
            }
        }

        console.log('Processed', rel);
    } catch (err) {
        console.error('Failed for', rel, err.message);
    }
}

async function main() {
    await ensureDir(OUT_DIR);
    const pattern = path.join(SRC_DIR, '**/*.{jpg,jpeg,png}');
    const files = glob.sync(pattern, { nodir: true });
    console.log('Found', files.length, 'images');
    for (const f of files) {
        await processFile(f);
    }
    console.log('Done');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
