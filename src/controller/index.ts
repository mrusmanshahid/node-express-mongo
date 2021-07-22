import * as express from 'express';
import recordModel from '../models/record.model';
import { Record } from './../interfaces';
import {groupedRecords, filteredRecords} from './../helpers/records_helpers';
import {validationResult } from 'express-validator';
import * as responseBuilder from './../helpers/response';

export default class RecordController {
   
    //create record
    public createRecord = async (req: express.Request, res: express.Response) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return responseBuilder.validatationFailed(res, errors);
            const recordData: Record = req.body;
            const record = new recordModel(recordData);
            const savedRecord = await record.save();
            if (savedRecord) {
                responseBuilder.success(res,savedRecord);
            }
        } catch (err) {
            responseBuilder.exception(res,err);
        }
    }

    //get records
    public getRecords = async (req: express.Request, res: express.Response) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return responseBuilder.validatationFailed(res, errors);
            const records = await recordModel.find({
                createdAt: {
                    $gte: req?.body?.startDate, 
                    $lt: req?.body?.endDate
                }
            });
            if (records) {
                const _groupedRecords = groupedRecords(records);
                const _filteredRecords = filteredRecords(_groupedRecords, req?.body?.minCount, req?.body?.maxCount)
                responseBuilder.success(res,_filteredRecords);
            }
        } catch (err) {
            responseBuilder.exception(res,err);
        }
    }
   
}
