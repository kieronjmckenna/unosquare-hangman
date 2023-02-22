-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Guess" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "letter" TEXT NOT NULL,
    "hangmanGameId" INTEGER,
    CONSTRAINT "Guess_hangmanGameId_fkey" FOREIGN KEY ("hangmanGameId") REFERENCES "Game" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
