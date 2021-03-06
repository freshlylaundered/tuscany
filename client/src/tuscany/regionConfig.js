const INN = "inn",
  FARM = "farm",
  MONASTERY = "monastery",
  QUARRY = "quarry",
  CASTLE = "castle",
  VILLAGE = "village",
  WAGON = "wagon",
  CITY = "city";

const regionConfigurations = {
  A: [
    [INN, FARM, MONASTERY, QUARRY, VILLAGE, CITY, CASTLE, FARM, VILLAGE, WAGON],
    [MONASTERY, FARM, VILLAGE, QUARRY, CASTLE, VILLAGE, WAGON, INN, FARM, CITY],
    [FARM, MONASTERY, QUARRY, WAGON, CASTLE, VILLAGE, VILLAGE, INN, CITY, FARM],
    [QUARRY, MONASTERY, FARM, FARM, INN, CASTLE, VILLAGE, CITY, WAGON, VILLAGE],
  ],
  B: [
    [
      FARM,
      QUARRY,
      CASTLE,
      FARM,
      QUARRY,
      WAGON,
      VILLAGE,
      VILLAGE,
      CITY,
      MONASTERY,
    ],
    [
      QUARRY,
      QUARRY,
      MONASTERY,
      VILLAGE,
      CITY,
      CASTLE,
      VILLAGE,
      FARM,
      FARM,
      WAGON,
    ],
    [
      QUARRY,
      MONASTERY,
      VILLAGE,
      QUARRY,
      CITY,
      FARM,
      CASTLE,
      WAGON,
      VILLAGE,
      FARM,
    ],
    [
      MONASTERY,
      CASTLE,
      QUARRY,
      VILLAGE,
      FARM,
      QUARRY,
      VILLAGE,
      FARM,
      CITY,
      WAGON,
    ],
  ],
  C: [
    [
      FARM,
      WAGON,
      QUARRY,
      CITY,
      MONASTERY,
      WAGON,
      VILLAGE,
      MONASTERY,
      INN,
      CASTLE,
    ],
    [
      MONASTERY,
      MONASTERY,
      FARM,
      CASTLE,
      INN,
      WAGON,
      WAGON,
      QUARRY,
      VILLAGE,
      CITY,
    ],
    [
      QUARRY,
      FARM,
      CITY,
      WAGON,
      CASTLE,
      INN,
      VILLAGE,
      WAGON,
      MONASTERY,
      MONASTERY,
    ],
    [
      INN,
      CASTLE,
      QUARRY,
      MONASTERY,
      MONASTERY,
      WAGON,
      WAGON,
      FARM,
      CITY,
      VILLAGE,
    ],
  ],
};

export const getArray = (A, B, C) => {
  return [
    ...regionConfigurations.A[A],
    ...regionConfigurations.B[B],
    ...regionConfigurations.C[C],
  ];
};
