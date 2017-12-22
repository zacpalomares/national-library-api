-- for default users
insert into users(username, password, is_super_user) values('admin', 'pass', true);
insert into users_info(first_name, last_name, user_id) VALUES('fAdmin', 'lAdmin', 1);

insert into users(username, password, is_super_user) values('author', 'pass', false);
insert into users_info(first_name, last_name, user_id) VALUES('fAuthor', 'lAuthor', 2);
