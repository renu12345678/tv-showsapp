const tagCategories = [
    'pink',
    'red',
    'orange',
    'green',
    'cyan',
    'blue',
    'purple',
    'black',
    'yellow',
    'brown',
    'coral',
    'turquoise',
    'gold'
  ]
  export const genresFilter = [{
    text: 'Action',
    value: 'Action'
  }, {
    text: 'Adventure',
    value: 'Adventure'
  }, {
    text: 'Anime',
    value: 'Anime'
  }, {
    text: 'Comedy',
    value: 'Comedy'
  }, {
    text: 'Crime',
    value: 'Crime'
  },  {
    text: 'Drama',
    value: 'Drama'
  },
  {
    text: 'Espionage',
    value: 'Espionage'
  }, {
    text: 'Family',
    value: 'Family'
  }, {
    text: 'Fantasy',
    value: 'Fantasy'
  }, {
    text: 'History',
    value: 'History'
  }, {
    text: 'Horror',
    value: 'Horror'
  },
  {
    text: 'Legal',
    value: 'Legal'
  },
   {
    text: "Medical",
    value: "Medical"
  },
  {
    text: 'Music',
    value: 'Music'
  }, {
    text: 'Mystery',
    value: 'Mystery'
  }, {
    text: 'Romance',
    value: 'Romance'
  }, {
    text: 'Science Fiction"',
    value: 'Science Fiction'
  },
  {
    text: 'Supernatural',
    value: 'Supernatural'
  },
   {
    text: 'Thriller',
    value: 'Thriller'
  }, {
    text: 'War',
    value: 'War'
  }, {
    text: 'Western',
    value: 'Western'
  }]
  
  
  
  export default {
    randomColor: () => tagCategories[Math.floor(Math.random() * (tagCategories.length + 1))],
    genresFilter
  }
  