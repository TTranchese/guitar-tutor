import { NoteName, getNoteAtFret } from '../utils/musicTheory';

export type Level = {
  id: number;
  label: string;
  stringIndex: number; // 0..5 (0 = corda 6)
  fret: number;
  targetNote: NoteName;
  targetOctave: number;
};

function buildLevel(
  id: number,
  label: string,
  stringIndex: number,
  fret: number
): Level {
  const { note, octave } = getNoteAtFret(stringIndex, fret);
  return {
    id,
    label,
    stringIndex,
    fret,
    targetNote: note,
    targetOctave: octave,
  };
}

export const LEVELS: Level[] = [
  buildLevel(1, 'Corda 6 – Mi (a vuoto)', 0, 0),
  buildLevel(2, 'Corda 5 – La (a vuoto)', 1, 0),
  buildLevel(3, 'Corda 4 – Re (a vuoto)', 2, 0),
  buildLevel(4, 'Corda 3 – Sol (a vuoto)', 3, 0),
  buildLevel(5, 'Corda 2 – Si (a vuoto)', 4, 0),
  buildLevel(6, 'Corda 1 – Mi cantino (a vuoto)', 5, 0),
];