import {ChildProcess, spawn} from 'child_process';

//
// document modelling
//




// Most of this is just dummy functionality for now.

export interface IDocument {
    id: string;                // Unique identifier for the document.
    title: string;             // Human-readable title of the document.
    path: string;              // Human-readable file path to the document.
};

export interface IDocumentAttributes {
    id: string;                // Unique identifier for the document. Format TBD
    title: string;             // Human-readable title of the document.
    path: string;              // Human-readable file path to the document.
    createdAt: string;       // ISO string representing when the document was created.
    updatedAt: string;       // ISO string representing when the document was last updated.
    createdBy: string;       // User ID of the document creator.
    updatedBy: string;       // User ID of the document updater.
};

/** Returns an array of all the documents that user is entitled to see */
export function getDocuments(_userId:string):IDocument[]{
    const dummyDocument: IDocument = {
        id: "<account id>/60607154-b56e-4df2-a16f-169757ff1d25",
        title: "My First Model",
        path: "myDocuments/model1.json"
    };
    return [dummyDocument];
}

/** Returns metadata for a specific document */
export function getDocument(_documentId:string):IDocumentAttributes{
    const dummyAttributes: IDocumentAttributes = {
        id: "<account id>/60607154-b56e-4df2-a16f-169757ff1d25",
        title: "My First Model",
        path: "myDocuments/model1.json",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: "<user id>",
        updatedBy: "<user id>"
    };
    return dummyAttributes;
}

/** creates a new document  */
export function createDocument(userId:string, attributes:Partial<IDocumentAttributes>):IDocumentAttributes{
    const newDocument: IDocumentAttributes = {
        id: "<account id>/60607154-b56e-4df2-a16f-169757ff1d25",
        title: attributes?.title || "Untitled Document",
        path: "myDocuments/documentX.json",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: userId,
        updatedBy: userId
    };
    return newDocument;
}

//
// modelling service
// // TODO: put this in modelling/actions.ts

const modellingServicePath = '../../engines/build/e2_modellingService';
let modellingService = spawn(modellingServicePath);

let responseReceived = new Promise<string>((resolve, reject) => {
    modellingService.stdout.on('data', (data) => {
        resolve(data.toString());
    });
});


/** dispatches the specified action to the modelling service and waits for a response */
export async function dispatchAction(action: { type: string; payload: any }) : Promise<string> {

    // in future this will be async and implemented completely differently, probably communicating with the client over a web socket.
    // There will just be a handshake in the api.

    console.log(`Dispatching modelling action: ${action.type}`);

    let responseData = 'failure';

    // Send an action to the modelling service
    modellingService.stdin.write(JSON.stringify(action) + '\n');

    // Wait for the response from the modelling service
    const data = await responseReceived;

    console.log(`Returning response: ${data}`);

    return data;
}


