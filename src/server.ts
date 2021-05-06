import { Server } from 'http';
import app from './app';

const port = 3001;

const server = app.listen(port, () => console.log(`App ouvindo na porta ${port}`));

process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado');
});