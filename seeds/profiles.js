
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 2, user_id: 99902, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 3, user_id: 99903, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 4, user_id: 99904, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 5, user_id: 99905, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 6, user_id: 99906, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 7, user_id: 99907, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 8, user_id: 99908, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 9, user_id: 99909, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 10, user_id: 99910, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 11, user_id: 99911, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 12, user_id: 99912, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 13, user_id: 99913, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 14, user_id: 99914, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 15, user_id: 99915, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 16, user_id: 99916, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 17, user_id: 99917, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 18, user_id: 99918, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 19, user_id: 99919, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 20, user_id: 99920, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 21, user_id: 99921, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 22, user_id: 99922, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 23, user_id: 99923, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 24, user_id: 99924, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 25, user_id: 99925, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'},
        {id: 26, user_id: 99926, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a magna libero. Maecenas bibendum nulla vitae diam ornare facilisis. Proin a cursus urna.', url: 'www.example.com'}

      ])
    })
}
