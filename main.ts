import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `My father left me the key
with the engine running.

I can go anywhere.
That is the trouble.

I sit where he sat,
hand on the key, learning
what he did at this curb
for forty years:

turn the car off
and call it arriving.`;

// A key left with the engine running: freedom to go, and the trouble of it.
// He spent forty years at this curb learning the quieter art of staying.
// Arriving is not the miles covered but the moment the hand lets go.
// Power handed down is only power once we choose when to stop.
// The last line turns the whole poem toward that small, deliberate act.
function describeOutput(outDir: string, chars: number): string {
  return `Wrote ${chars} code points to ${join(outDir, 'entry.txt')}`;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, poem, 'utf8');
process.stderr.write(describeOutput(outDir, [...poem].length) + '\n');
