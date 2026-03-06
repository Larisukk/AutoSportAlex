import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'd:/alex/public/images/logo.png';
const outputPath = 'd:/alex/public/images/logo.webp';

async function convert() {
    try {
        await sharp(inputPath)
            .webp({ quality: 90 })
            .toFile(outputPath);
        console.log('Successfully converted logo to webp!');
        // Keep the original just in case they want it, or delete it? Let's keep it safe.
    } catch (error) {
        console.error('Error converting logo:', error);
    }
}

convert();
