
export const totalCount = (counts: any) => {
   const total = counts.reduce((a: any, b: any) => a + b, 0);
   return total;
}

export const groupedRecords = (records: any) => {
    const recordsWithTotalCount = records.map(addTotalCount);
    return recordsWithTotalCount;
}

export const filteredRecords = (_groupedRecords: any, minCount: number, maxCount: number) => {
    return _groupedRecords.filter((x:any)=>x.totalCount >= minCount && x.totalCount <= maxCount);
}

const addTotalCount = (obj: any) => {
    return {
        key:obj['key'], 
        createdAt: obj['createdAt'], 
        totalCount: totalCount(obj['counts'])
    }
}
