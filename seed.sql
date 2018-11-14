insert into users
  (displayname, emailaddress, password)
      values
  ('beWell', 'bigboy@aol.com', 'password123'),
  ('feelingsDude', 'biggirl@aol.com', 'password124'),
  ('hachaWacha', 'bigfriend@aol.com', 'password213'),
  ('bingoBango', 'bigballer@aol.com', 'password23'),
  ('ColdWeatherLuvr', 'bigbig@aol.com', 'password13'),
  ('bopper95', 'bigpapa@aol.com', 'password15'),
  ('capncrunch', 'bigmama@aol.com', 'password12');


  insert into health 
    (dailyscore, date, notes, user_id)
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
    (answer, date,  user_id, question_id)
      values
    (1, '2018-12-25', 1, 1),
    (1, '2018-12-25', 1, 2),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 4),
    (1, '2018-12-25', 1, 5),
    (1, '2018-12-25', 2, 1),
    (1, '2018-12-25', 2, 2),
    (1, '2018-12-25', 2, 3),
    (1, '2018-12-25', 2, 4),
    (1, '2018-12-25', 2, 5),
    (1, '2018-12-25', 3, 1),
    (1, '2018-12-25', 3, 2),
    (1, '2018-12-25', 3, 3),
    (1, '2018-12-25', 3, 4),
    (1, '2018-12-25', 3, 5),
    (1, '2018-12-25', 4, 1),
    (1, '2018-12-25', 4, 2),
    (1, '2018-12-25', 4, 3),
    (1, '2018-12-25', 4, 4),
    (1, '2018-12-25', 4, 5),
    (1, '2018-12-25', 5, 1),
    (1, '2018-12-25', 5, 2),
    (1, '2018-12-25', 5, 3),
    (1, '2018-12-25', 5, 4),
    (1, '2018-12-25', 5, 5),
    (1, '2018-12-25', 6, 1),
    (1, '2018-12-25', 6, 2),
    (1, '2018-12-25', 6, 3),
    (1, '2018-12-25', 6, 4),
    (1, '2018-12-25', 6, 5),
    (1, '2018-12-25', 7, 1),
    (1, '2018-12-25', 7, 2),
    (1, '2018-12-25', 7, 3),
    (1, '2018-12-25', 7, 4),
    (1, '2018-12-25', 7, 5),
    (1, '2018-12-25', 1, 1),
    (1, '2018-12-25', 1, 2),
    (1, '2018-12-25', 1, 3),
    (1, '2018-12-25', 1, 4),
    (1, '2018-12-25', 1, 5),
    (1, '2018-12-25', 2, 1),
    (1, '2018-12-25', 2, 2),
    (1, '2018-12-25', 2, 3),
    (1, '2018-12-25', 2, 4),
    (1, '2018-12-25', 2, 5);
    
