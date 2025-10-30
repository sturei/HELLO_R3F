import express from "express";
import ViteExpress from "vite-express";

import {getDocuments, getDocument, createDocument, dispatchAction, IDocumentAttributes} from "./modelling/document.js";

const app = express();
app.use(express.json());  

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.get("/documents", (req, res) => {
    const userId = "dummy-user-id";
    console.log(`Fetching documents for user: ${userId}`);
    const documents = getDocuments(userId);
    res.json(documents);
});

app.get("/documents/:documentId", (req, res) => {
  const documentId = req.params.documentId;
  console.log(`Fetching document with ID: ${documentId}`);
  const document = getDocument(documentId);
  res.json(document);
});

/** Dispatch an action to the modelling service */
app.post("/modelling/actions", async (req, res) => {
  const action = req.body;
  const response = await dispatchAction(action);
  res.status(201).json({response:response});
});



