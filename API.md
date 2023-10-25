# Milestone-3 API Documentation

This document provides an overview of the endpoints available in the MIlestone-3 API collection. This collection contains various endpoints related to user management and task management.

Makes sure to change {{base_url_m3}} variable to https://us-central1-revou-batch-june.cloudfunctions.net/milestone_3_adriantori AKA my back-end.

## Users

### 1. Register

- **Method:** POST
- **URL:** `{{base_url_m3}}/register`
- **Description:** Register a new user.
- **Request Body:**
  
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```
- **Authentication:** No authentication required.
- **Response:** [Response details not provided]

### 2. Login

- **Method:** POST
- **URL:** `{{base_url_m3}}/login`
- **Description:** Log in with an existing user.
- **Request Body:**
  
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```
- **Authentication:** No authentication required.
- **Response:** [Response details not provided]

## ToDos

### 3. Create

- **Method:** POST
- **URL:** `{{base_url_m3}}/create`
- **Description:** Create a new task.
- **Request Body:**
  
  ```json
  {
    "todoTask": "Tagih Zadine",
    "todoPriority": "low",
    "todoDue": "2023-10-21",
    "todoAmount": 100000
  }
  ```
- **Authentication:** Bearer token required (provided in `{{bearerApi}}` variable).
- **Response:** [Response details not provided]

### 4. Retrieve

- **Method:** GET
- **URL:** `{{base_url_m3}}/retrieve`
- **Description:** Retrieve a list of tasks.
- **Authentication:** Bearer token required (provided in `{{bearerApi}}` variable).
- **Response:** [Response details not provided]

### 5. Update

- **Method:** PATCH
- **URL:** `{{base_url_m3}}/update/1`
- **Description:** Update an existing task with ID 1.
- **Request Body:**
  
  ```json
  {
    "todoTask": "Palak Zinade",
    "todoPriority": "bing",
    "todoDue": "2023-10-21",
    "todoAmount": 100000
  }
  ```
- **Authentication:** Bearer token required (provided in `{{bearerApi}}` variable).
- **Response:** [Response details not provided]

### 6. Delete

- **Method:** DELETE
- **URL:** `{{base_url_m3}}/delete/1`
- **Description:** Delete a task with ID 1.
- **Authentication:** Bearer token required (provided in `{{bearerApi}}` variable).
- **Response:** [Response details not provided]

## Test

### 7. Test

- **Method:** GET
- **URL:** `{{base_url_m3}}/`
- **Description:** A test endpoint to check the availability of the API.
- **Authentication:** No authentication required.
- **Response:** [Response details not provided]

Please note that specific response details and error handling are not provided in this document. The actual behavior and response structure may vary depending on the implementation of the API.
