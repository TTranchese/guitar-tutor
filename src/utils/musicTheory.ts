export type NoteName = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export const NOTES: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const OPEN_STRINGS: NoteName[] = ['E', 'A', 'D', 'G', 'B', 'E'];

export const OPEN_STRING_OCTAVES: Record<number, number> = {
    0: 2,
    1: 2,
    2: 3,
    3: 3,
    4: 3,
    5: 4
}

export function getNoteAtFret( stringIndex: number, fret: number ): {
    note: NoteName;
    octave: number;
} {
    const openNoteIndex = NOTES.indexOf( OPEN_STRINGS[stringIndex] );
    const noteIndex = ( openNoteIndex + fret ) % 12;
    const note = NOTES[noteIndex];

    const octaveIncrease = Math.floor( ( openNoteIndex + fret ) / 12 );
    const baseOctave = OPEN_STRING_OCTAVES[stringIndex];
    const octave = baseOctave + octaveIncrease;

    return { note, octave };
}