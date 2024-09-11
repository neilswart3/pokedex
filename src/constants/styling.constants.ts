// const generateRemValues = <T extends number[]>(payload: T): number[] =>
//   payload.reduce(
//     (acc: number[], amount, index) => [
//       ...acc,
//       ...Array.from(Array(amount).keys()).map(
//         (i) => i * 2 ** (index - 1) + (acc.at(-1) || 0) + 2 ** (index - 1),
//       ),
//     ],
//     [] as number[],
//   );

export const REM_VALUES = [
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;
