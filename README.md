# National Library

A repository to test one's node.js skill

## Checklist (Of things that needs to get done)

Portal will have 2 kinds of users who can login:
  - Admin:
    - Can create/delete/edit an author (DONE)
    - Can create/delete/edit a book (DONE)
    - Can add/remove/edit authors from a book (Someone done)
    - Search book details by id, author, book_name (Done)
  - Authors:
    - Can add books and add themselves as author to this book (Partially done)
    - Can edit ONLY their details
    - Can ONLY add co-authors to those books where they are authors. (But cannot add themselves as authors to other books). For example, “Dennis Ritchie”, who is already an author of “The C Programming Language”, can add “Brian Kernighan” as co-author . But Dennis Ritchie cannot add himself as a co-author to “Harry Potter” (Only “JK Rowling” can do that!)
      
      
- Use Oauth2 authentication. All API queries need to use access token, which should only allow those operations as stated above. Feel free to use any standard oauth library. (Applied)
- Application should be coded in node js using express js framework. (applied)
- Create barebones HTML/CSS pages. Feel free to use any standard library for auto-generating admin interface.
- Test cases, although not compulsory, are recommended.
- You need not implement ACL (Access Control List) for books/
- You can use db of your own choice, but postgres is preferred. (applied)
- You can use caching strategies if required.
- Try to write more verbose code and make sure you write comments where required.
- Push code to github or bitbucket. (Done)

## How to run project

Go to the project directory (/national-library-api) and install everything

```
npm install
```

Web and DB credentials are in [config.js]() and run the project:

```
node app.js
```

Execute insert sciprts [insert-script.sql]() into your DB to have pre-define users such as ADMIN/AUTHOR


