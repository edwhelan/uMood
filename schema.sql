-- users table 
create table users (
  id serial primary key,
  displayname varchar (100) not null,
  emailaddress varchar(100) not null unique,
  password varchar(400) not null
);

-- health table
create table notes (
  id serial primary key,
  date timestamp,
  note varchar(10000),
  user_id integer references users (id)
);

-- questions table
create table questions (
  id serial primary key,
  questiontext text
);

-- answers table
create table answers (
  id serial primary key,
  answer integer,
  date timestamp,
  user_id integer references users (id),
  question_id integer references questions (id)
);