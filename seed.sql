insert into users
  (displayname, emailaddress, password)
      values
  ('beWell', 'bigboy@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('feelingsDude', 'biggirl@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('hachaWacha', 'bigfriend@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('bingoBango', 'bigballer@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('ColdWeatherLuvr', 'bigbig@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('bopper95', 'bigpapa@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('capncrunch', 'bigmama@aol.com', '$2b$10$A1ydboQiPIZt40HLbOL8Fu7y8LeOvYS83w80DT0f6ViSLfJwlnQzq'),
  ('lorenzo', 'lorenzo@lorenzo.com', '$2b$10$AbxaPCvE3zyklTArdpgje.zU60amFeE5ouqjPiIs06UH0hg2raqrG');


  insert into notes 
    (date, note, user_id)
      values
    ('2018-12-25', 'Today was a good day', 1),
    ('2018-12-25', 'Today was a bad day', 2),
    ('2018-12-25', 'Today was an awful day', 3),
    ('2018-12-25', 'Today was a random day', 4),
    ('2018-12-25', 'Today was a ajshdkajshd day', 5),
    ('2018-12-25', 'Today was a lsadjalsjdas day', 6),
    ('2018-12-25', 'Today was a red day', 7),
    ( '2018-12-26', 'Today was a black day', 1),
    ('2018-12-25', 'Today was a happy day', 2),
    ('2018-12-25', 'Today was a sad day', 3),
    ('2018-12-27', 'Today was a feeling day', 1),
    ('2018-12-25', 'Today was a GREAT day', 2),
    ('2018-12-25', 'Today was a day', 6);

insert into questions
  (questiontext)
    values
  ('Concentrating on doing something for 10 minutes.'),
  ('Getting out of your home.'),
  ('Eating.'),
  ('Sleeping.'),
  ('Getting all the work done that you need to do.'),
  ('Getting along with people in your surroundings');
  -- What difficulties did you have doing these things
  --   scale of 0 - 4
  --   0 = No Difficulty
  --   1 = Mild Difficulty
  --   2 = Moderate Difficulty
  --   3 = Severe Difficulty
  --   4 = Extreme Difficulty or Cannot Do
  --   based on WHODAS 36 Screen
  -- 1. Concentrating on doing something for 10 minutes
  -- 2. Getting out of your home
  -- 3. Eating
  -- 4. Sleeping
  -- 4. Getting all the work done that you need to do
  -- 5. Getting along with people in your surroundings

  insert into answers
    (answer, date,  user_id, question_id)
      values
    (2, '2018-11-13', 8, 1),
    (0, '2018-11-13', 8, 2),
    (1, '2018-11-13', 8, 3),
    (4, '2018-11-13', 8, 4),
    (3, '2018-11-13', 8, 5),
    (2, '2018-11-13', 8, 6),
    (2, '2018-11-14', 8, 1),
    (1, '2018-11-14', 8, 2),
    (3, '2018-11-14', 8, 3),
    (4, '2018-11-14', 8, 4),
    (2, '2018-11-14', 8, 5),
    (1, '2018-11-14', 8, 6),
    (3, '2018-11-15', 8, 1),
    (1, '2018-11-15', 8, 2),
    (1, '2018-11-15', 8, 3),
    (2, '2018-11-15', 8, 4),
    (3, '2018-11-15', 8, 5),
    (4, '2018-11-15', 8, 6),
    (3, '2018-11-16', 8, 1),
    (4, '2018-11-16', 8, 2),
    (3, '2018-11-16', 8, 3),
    (2, '2018-11-16', 8, 4),
    (3, '2018-11-16', 8, 5),
    (2, '2018-11-16', 8, 6),
    (3, '2018-11-17', 8, 1),
    (4, '2018-11-17', 8, 2),
    (3, '2018-11-17', 8, 3),
    (3, '2018-11-17', 8, 4),
    (4, '2018-11-17', 8, 5),
    (1, '2018-11-17', 8, 6),
    (3, '2018-11-18', 8, 1),
    (2, '2018-11-18', 8, 2),
    (3, '2018-11-18', 8, 3),
    (4, '2018-11-18', 8, 4),
    (3, '2018-11-18', 8, 5),
    (3, '2018-11-18', 8, 6),
    (3, '2018-11-19', 8, 1),
    (4, '2018-11-19', 8, 2),
    (3, '2018-11-19', 8, 3),
    (2, '2018-11-19', 8, 4),
    (3, '2018-11-19', 8, 5),
    (3, '2018-11-19', 8, 6),
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
    (1, '2018-12-25', 2, 1),
    (1, '2018-12-25', 2, 2),
    (1, '2018-12-25', 2, 3),
    (1, '2018-12-25', 2, 4),
    (1, '2018-12-25', 2, 5);
    
