import * as mongoose from 'mongoose';
import { Record } from '../interfaces';

const RecordSchema = new mongoose.Schema({
    key: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: {
        type: [Number]
    }
}, {collection: 'records'}).set('timestamps', true);

const recordModel = mongoose.model<Record & mongoose.Document>('record', RecordSchema);

export default recordModel;
