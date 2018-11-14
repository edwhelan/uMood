-- users table 
create table users (
  id serial primary key,
  displayname varchar (100),
  emailaddress varchar(100) not null unique,
  password varchar(400) not null
);

-- health table
create table health (
  id serial primary key,
  dailyscore integer,
  date timestamp,
  post varchar(10000),
  user_id integer references users (id)
);

-- questions table
create table questions (
  id serial primary key,
  questiontext text,
);

-- answers table
create table answers (
  id serial primary key,
  answer integer
  user_id integer references users (id),
  question_id integer references question (id)
);