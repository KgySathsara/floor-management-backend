import { db } from '../config/dbConfig';
import { Table } from '../types/table';
import { Request, Response } from 'express';
import * as TableModel from '../models/tableModel';

export const getAllTables = async (): Promise<Table[]> => {
  const [rows] = await db.query('SELECT * FROM tables');
  return rows as Table[];
};

export const getTableById = async (id: number): Promise<Table | null> => {
  const [rows] = await db.query('SELECT * FROM tables WHERE id = ?', [id]);
  return (rows as Table[])[0] || null;
};

export const createTable = async (table: Table): Promise<void> => {
    const {
      name = 'Default Table', // Provide a default name
      type = 'square',        // Provide a default type
      minCovers = 1,          // Default minCovers
      maxCovers = 4,          // Default maxCovers
      active = true           // Default active state
    } = table;
  
    await db.query(
      'INSERT INTO tables (name, type, minCovers, maxCovers, active) VALUES (?, ?, ?, ?, ?)',
      [name, type, minCovers, maxCovers, active]
    );
  };

export const updateTable = async (id: number, table: Table): Promise<void> => {
  await db.query(
    'UPDATE tables SET name = ?, type = ?, minCovers = ?, maxCovers = ?, active = ? WHERE id = ?',
    [table.name, table.type, table.minCovers, table.maxCovers, table.active, id]
  );
};

export const deleteTable = async (id: number): Promise<void> => {
  await db.query('DELETE FROM tables WHERE id = ?', [id]);
};
