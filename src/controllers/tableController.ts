import { Request, Response } from 'express';
import * as TableModel from '../models/tableModel';

export const getTables = async (req: Request, res: Response): Promise<void> => {
  const tables = await TableModel.getAllTables();
  res.status(200).json(tables);
};

export const getTable = async (req: Request, res: Response): Promise<void> => {
  const table = await TableModel.getTableById(Number(req.params.id));
  table ? res.status(200).json(table) : res.status(404).json({ message: 'Table not found' });
};

export const createTable = async (req: Request, res: Response): Promise<void> => {
  await TableModel.createTable(req.body);
  res.status(201).json({ message: 'Table created successfully' });
};

export const updateTable = async (req: Request, res: Response): Promise<void> => {
  await TableModel.updateTable(Number(req.params.id), req.body);
  res.status(200).json({ message: 'Table updated successfully' });
};

export const deleteTable = async (req: Request, res: Response): Promise<void> => {
  await TableModel.deleteTable(Number(req.params.id));
  res.status(200).json({ message: 'Table deleted successfully' });
};
