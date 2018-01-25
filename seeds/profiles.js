
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, country: 'South Africa'},
        {id: 2, user_id: 99902, country: 'Zambia'},
        {id: 3, user_id: 99903, country: 'Brazil'},
        {id: 4, user_id: 99904, country: 'Donaldia'},
        {id: 5, user_id: 99905, country: 'India'},
        {id: 6, user_id: 99906, country: 'Malaysia'},
        {id: 7, user_id: 99907, country: 'USA'},
        {id: 8, user_id: 99908, country: 'Zambia'},
        {id: 9, user_id: 99909, country: 'Brazil'},
        {id: 10, user_id: 99910, country: 'South Africa'},
        {id: 11, user_id: 99911, country: 'UK'},
        {id: 12, user_id: 99912, country: 'Brazil'},
        {id: 13, user_id: 99913, country: 'Mootown'},
        {id: 14, user_id: 99914, country: 'Zoolandia'},
        {id: 15, user_id: 99915, country: 'Brazil'},
        {id: 16, user_id: 99916, country: 'Lalaland'},
        {id: 17, user_id: 99917, country: 'Zambia'},
        {id: 18, user_id: 99918, country: 'North Korea'},
        {id: 19, user_id: 99919, country: 'Brazil'},
        {id: 20, user_id: 99920, country: 'South Africa'},
        {id: 21, user_id: 99921, country: 'Zambia'},
        {id: 22, user_id: 99922, country: 'New Zealand'},
        {id: 23, user_id: 99923, country: 'South Africa'},
        {id: 24, user_id: 99924, country: 'Zambia'},
        {id: 25, user_id: 99925, country: 'Taiwan'},
        {id: 26, user_id: 99926, country: 'Brazil'}

      ])
    })
};