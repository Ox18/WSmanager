import { Request, Response } from 'express';

class Controller{
    public getIndex(_req: Request, res: Response){
        res.json({text: 'Content is here'});
    }
    public postIndex(_req: Request, res: Response){
        res.json({text: 'Content is here'});
    }
}

export default Controller;