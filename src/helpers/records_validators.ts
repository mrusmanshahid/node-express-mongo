import { body } from 'express-validator';

export const getRecordsValidator = 
[
    body('minCount', 'minCount should be provided and has to be a number').not().isEmpty().isNumeric(),
    body('maxCount', 'maxCount should be provided and has to be a number').not().isEmpty().isNumeric(),
    body('startDate', 'startDate should be provided and has to be a valid date').not().isEmpty().isDate(),
    body('endDate', 'endDate should be provided and has to be a valid date').not().isEmpty().isDate()
]

export const createRecordsValidator = 
[
    body('key', 'key should be provided').not().isEmpty(),
    body('counts', 'counts should be provided and has to be a number array').not().isEmpty().isArray(),
]