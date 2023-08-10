// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan', 
    lastname: 'Ivanov'},
  position:'Junior Fullstack JS Developer',
  salary:'600$ в місяць',
  address: 'Kiev, Vadyma Getmana blvd 27'}

var footer = {

  social: {
    email: {
      text:'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text:'+38067000098',
      href:'tel:+38067000098',
    },
    linkedin:{
      text:'LinkedIn',
      href:'https://www.linkedin.com/in/dmytro-test"',

    },
  
  },

}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {

    page:{
      title:'Resume | Summary'},

    header,

    main:{
      summary:{
        title:'Summary',
        text:`Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      expirience:{
        title:'Other experience',
        text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },

    },

    footer,
    
  
  },
    
  )
    }
  ) 
   
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
  
      page:{
        title:'Resume | Skills'},
  
      header,
  
      main:{
        skills:[
          {
            name:'HTML',
            point: 10,
            isTop: 'true',
          },
          {
            name: 'Git',
            point: 7,
            isTop:'false',
          },
          {
            name:'Handlebar',
            point: 7,
          },
          {
            name: 'VS Code',
            point: 9,
            isTop:'true',
          },
          {
            name: 'Terminal',
            point: null,
          },
          {
            name:'NPM',
            point: 0,
          }
        ],
        hobbies:[
          {
            name:'music',
            isMain: 'true',
          },
          {
            name: 'sport',
            isMain:'true',
          },
          {
            name:'painting',
            isMain:'false',
          },
        ],
      },
  
      footer,
    
    },
      
    )
      }
    )   
    router.get('/education', function (req, res) {
      //             ↙ cюди вводимо назву файлу з сontainer
      res.render('education', {
    
        page:{
          title:'Resume | Education'},
    
        header,
    
        main:{
          educations:[
            {
              name:'Unyversyty of Marocco',
              date: '1999',
              isEnd: 'true',
            },
            {
              name:'High school of Liverpool',
              isEnd: 'false',
            },
            {
              name:'Bachelor all saints',
              date:'1995',
              isEnd:'true',
            },
          ],
          certificates:[
            {
              name:'magister of Glory',
              id: '15984',
            },
            {
              name: 'specialist of masdssage',
              id: '13564',
            },
            {
              name:'sniper shooter',
              id:'77787',
            },
            
          ]
        },
    
        footer,
      
      },
        
      )
        }
      )   
      router.get('/work', function (req, res) {
        //             ↙ cюди вводимо назву файлу з сontainer
        res.render('work', {

          layout:'big',
      
          page:{
            title:'Resume | Work',},
      
          header,
      
          main: {
            works:[
              {
                position: 'Junior JS Dev',
                duration:
                {
                  from: '10.10.2015',
                  to: '12.12.2016',
                },
                company:
                {
                  name: 'IT devOOPS',
                  url: '/https:itds.com/',
                },
                projectAmount:3,

                projects:[
                  {
                    name:'Resume',
                    url:'/https:resume.com.ua/',
                    about:'розробка комунікацийних технологій ',
                    stacks: [
                      {
                        name: 'Python',
                      },
                      {
                        name: 'Node.js',
                      },
                      {
                        name: 'HTML/CSS',
                      },
                    ],
                    stackAmount: 7,
                    awards:[
                      {
                        name:'casablanka optimal',
                      },
                      {
                        name:'за досягнення',
                      },
                    ],
                    awardAmount: 6,
                  },
                ],

              },
              {
                position: 'Junior Fullstack Dev',
                duration:
                {
                  from: '10.10.2015',
                  to: null,
                },
                company:
                {
                  name: 'Microsoft',
                  url: '',
                },
                projectAmount:8,

                projects:[
                  {
                    name:'Researching IT company',
                    url:'',
                    about:'дослідження ролі комунікацийних технологій ',
                    stacks: [
                      {
                        name: 'Python',
                      },
                      {
                        name: 'Node.js',
                      },
                      {
                        name: 'HTML/CSS',
                      },
                    ],
                    stackAmount: 7,
                    awards:[
                      {
                        name:'casablanka optimal',
                      },
                      {
                        name:'за досягнення',
                      },
                    ],
                    awardAmount: 6,
                  },
                ],

              },

            ],
          },
      
          footer,
        },
          
        )
          }
        )   
// Підключаємо роутер до бек-енду
module.exports = router
