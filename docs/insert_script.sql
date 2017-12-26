-- for default users
insert into users(username, password, "role") values('admin', 'pass', 'ADMIN');
insert into users_info(author_name, author_country, user_id) VALUES('fAdmin', 'USA', 1);

insert into users(username, password, "role") values('author', 'pass', 'AUTHOR');
insert into users_info(author_name, author_country, user_id) VALUES('fAuthor', 'United Kingdom', 2);

insert into users(username, password, "role") values('author2', 'pass2', 'AUTHOR');
insert into users_info(author_name, author_country, user_id) VALUES('fAuthor2', 'Pakistan', 3);

insert into users(username, password, "role") values('author3', 'pass3', 'AUTHOR');
insert into users_info(author_name, author_country, user_id) VALUES('fAuthor3', 'India', 4);
