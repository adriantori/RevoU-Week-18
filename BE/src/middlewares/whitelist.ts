
const whitelist =  {
    clientOptionsGlobal : {
        origin: ['https://adriantori-w15-b.vercel.app','http://localhost:5173'],
        methods:['GET','POST','PUT','DELETE', 'PATCH'],
        allowedHeaders: ['Authorization', 'Content-Type'],
    }
}

export default whitelist