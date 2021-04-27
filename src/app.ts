import http from 'http';
import express from 'express';
import {oddPosAverage, cleanQueryInput} from './util';

export const app = express();
const port = process.env.PORT ?? 8080;


app.get( "/", ( req, res ) => {
    res.json({ 
        "output": oddPosAverage(cleanQueryInput(req.query.input))
    });
} );


export async function startServer(): Promise<http.Server> {
    return app.listen( port, () => {
        /* istanbul ignore next */
        if (process.env.NODE_ENV !== 'test') console.log( `server started at http://localhost:${ port }` );
    } );
}

// Only start server if this file is being run and not imported for test suite
if (process.env.NODE_ENV !== 'test') {
    /* istanbul ignore next */
    (async function() {
        console.log("STARTING SERVER...");
        await startServer();
    })();    
}
