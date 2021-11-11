# Contact List Web Application (React + Django)

## Prerequisites
1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python3](https://www.python.org/downloads/macos/)
3. [Yarn](https://www.geeksforgeeks.org/how-to-install-yarn-in-macos-ubuntu-windows/)

## Installations and Setup
1. Clone the project to your local device by:
```sh
git clone https://github.com/juliagsy/tech-edu-assessment.git
```

2. `cd` into the `djangoContacts` and `react-contacts` folders respectively in two different terminal windows.

3. In the `djangoContacts` terminal window, run:
```sh
python3 -m venv venv
```

```sh
source venv/bin/activate
```

```sh
pip3 install -r requirements.txt
```

```sh
python3 manage.py migrate
```

```sh
python3 manage.py runserver
```

4. In the `react-contacts` terminal window, run:
```sh
yarn install
```

```sh
yarn start
```

5. The application will be available for view at http://localhost:3000/.

## Features
1. Viewing all contacts
- The main display page shows all contacts.

2. Viewing contact details
- Clicking on the contact's name will display the contact details.

3. Editing contact details
- Editing button is accessible in each contact details' view.

4. Deleting contact details
- Deleting button is accessible in each contact details' view.

5. Adding new contacts
- In the main page, adding contact button will be linked to a form.
