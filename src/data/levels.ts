import { NoteName, getNoteAtFret } from '../utils/musicTheory';

export type Level = {
    id: number;
    label: string;
    stringIndex: number;
    fret: number;
    targetNote: NoteName;
    targetOctave: number;
};

function buildLevel(
    id: number,
    label: string,
    stringIndex: number,
    fret: number,
): Level {
    const { note, octave } = getNoteAtFret( stringIndex, fret );
    return {
        id,
        label,
        stringIndex,
        fret,
        targetNote: note,
        targetOctave: octave,
    }
}

export const LEVELS: Level[] = [
    buildLevel(1, 'Corda 6 - E', 0 , 0),
    buildLevel(2, 'Corda 5 - A', 1 , 0),
    buildLevel(3, 'Corda 4 - D', 2 , 0),
    buildLevel(4, 'Corda 3 - G', 3 , 0),
    buildLevel(5, 'Corda 2 - B', 4 , 0),
    buildLevel(6, 'Corda 1 - E', 5 , 0),
]