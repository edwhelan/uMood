insert into users
  (displayname, emailaddress, password)
      values
  ('beWell', 'bigboy@aol.com', 'password123'),
  ('beWell', 'biggirl@aol.com', 'password124'),
  ('beWell', 'bigfriend@aol.com', 'password213'),
  ('beWell', 'bigballer@aol.com', 'password23'),
  ('beWell', 'bigbig@aol.com', 'password13'),
  ('beWell', 'bigpapa@aol.com', 'password15'),
  ('beWell', 'bigmama@aol.com', 'password12');


  insert into health 
    (dailyscore, date, post, user_id)
      values
    (5, '2018-12-25', 'Today was a good day', 1),
    (8, '2018-12-25', 'Today was a bad day', 2),
    (9, '2018-12-25', 'Today was an awful day', 3),
    (2, '2018-12-25', 'Today was a random day', 4),
    (3, '2018-12-25', 'Today was a ajshdkajshd day', 5),
    (4, '2018-12-25', 'Today was a lsadjalsjdas day', 6),
    (7, '2018-12-25', 'Today was a red day', 7),
    (10, '2018-12-25', 'Today was a black day', 1),
    (5, '2018-12-25', 'Today was a happy day', 2),
    (4, '2018-12-25', 'Today was a sad day', 3),
    (2, '2018-12-25', 'Today was a feeling day', 4),
    (1, '2018-12-25', 'Today was a GREAT day', 5),
    (1, '2018-12-25', 'Today was a day', 6);

insert into questions
  (questiontext)
    values
  (' How was your focus today?'),
  ('How did your social interactions go today?'),
  ('How did you feel about yourself today?'),
  ('How did you feel physically?'),
  ('How did you feel overall?');


  insert into answers
    (answers, date,  user_id, question_id)
      values
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 3);
    
