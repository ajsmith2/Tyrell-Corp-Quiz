const STORE = [
  {
    questionGif:'https://media3.giphy.com/media/87kcVw4PjxGr6/giphy.gif',
    questionAlt: 'Blade Runner gif',
    question: 'What does Roy Batty say to Deckard at the end of \'Blade Runner\'?',
    answers: [
        'A. "The tortoise lays on its back, its belly baking in the hot sun, beating its legs trying to turn itself over. But it can\'t; not without your help. But you\'re not helping."',
        'B. "I\'ve seen things you people wouldn\'t believe. Attack ships on fire off the shoulder of Orion..."',
        'C. "Fiery angels fell. Deep thunder rolled aroud their shoulders... burning with the fires of Orc."',
        'D. "The light that shines twice as bright burns half as long..."'
        ],
    whyRight: '"I\'ve seen things you people wouldn\'t believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die."',
    correctAnswer: 'B. "I\'ve seen things you people wouldn\'t believe. Attack ships on fire off the shoulder of Orion..."',
    wrongGif: 'https://thumbs.gfycat.com/InfiniteGlaringCattle-size_restricted.gif',
    wrongGifAlt: 'Blade Runner gif',
    rightGif: 'https://thumbs.gfycat.com/ShortWindyIcelandicsheepdog-size_restricted.gif',
    rightGifAlt: 'Blade Runner gif'
  },
  {
    questionGif:'https://i.kinja-img.com/gawker-media/image/upload/t_original/fbvuuskrxauqej9eumke.gif',
    questionAlt: 'Annihilation movie gif',
    question: 'In \'Annihilation\', what were the multiple copies in nature referred as?',
    answers: [
        'A.	Shimmers',
        'B.	Reflections',
        'C. Echoes',
        'D. Replicants'
        ],
    whyRight: 'The shimmer was what the scientists referred to the affected area; echoes were the genetic abnormalities within the affected area.',
    correctAnswer: 'C. Echoes',
    wrongGif: 'https://media.giphy.com/media/l49K22TZLuEJCjjDq/giphy.gif',
    wrongGifAlt: 'Annihilation movie gif',
    rightGif: 'https://i.kinja-img.com/gawker-media/image/upload/s--rNYwZT_y--/c_fill,f_auto,fl_progressive,g_center,h_675,q_80,w_1200/x5lgv4bpvalnxa7jvj3u.gif',
    rightGifAlt: 'Annihilation movie gif'
  },
  {
    questionGif:'http://78.media.tumblr.com/tumblr_lf9l13rvnB1qe6mn3o1_500.gif',
    questionAlt: 'alien movie gif, helmet hud',
    question: 'What popular tagline is specific to the first \'Alien\' movie?',
    answers: [
        'A. "If this movie doesn\'t make your skin crawl... it\'s on too tight!"',
        'B. "Man is the warmest place to hide."',
        'C. "In space, no one can hear you scream."',
        'D. "Something has found us"'
        ],
    whyRight: '"If this movie doesn\'t make your skin crawl... it\'s on too tight!" is from the movie \' Black Christmas\' | "Man is the warmest place to hide." is from the movie \'The Thing\' | "Something has found us" is from the movie \'Cloverfield\'.',
    correctAnswer: 'C. "In space, no one can hear you scream."',
    wrongGif: 'https://img.4plebs.org/boards/tv/image/1508/70/1508706950546.gif',
    wrongGifAlt: 'Alien movie gif',
    rightGif: 'https://i2.wp.com/badbooksgoodtimes.com/wp-content/uploads/2016/07/ellen-ripley-i-can-handle-myself.gif?resize=500%2C269'
  },
  {
    questionGif:'https://im-01.gifer.com/UZke.gif',
    questionAlt: 'ex machina gif, ava walking silhouette',
    question: 'In \'Ex Machina\', the names of the characters are significant for several reasons. Which isn\'t one of them?',
    answers: [
        'A.	Ava is another name for Eve, biblical mother of a new lifeform, humans.',
        'B.	Ava is a nod to Ada Lovelace, daughter of poet Lord Byron who is famous for being the first programmer',
        'C. Caleb\'s name is taken from the story in the Bible in the Book of Moses as a spy for the \'Promised Land\'.',
        'D. Nathan\'s name is taken from the character Nathanael, a character in George Orwell\'s "The Sandman".'
        ],
    whyRight: 'It was E.T.A. Hoffman who wrote "The Sandman".',
    correctAnswer: 'D. Nathan\'s name is taken from the character Nathanael, a character in George Orwell\'s "The Sandman".',
    wrongGif: 'https://media1.giphy.com/media/l0MYz9Sk06eO8mrXW/giphy.gif',
    wrongGifAlt: 'Ex Machina gif',
    rightGif: 'https://media.giphy.com/media/3o7TKxsQPpJky5CtWw/giphy.gif'
  },
  {
    questionGif:'https://78.media.tumblr.com/0c3312f11e97af8189f6607f9c68c248/tumblr_oshwf87USZ1wqjqcfo2_500.gif',
    questionAlt:'Alien: Covenant gif',
    question: 'Near the end of \'Alien: Covenant\', what did Daniels see as David\'s tell?',
    answers: [
      'A. The cut on his face was missing.',
      'B. A promise Walter made Daniels that David didn\'t know.',
      'C. His accent was off.',
      'D. The story of the log cabin.'
        ],
    whyRight: 'Daniels tells Walter about Branson wanting to build a log cabin once they\'ve settled on the new planet. After losing Branson, she asks, "...why bother?" David doesn\'t recognize the reference.',
    correctAnswer: 'D. The story of the log cabin.',
    wrongGif: 'https://uproxx.files.wordpress.com/2017/03/alien_xeno.gif?w=650',
    wrongGifAlt: 'Alien: Covenant gif',
    rightGif: 'https://78.media.tumblr.com/4ae4f57dfc2be9af2ed5661b55e4674e/tumblr_osk252xY1g1s01gf9o1_500.gif'
  },
  {
    questionGif:'https://78.media.tumblr.com/3bc5eaba74519e7837756dbbf42eedc0/tumblr_o0gmm6f5Bi1rcwgloo1_500.gif',
    questionAlt:'Blade Runner gif',
    question: 'The real-life Turing test that was used in Ex Machina was used to test for Artificial Intelligence. What was the name for the test performing a similar function in the movie Blade Runner?',
    answers: [
        'A. Nexus 6',
        'B. Kowalski',
        'C. Voight-Kampff',
        'D. Weyland-Yutani'
        ],
    whyRight: 'Turing predicted that certain questions, if answered correctly by a computer, would validate the existence of artificial intelligence. Voight Kampff discriminates against artificial intelligence.',
    correctAnswer: 'C. Voight-Kampff',
    wrongGif: 'https://media.giphy.com/media/fcu5sM8HIbuuY/giphy.gif',
    wrongGifAlt: 'Blade Runner gif',
    rightGif: 'https://media.giphy.com/media/PF1nl1XCM6aze/giphy.gif',
    rightGifAlt: 'Blade Runner gif'
  },
  {
    questionGif:'https://4.bp.blogspot.com/-VySnytpmLP4/Wql8IhyLLqI/AAAAAAAAoaU/S6OjPqIpXOg7DM4-COj8w9_sG974pJ9KACLcBGAs/s640/tumblr_p5jsoqkRHK1srnwquo6_r1_540.gif',
    question: 'What main theme is present in the \'Annihilation\' movie?',
    answers: [
        'A. The Garden of Eden',
        'B. Cancer',
        'C. Alzheimer\'s',
        'D. The story of Babel'
        ],
    whyRight: 'Cancer is a prevalent theme in at least three ways: Dr. Ventress has cancer, all of the characters entering the shimmer exhibit self-destructive behavior, and organisms in the shimmer replicate the way cancer cells replicate.',
    correctAnswer: 'B. Cancer',
    wrongGif: 'https://i.imgur.com/0YqvYJ2.gif',
    wrongGifAlt: 'Annihilation movie gif',
    rightGif: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-09/28/13/asset/buzzfeed-prod-fastlane-01/anigif_sub-buzz-32053-1506618524-7.gif',
    rightGifAlt: 'Annihilation movie gif'
  },
  {
    questionGif:'http://oohlo.com/wp-content/uploads/2017/04/DavidOzy.gif',
    questionAlt: 'alien covenant gif',
    question: 'In \'Alien: Covenant\', during the discussion David has with Walter, he thinks he\'s quoting Byron when he says, "Look on my works, ye mighty, and despair!" Walter corrects him, saying he\'s actually quoting which poet?',
    answers: [
        'A. Shelley',
        'B. Shakespeare',
        'C. Whitman',
        'D. Yeats'
        ],
    whyRight: 'The quote was from Percy Bysse Shelley\'s \'Ozymandias.\' On a side note, his second wife, Mary Shelley, wrote \'Frankenstein; or the Modern Prometheus\'.',
    correctAnswer: 'A. Shelley',
    wrongGif: 'https://78.media.tumblr.com/e5c89868dc1f1ba96d05253098e28f7c/tumblr_ossjjwC8E51wqjqcfo1_500.gif',
    wrongGifAlt: 'Alien: Covenant gif',
    rightGif: 'https://78.media.tumblr.com/333d648e974c8cbcc136f0e4f65e36a8/tumblr_osy2a60sDc1tdvyeko1_r1_500.gif'
  },
  {
    questionGif:'https://fsmedia.imgix.net/0a/9e/93/a3/96a8/478f/b325/9d784868f445/dallas-drinks-aspen-beer-in-alien.gif?rect=0%2C1%2C640%2C213&auto=format%2Ccompress&w=640&gifq=35',
    questionAlt: 'alien movie gif',
    question: 'In the first \'Alien\' movie, which character tuns out to be the android who turns on Ripley and her crew?',
    answers: [
        'A. Dallas',
        'B. Lambert',
        'C. Ash',
        'D. Kane'
        ],
    whyRight: 'Ash was programmed by Weyland-Yutani to confiscate a xenomorph specimen, even at the cost of the crew.',
    correctAnswer: 'C. Ash',
    wrongGif: 'https://media.giphy.com/media/Tt8vZJmhFUWyI/giphy.gif',
    wrongGifAlt: 'Alien movie gif',
    rightGif: 'https://78.media.tumblr.com/d61aa06f4a4cace2947fc9f50a079f07/tumblr_o2nnyfsUV11qdhps7o1_500.gif',
    rightGifAlt: 'Alien movie gif'
  },
  {
    questionGif:'http://28.media.tumblr.com/tumblr_lc19wgcB4i1qe0eclo1_r7_500.gif',
    questionGifAlt: 'Blade Runner gif',
    question: 'In \'Blade Runner\', which test question triggers the replicant in the beginning to shoot at Holden?',
    answers: [
        'A. When Holden asks about his mother',
        'B. When Holden asks where he lives',
        'C. When Holden asks him what he would do to a tortoise',
        'D. When Holden asks him how long he\'s been working at Tyrell Corp'
        ],
    whyRight: '"Let me tell you about my mother..."',
    correctAnswer: 'A. When Holden asks about his mother',
    wrongGif: 'https://media.giphy.com/media/GywGdfxXIur1C/giphy.gif',
    wrongGifAlt: 'Blade Runner gif',
    rightGif: 'https://i.imgur.com/K8o5muB.gif',
    rightGifAlt: 'Blade Runner gif'
  }
];