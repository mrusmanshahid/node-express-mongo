import {Router} from 'express';
import RecordController from '../controller';
import * as validators from '../helpers/records_validators'

const recordRouter: Router = Router();
const recordController = new RecordController();

recordRouter.post('/fetch', validators.getRecordsValidator, recordController.getRecords);
recordRouter.post('/create',validators.createRecordsValidator,recordController.createRecord);

export default recordRouter;
