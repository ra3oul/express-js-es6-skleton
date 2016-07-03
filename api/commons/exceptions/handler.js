export default {
    handle(err, req, res, next)
    {

        //switch between application exception

        switch (err.status) {
            case 400 :
                res.status(400).json(
                    err
                )
                break;
            case 401 :
                res.status(401).send(
                    {
                        status: 401,
                        status_text: err.message,
                        error: []
                    }
                )
                break;
            case 500 :
                res.status(500).send(
                    {
                        status: 401,
                        status_text: err.message,
                        error:err
                    }
                );
                break;
            default :
                res.status(500).send(
                    {
                        status: 500,
                        status_text: err.message,
                        error:err
                    }
                );
                break;
        }

    }
}