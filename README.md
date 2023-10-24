# RevoU - Milestone 3

Creates full-stack application using React, Express, and deploy on Firebase / GCP.

In this case, I made a joke app for Debt Collectors. Hopefully, this app wont be used as its pretty messed up lol.

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
