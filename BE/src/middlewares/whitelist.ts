
const whitelist =  {
    clientOptionsLimited : {
        origin: ['https://adriantori-w15-a.vercel.app', 'https://adriantori-w15-b.vercel.app'],
        methods:['GET','POST']
    },
    clientOptionsGlobal : {
        origin: ['https://adriantori-w15-b.vercel.app','http://localhost:5173'],
        methods:['GET','POST','PUT','DELETE', 'PATCH'],
        credentials: true,  // Allow credentials (cookies) to be sent
    }
}

export default whitelist