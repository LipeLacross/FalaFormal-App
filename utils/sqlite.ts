import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app.db');

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS conectivos (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, conectivo TEXT, frase_exemplo TEXT);',
            [],
            () => { console.log('Tabela conectivos criada'); },
            (_, error) => { console.log('Erro ao criar tabela:', error); return false; }
        );
    });
};

export const insertConectivo = (tipo: string, conectivo: string, frase: string) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO conectivos (tipo, conectivo, frase_exemplo) VALUES (?, ?, ?);',
            [tipo, conectivo, frase],
            () => { console.log('Conectivo inserido'); },
            (_, error) => { console.log('Erro ao inserir conectivo:', error); return false; }
        );
    });
};

export const getConectivos = (callback: (rows: any) => void) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM conectivos;',
            [],
            (_, { rows }) => callback(rows._array),
            (_, error) => { console.log('Erro ao recuperar conectivos:', error); return false; }
        );
    });
};
