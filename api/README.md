# Api - DevJournal

This is the backend API for the **DevJournal** project, allowing users to create, list, view, edit, and delete their daily journal entries. The API is built using **Node.js**, **Express**, and **MongoDB**.

## Table of Contents

1. [Overview](#overview)
2. [API Endpoints](#api-endpoints)
3. [Error Handling](#error-handling)

---

## Overview

The **DevJournal** API provides a simple RESTful interface for developers to interact with their journal entries. The API allows users to:

- Create a journal entry.
- List all journal entries.
- View a specific journal entry.
- Edit an existing journal entry.
- Delete a journal entry.

The application uses **MongoDB** as the database to store journal entries and **Node.js**/**Express** for handling the backend operations.

---

## API Endpoints

| Method | Route         | Description                         | Controller Function         |
|--------|---------------|-------------------------------------|-----------------------------|
| POST   | `/create`     | Create a new journal entry          | `create_journal`            |
| GET    | `/list`       | List all journal entries            | `list_journals`             |
| GET    | `/view`       | View a specific journal entry       | `view_Journal`              |
| DELETE | `/delete`     | Delete a journal entry              | `delete_journal`            |
| PUT    | `/edit`       | Edit a journal entry                | `edit_Journal`              |

---

## Error Handling

Here are some of the potential error responses returned by the API:

- **400 - Bad Request**: The request is malformed or missing required data.
- **404 - Not Found**: The requested resource (e.g., a journal entry) could not be found.
- **409 - Conflict**: A journal entry already exists for the specified date.
- **500 - Internal Server Error**: An unexpected error occurred on the server.

