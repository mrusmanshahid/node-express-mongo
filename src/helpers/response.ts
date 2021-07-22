
export const validatationFailed = (res: any, errors: any) => {
    res.status(400)
    .json({ 
        code:400,
        msg:"Validation Failed",
        records: [],
        errors: errors.array(),
    });
}

export const exception = (res: any, response: any) => {
    res.status(500)
    .json({ 
        code:500,
        msg:"Internal Server Error!",
        records: [],
        errors: response,
    });
}

export const success = (res: any, records: any) => {
    res.status(200)
    .json({ 
        code:0,
        msg:"Success",
        records: records,
    });
}