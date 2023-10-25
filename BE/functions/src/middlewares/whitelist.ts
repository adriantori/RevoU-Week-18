
const whitelist =  {
    clientOptionsGlobal : {
        origin: ['https://adriantori-m3.web.app','http://localhost:5173'],
        methods:['GET','POST','PUT','DELETE', 'PATCH'],
        allowedHeaders: ['Authorization', 'Content-Type'],
    }
}

export default whitelist