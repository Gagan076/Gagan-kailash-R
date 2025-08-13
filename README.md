# Student Database App

A full-stack CRUD application for managing student data.

## Tech Stack
- Frontend: HTML, CSS, JavaScript (with SweetAlert2 for modals)
- Backend: Node.js, Express, SQLite
- Containerization: Docker
- CI/CD: Jenkins
- Database: SQLite (students.db created on startup with sample data)

## Setup and Run Locally
1. Install Node.js (v18+).
2. Navigate to `backend/` and run:
   ```
   npm install
   npm start
   ```
3. Open `http://localhost:3000/index.html` in a browser.

## Features
- View, search, add, edit, delete students.
- API endpoints: `/api/students` (GET all, POST new), `/api/students/:id` (GET one, PUT update, DELETE).

## Docker Run
Build:
```
docker build -t yourusername/student-database-app .
```
Run:
```
docker run -p 3000:3000 yourusername/student-database-app
```
Access: `http://localhost:3000/index.html`

## Jenkins CI
- Requires Docker Hub credentials in Jenkins ('dockerhub-creds').
- Pipeline: Clone repo, check README, build/push Docker image.

## Demonstration
1. Run the app locally or via Docker.
2. Use the search box to filter the table.
3. Click "Add Student" to create new entries via modal.
4. Edit/Delete buttons per row for updates/removals.
5. For a visual (e.g., screenshot), open the app in a browser and capture the page.

## Documentation
- A detailed PDF documentation with diagrams is available in `docs/Student_Database_App_Documentation_With_Diagrams.tex`.
- Compile using `latexmk -pdf` or an online LaTeX editor like Overleaf.

For further customization or issues, contact the developer.
