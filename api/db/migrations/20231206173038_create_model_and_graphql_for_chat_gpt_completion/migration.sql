-- CreateTable
CREATE TABLE "Completion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resume" TEXT NOT NULL,
    "aboutJob" TEXT,
    "aboutCompany" TEXT,
    "messages" TEXT NOT NULL
);
