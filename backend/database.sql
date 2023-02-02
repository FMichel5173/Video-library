CREATE TABLE admin (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR (255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO admin (id, firstname, lastname, email, password) VALUES (1, 'MICHEL', 'Frédéric', 'fmichel81@sfr.fr', 'HelloWorld');

CREATE TABLE video (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  cover varchar(255) NOT NULL,
  synopsis text,
  availability boolean NOT NULL DEFAULT true
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO video (id, title, cover, synopsis, availability) VALUES (
  1,
  'Avengers Infifnity War',
  '/assets/covers/AvengersIW.png',
  "Alors que les Avengers et leurs alliés ont continué de protéger le monde face à des menaces bien trop grandes pour être combattues par un héros seul, un nouveau danger est venu de l'espace : Thanos. Despote craint dans tout l'univers, Thanos a pour objectif de recueillir les six Pierres d'Infinité, des artefacts parmi les plus puissants de l'univers, et de les utiliser afin d'imposer sa volonté sur toute la réalité. Tous les combats que les Avengers ont menés culminent dans cette bataille.",
  true
),
(
  2,
  'Avengers End Game',
  '/assets/covers/AvengersEG.png',
  "Le Titan Thanos, ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s'échapper de la dimension subatomique où il était coincé. Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, dont leurs alliés et coéquipiers : récupérer les Pierres d'Infinité dans le passé.",
  true
);

CREATE TABLE admin_video (
  firstname varchar(50),
  lastname varchar(50),
  startDate date,
  endDate date,
  admin_id int(11) UNSIGNED,
  video_id int(11) UNSIGNED,
  PRIMARY KEY (admin_id, video_id),
  FOREIGN KEY (admin_id) REFERENCES admin(id),
  FOREIGN KEY (video_id) REFERENCES video(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
