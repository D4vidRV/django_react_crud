# Django-React CRUD

This is a project that utilizes Python and Django on the backend and React on the frontend, allowing for a CRUD of pending tasks.

## Used Technologies

- Django: Backend framework
- React: Frontend library
- Tailwind: CSS framework

## Description

This application is an example of integration between Django on the Backend and React on the Frontend, enabling the registration of pending tasks in a database. It provides typical CRUD operations such as Create, Read, Update, and Delete records.

## Environment Setup

To set up the development environment and install the required dependencies, follow these steps:

1. Clone the repository.

2. Create and activate a virtual environment.

3. Install Python dependencies from the `requirements.txt` file:
```pip install -r requirements.txt```

4. Run Django migrations to set up the database:
```python manage.py makemigrations && python manage.py migrate```

5. Run the Django development server: ```python manage.py runserver```

6. Navigate to the client directory and install Node.js dependencies: ```npm install```

7. In a separate terminal, navigate to the client directory and start the React development server: ```npm run dev```
