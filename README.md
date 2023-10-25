# RevoU - Milestone 3

Creates full-stack application using React, Express, and deploy on Firebase / GCP.

In this case, I made a joke app for Debt Collectors. Hopefully, this app wont be used as its pretty messed up lol.

## Deployment Link:

Front-End: https://adriantori-m3.web.app

Back-End: https://us-central1-revou-batch-june.cloudfunctions.net/milestone_3_adriantori

## Back-End Explanations

In this segment, I'll try my best to explain my back-end codes and stuff.

### RBAC ( Role-Based Access Control )

In this code snippet, I differentiate between User and Admin role in UserController.ts.

Because there's no significant advantages between User and Admin, I combined role checks on GET, because the only advantages Admin have is they could fetch all data, while User can only fetch their own data.

Admin can't even Edit nor Update, so I dont even bothered making Authorization middleware tbh.

```js
if (roles == 'user') {
    try {
        const username = decodedToken.username;

        const post = await getUserTodoListService(username);
        res.status(200).json({
            message: 'Tasks retrieved successfully',
            data: post,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving post lists!'
        });
    }
} else if (roles == 'admin') {
    try {
        const post = await getTodoService();
        res.status(200).json({
            message: 'Tasks retrieved successfully',
            data: post,
        });
    } catch (error) {
        console.log("error createPost controller");
        res.status(500).json({
            message: 'Error retrieving posts'
        });
    }
}           
```

### Security

I have implemented Helmet to the *EXTREME* with practically every single options I could get (from chatGPT).

```js
const app = express();
app.use(helmet());
app.use(helmet.frameguard({ action: 'deny' }))
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://adriantori-m3.web.app"],
    },
  })
);
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
```

my Home page header for example:

```javascript
Request URL:
https://us-central1-revou-batch-june.cloudfunctions.net/milestone_3_adriantori/retrieve
Request Method:
GET
Status Code:
200 OK
Remote Address:
216.239.36.54:443
Referrer Policy:
strict-origin-when-cross-origin
Access-Control-Allow-Origin:
https://adriantori-m3.web.app
Alt-Svc:
h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
Cache-Control:
private
Content-Encoding:
gzip
Content-Length:
197
Content-Security-Policy:
default-src 'self';script-src 'self' 'unsafe-inline' https://adriantori-m3.web.app;base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
Content-Type:
application/json; charset=utf-8
Cross-Origin-Opener-Policy:
same-origin
Cross-Origin-Resource-Policy:
same-origin
Date:
Wed, 25 Oct 2023 13:01:47 GMT
Etag:
W/"15b-BmscskowYpjctwjLSWgEj2wsHf0"
Function-Execution-Id:
fbpodl8eyg6u
Origin-Agent-Cluster:
?1
Referrer-Policy:
no-referrer
Server:
Google Frontend
Strict-Transport-Security:
max-age=15552000; includeSubDomains
Vary:
Origin
X-Cloud-Trace-Context:
ecaea985a4f2872a66425ad95e52abe6
X-Content-Type-Options:
nosniff
X-Dns-Prefetch-Control:
off
X-Download-Options:
noopen
X-Frame-Options:
DENY
X-Permitted-Cross-Domain-Policies:
none
X-Xss-Protection:
0

```

## Front-End Explanations

I used [Material UI](https://mui.com) for my UI Library. why? because I want it.

Honesty, there's not much to explain here for now, because I used very simple site similar to Week 13 project, with addition of DatePicker from MUI for Due Date.
