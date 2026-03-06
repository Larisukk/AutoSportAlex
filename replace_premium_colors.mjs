import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.astro')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('d:/alex/src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Global Backgrounds & Surface replacements
    content = content.replace(/bg-brand-navy/g, 'bg-autosport-navy-dark');
    content = content.replace(/bg-slate-800\/50/g, 'bg-autosport-surface hover:bg-white/10');
    content = content.replace(/bg-slate-800/g, 'bg-autosport-navy');
    content = content.replace(/bg-brand-light/g, 'bg-slate-50'); // Keep light mode backgrounds clean

    // Borders
    content = content.replace(/border-slate-700\/50/g, 'border-autosport-border');
    content = content.replace(/border-slate-800/g, 'border-autosport-border');
    content = content.replace(/border-brand-accent\/20/g, 'border-autosport-border');
    content = content.replace(/border-brand-accent/g, 'border-autosport-red');
    content = content.replace(/ring-brand-red\/30/g, 'ring-autosport-red/30');
    content = content.replace(/border-brand-red\/30/g, 'border-autosport-red/30');

    // Text colors (Dark background context)
    content = content.replace(/text-slate-300/g, 'text-text-muted');
    content = content.replace(/text-slate-400/g, 'text-text-muted');
    content = content.replace(/hover:text-white/g, 'hover:text-text-on-dark');
    content = content.replace(/text-white/g, 'text-text-on-dark');
    content = content.replace(/text-brand-navy/g, 'text-autosport-navy');

    // Primary Red & Accents
    content = content.replace(/text-brand-accent/g, 'text-autosport-red');
    content = content.replace(/bg-brand-accent/g, 'bg-autosport-red');
    content = content.replace(/hover:bg-amber-400/g, 'hover:bg-autosport-red-hover');
    content = content.replace(/hover:bg-red-500/g, 'hover:bg-autosport-red-hover');

    content = content.replace(/text-brand-red/g, 'text-autosport-red');
    content = content.replace(/bg-brand-red/g, 'bg-autosport-red');
    content = content.replace(/border-brand-red/g, 'border-autosport-red');

    // Fix header hover text issues
    content = content.replace(/hover:text-autosport-red hover:bg-brand-light/g, 'hover:text-autosport-red hover:bg-slate-50');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
