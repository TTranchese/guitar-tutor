export type NoteName = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export const NOTES: NoteName[] = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

// 6ª corda (mi basso) → 1ª corda (mi cantino)
export const OPEN_STRINGS: NoteName[] = ['E','A','D','G','B','E'];

export const OPEN_STRING_OCTAVES: Record<number, number> = {
  0: 2, // corda 6
  1: 2, // corda 5
  2: 3, // corda 4
  3: 3, // corda 3
  4: 3, // corda 2
  5: 4, // corda 1
};

export function getNoteAtFret(stringIndex: number, fret: number): { note: NoteName; octave: number } {
  const openNoteIndex = NOTES.indexOf(OPEN_STRINGS[stringIndex]);
  const noteIndex = (openNoteIndex + fret) % 12;
  const note = NOTES[noteIndex];

  const octaveIncrease = Math.floor((openNoteIndex + fret) / 12);
  const baseOctave = OPEN_STRING_OCTAVES[stringIndex];
  const octave = baseOctave + octaveIncrease;

  return { note, octave };
}

// Parser per stringhe tipo \"A2\", \"F#3\"
export function parseNoteWithOctave(input: string): { note: NoteName | null; octave: number | null } {
  const match = input.match(/^([A-G](?:#)?)(\d+)$/);
  if (!match) {
    return { note: null, octave: null };
  }
  const [, noteStr, octaveStr] = match;
  const octave = parseInt(octaveStr, 10) || null;
  const note = NOTES.includes(noteStr as NoteName) ? (noteStr as NoteName) : null;
  return { note, octave };
}