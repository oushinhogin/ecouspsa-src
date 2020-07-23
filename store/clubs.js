export const state = () => ({
  list: [
    {
      id: 1,
      shortName: "PSAC",
      location: "Aurora (Sunday)",
      schedules: {
        2019: {
          dayOfWeek: 1,
          weekOfMonth: 1,
          sectionQualifier: 9,
        },
        2020: {
          dayOfWeek: 1,
          weekOfMonth: 1,
          sectionQualifier: 9,
        },
      },
      name: 'Practical Shooters Association of Colorado',
      code: 'ECO08',
      hostClub: {
        url: 'http://www.auroragunclub.com',
        name: 'Aurora Gun Club',
      },
      times: {
        'Shooter&#39;s Meeting': '9:30 AM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Josh Horner',
          email: 'oushinhogin@gmail.com',
          phone: '720-980-1284'
        },{
          position: 'Safety Instructor',
          name: 'Roger Briden',
          email: 'rbriden@yahoo.com',
        }
      ],
      fees: {
        'Fee': '$20',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=301+South+Gun+Club+Road+Aurora,+CO+80018&aq=&sll=39.710587,-104.717817&sspn=0.024067,0.037165&ie=UTF8&hq=&hnear=301+S+Gun+Club+Rd,+Aurora,+Arapahoe,+Colorado+80018&t=m&ll=39.709564,-104.716187&spn=0.096402,0.124969&z=12&iwloc=&output=embed',
      googleMapLink: 'https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=301+South+Gun+Club+Road+Aurora,+CO+80018&aq=&sll=39.710587,-104.717817&sspn=0.024067,0.037165&ie=UTF8&hq=&hnear=301+S+Gun+Club+Rd,+Aurora,+Arapahoe,+Colorado+80018&t=m&ll=39.709564,-104.716187&spn=0.096402,0.124969&z=12&iwloc=',
    }, {
      id: 2,
      shortName: "CRCPS",
      location: "Byers",
      schedules: {
        2019: {
          dayOfWeek: 7,
          weekOfMonth: 2,
          sectionQualifier: 7,
          superClassifiers: [5],
          majors: {
            m9: '13-15<sup>2</sup>',
          },
        },
        2020: {
          dayOfWeek: 7,
          weekOfMonth: 2,
          sectionQualifier: 7,
          superClassifiers: [5],
        },
      },
      name: 'Colorado Rifle Club Practical Shooters',
      code: 'ECO15',
      hostClub: {
        url: 'http://www.crci.org',
        name: 'Colorado Rifle Club',
      },
      times: {
        'Shooter&#39;s Meeting': '9:30 AM'
      },
      contacts: [
        {
          position: 'President',
          name: 'Mark Passamaneck',
          email: 'markpcolo@gmail.com',
        },{
          position: 'Match Director',
          name: 'Steve Cline',
          email: 'thedeadeyemethod@att.net',
        },{
          position: 'Safety Instructor',
          name: 'Mark Passamaneck',
          email: 'markpcolo@gmail.com',
        }
      ],
      fees: {
        'Fee': '$20',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=76099+E.+96th+Ave.+Byers,+CO+80103+&aq=&sll=39.690129,-105.126248&sspn=0.202898,0.295601&ie=UTF8&hq=&hnear=76099+E+96th+Ave,+Byers,+Colorado+80103&t=m&ll=39.848612,-104.099579&spn=0.384828,0.499878&z=10&iwloc=&output=embed',
      googleMapLink: 'https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=76099+E.+96th+Ave.+Byers,+CO+80103+&aq=&sll=39.690129,-105.126248&sspn=0.202898,0.295601&ie=UTF8&hq=&hnear=76099+E+96th+Ave,+Byers,+Colorado+80103&t=m&ll=39.848612,-104.099579&spn=0.384828,0.499878&z=10&iwloc=',
    }, {
      id: 3,
      shortName: "YVPS",
      location: "Steamboat",
      schedules: {
        2019: {
          dayOfWeek: 7,
          weekOfMonth: 2,
          sectionQualifier: 10,
          iffy: [1,2,3,4,11,12],
        },
        2020: {
          dayOfWeek: 7,
          weekOfMonth: 2,
          sectionQualifier: 10,
          iffy: [1,2,3,4,11,12],
        },
      },
      name: 'Yampa Valley Practical Shooters',
      code: 'ECO14',
      hostClub: {
        url: 'http://www.routtcountyrifleclub.org',
        name: 'Routt County Rifle Club',
      },
      times: {
        'Shooter&#39;s Meeting': '9:00 AM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Yoshi Yonekawa',
          email: 'yampavalleypracticalshooters@gmail.com',
          phone: '970-879-1270'
        },{
          position: 'Safety Instructor',
          name: 'N/A',
        }
      ],
      fees: {
          'Member fee': '$15',
          'Non-member fee': '$20',
          'Annual dues': 'N/A',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=40.50749,+-106.88699&aq=&sll=40.507502,-106.886287&sspn=0.006265,0.009238&t=m&gl=us&ie=UTF8&ll=40.507535,-106.887016&spn=0.095278,0.124969&z=12&output=embed',
      googleMapLink: 'https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=40.50749,+-106.88699&aq=&sll=40.507502,-106.886287&sspn=0.006265,0.009238&t=m&gl=us&ie=UTF8&ll=40.507535,-106.887016&spn=0.095278,0.124969&z=12',
    }, {
      id: 4,
      shortName: "BRC",
      location: "Boulder",
      schedules: {
        2019: {
          dayOfWeek: 1,
          weekOfMonth: 2,
          sectionQualifier: 8,
        },
        2020: {
          dayOfWeek: 1,
          weekOfMonth: 2,
          omit: [4,5,6,7,8,9,10,11,12],
        },
      },
      name: 'Boulder Rifle Club',
      code: 'ECO02',
      hostClub: {
        url: 'http://www.boulderrifleclub.com',
        name: 'Boulder Rifle Club',
      },
      times: {
        'Shooter&#39;s Meeting': '9:00 AM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Henning Wallgren',
          email: 'brcuspsamatch@gmail.com',
          phone: '720-999-6512'
        },{
          position: 'Safety Instructor',
          name: 'Charlie Rollins',
          email: 'brcuspsasafety@gmail.com',
          phone: '720-244-0652'
        }
      ],
      fees: {
          'Member fee': '$15',
          'Non-member fee': '$20',
          'Annual dues': '(Boulder Rifle Club Membership)',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?ie=UTF8&q=boulder+rifle+club&fb=1&gl=us&hq=boulder+rifle+club&hnear=boulder+rifle+club&cid=0,0,11207013910803477445&t=m&ll=40.05495,-105.254688&spn=0.047959,0.062485&z=13&iwloc=&output=embed',
      googleMapLink: 'https://maps.google.com/maps?ie=UTF8&q=boulder+rifle+club&fb=1&gl=us&hq=boulder+rifle+club&hnear=boulder+rifle+club&cid=0,0,11207013910803477445&t=m&ll=40.05495,-105.254688&spn=0.047959,0.062485&z=13&iwloc=&source=embed',
    }, {
      id: 5,
      shortName: "PPPS",
      location: "Pueblo",
      schedules: {
        2019: {
          dayOfWeek: 1,
          weekOfMonth: 2,
          sectionQualifier: 4,
          superClassifiers: [10],
        },
        2020: {
          dayOfWeek: 1,
          weekOfMonth: 2,
          sectionQualifier: 10,
        },
      },
      name: 'Pike&#39;s Peak Practical Shooters',
      code: 'ECO07',
      hostClub: {
        url: 'http://pwsa.us',
        name: 'Pueblo West Sportsman&#39;s Association',
      },
      times: {
        'Setup start': '6:30 AM',
        'Registration': '8:30 - 09:15 AM',
        'Shooter&#39;s Meeting': '9:30 AM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Curtis Brotherston',
          email: 'aznmedic@gmail.com',
        },{
          position: 'Safety Instructor',
          name: 'Tom Freeman',
          email: 'puebloshooter@gmail.com',
          phone: '719-660-5442'
        }
      ],
      fees: {
        'Member fee': '$15 ($5 family)',
        'Non-member fee': '$20 ($5 family)',
        'Annual dues': '$25 ($35 family)'
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=38.40688,+-104.70803&aq=&sll=39.690129,-105.126248&sspn=0.202898,0.295601&ie=UTF8&t=m&ll=38.412441,-104.664688&spn=0.09819,0.124969&z=12&output=embed',
      googleMapLink: 'https://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=38.40688,+-104.70803&aq=&sll=39.690129,-105.126248&sspn=0.202898,0.295601&ie=UTF8&t=m&ll=38.412441,-104.664688&spn=0.09819,0.124969&z=12',
    }, {
      id: 6,
      shortName: "HPPS",
      location: "Ramah",
      schedules: {
        2019: {
          dayOfWeek: 7,
          weekOfMonth: 3,
          sectionQualifier: 8,
        },
        2020: {
          dayOfWeek: 7,
          weekOfMonth: 3,
          sectionQualifier: 8,
          majors: {
            m9: '18-20<sup>2</sup>',
          },
        },
      },
      name: 'High Plains Practical Shooters',
      code: 'ECO12',
      hostClub: {
        url: 'http://www.blgc.org',
        name: 'Ben Lomond Gun Club',
      },
      contacts: [
        {
          position: 'President',
          name: 'Charlie Perez',
          email: 'rezman@hotmail.com',
          phone: '303-882-6728'
        },{
          position: 'Safety Instructor',
          name: 'Matt Gallant',
          email: 'gallantcodes@gmail.com',
        }
      ],
      times: {
        'Shooter&#39;s Meeting': '9:45 AM'
      },
      fees: {
        'Member fee': '$15',
        'Non-member fee': '$20',
        'Annual dues': 'N/A',
      },
      googleMapsIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.7099723298547!2d-104.18181158437356!3d39.20403843641516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876d2eb9b0e83309%3A0xff3370273021a6e9!2s22615+Co+Rd+105%2C+Simla%2C+CO+80835!5e0!3m2!1sen!2sus!4v1486688108865',
      googleMapLink: 'https://www.google.com/maps?ll=39.204034,-104.179623&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=22615+Co+Rd+105+Simla,+CO+80835',
    }, {
      id: 7,
      shortName: "WCPS",
      location: "Weld County",
      schedules: {
        2019: {
          dayOfWeek: 1,
          weekOfMonth: 3,
          sectionQualifier: 11,
          majors: {
            m6: 'May 31 - Jun 3<sup>1</sup>',
          },
        },
        2020: {
          dayOfWeek: 1,
          weekOfMonth: 3,
          sectionQualifier: 5,
          omit: [9],
          majors: {
            m6: '5-7<sup>1</sup>',
          },
        },
      },
      name: 'Weld County Practical Shooters',
      code: 'ECO09',
      hostClub: {
        url: 'http://wcfw.org',
        name: 'Weld County Fish & Wildlife',
      },
      times: {
        'Setup start': '7:30 AM',
        'New shooter safety briefing': '8:00 AM',
        'Registration': '9 to 9:45 AM',
        'The front gate locks': '9:45 AM',
        'The shooter&#39;s meeting': '10 AM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Patrick Jones',
          email: 'uspsa@wcfw.org',
        }
      ],
      fees: {
        'Member fee': '$15',
        'Non-member fee': '$20',
        'Annual dues': '$30',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?q=38967+CR+51+Eaton,+CO+80615&ie=UTF8&hq=&hnear=38967+County+Road+51,+Eaton,+Colorado+80615&gl=us&t=m&ll=40.488737,-104.773865&spn=0.381215,0.499878&z=10&iwloc=&output=embed',
      googleMapLink: 'https://maps.google.com/maps?q=38967+CR+51+Eaton,+CO+80615&ie=UTF8&hq=&hnear=38967+County+Road+51,+Eaton,+Colorado+80615&gl=us&t=m&ll=40.488737,-104.773865&spn=0.381215,0.499878&z=10&iwloc=&source=embed',
    }, {
      id: 8,
      shortName: "PSAC",
      location: "Aurora (Saturday)",
      schedules: {
        2019: {
          dayOfWeek: 7,
          weekOfMonth: 4,
          omit: [4,5,6,7,8,9,10,11,12],
        },
      },
    }, {
      id: 9,
      shortName: "CCPS",
      location: "Dumont",
      schedules: {
        2019: {
          dayOfWeek: 1,
          weekOfMonth: 4,
          sectionQualifier: 7,
          iffy: [1,2,11,12],
        },
        2020: {
          dayOfWeek: 1,
          weekOfMonth: 4,
          sectionQualifier: 7,
          iffy: [1,2,11,12],
        },
      },
      name: 'Clear Creek Practical Shooters',
      code: 'ECO06',
      hostClub: {
        url: 'http://www.cccsclub.com',
        name: 'Clear Creek County Sportsman&#39;s Club',
      },
      times: {
        'Shooter&#39;s Meeting': '9:00 AM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Roger Sorge',
          email: 'wfwsorge@comcast.net',
          phone: ''
        },{
          position: 'Safety Instructor',
          name: 'N/A',
        }
      ],
      fees: {
        'Member fee': '$20',
        'Non-member fee': '$20',
        'Annual dues': 'N/A',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?ie=UTF8&q=clear+creek+county+sportsman\'s+club&fb=1&gl=us&hq=sportsman\'s+club&hnear=0x876ba533edc270af:0x5ef585dc43a743f,Clear+Creek,+CO&cid=0,0,8919952254577080246&t=m&ll=39.762829,-105.586939&spn=0.024082,0.031242&z=14&iwloc=&output=embed',
      googleMapLink: 'https://maps.google.com/maps?ie=UTF8&q=clear+creek+county+sportsman\'s+club&fb=1&gl=us&hq=sportsman\'s+club&hnear=0x876ba533edc270af:0x5ef585dc43a743f,Clear+Creek,+CO&cid=0,0,8919952254577080246&t=m&ll=39.762829,-105.586939&spn=0.024082,0.031242&z=14&iwloc=&source=embed',
    }, {
      id: 10,
      shortName: "SCPS",
      location: "Colorado Springs",
      schedules: {
        2019: {
          dayOfWeek: 7,
          weekOfMonth: 4,
          sectionQualifier: 6,
          omit: [1,2,3],
          superClassifiers: [8],
        },
        2020: {
          dayOfWeek: 7,
          weekOfMonth: 4,
          sectionQualifier: 7,
          omit: [1],
          superClassifiers: [8],
        },
      },
      name: 'SoCo Practical Shooters',
      code: 'ECO19',
      hostClub: {
        url: 'http://pikespeakgunclub.org/',
        name: 'Pikes Peak Gun Club',
      },
      times: {
        'Setup Start': '7:00',
        'New Shooter Safety Briefing': '8:00',
        'Registration': '8:30-9:30',
        'Shooters Meeting': '9:45',
      },
      contacts: [
        {
          position: 'Match Director',
          name: 'Germaine Adams',
          email: 'socopracticalshooters@gmail.com',
          phone: '719-439-6993'
        },
      ],
      fees: {
        'Member Fee': '$20',
        'Non-Member Fee': '$25',
        'Annual Dues': 'n/a'
      },
      googleMapsIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.3353142808855!2d-104.59708568465177!3d38.82478087958187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713393be14db38d%3A0xf0179b39a2e04b1e!2s450+S+Franceville+Coal+Mine+Rd%2C+Colorado+Springs%2C+CO+80929!5e0!3m2!1sen!2sus!4v1547002830549',
      googleMapLink: 'https://goo.gl/maps/949RTKCAx4H2',
    }, {
      id: 11,
      shortName: "WPPS",
      location: "Colorado Springs",
      schedules: {
        2019: {
          dayOfWeek: 2,
          weekOfMonth: 1,
        },
        2020: {
          dayOfWeek: 2,
          weekOfMonth: 1,
          omit: [9],
        },
      },
      name: 'Whistling Pines Practical Shooters',
      code: 'ECO13',
      hostClub: {
        url: 'http://www.whistlingpinesgunclub.com',
        name: 'Whistling Pines Gun Club',
      },
      times: {
        'Shooter&#39;s Meeting': '7:00 PM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Tom Freeman',
          email: 'WPGCResults@gmail.com',
          phone: '719-660-5442'
        },{
          position: 'Safety Instructor',
          name: 'Tom Freeman',
          email: 'WPGCResults@gmail.com',
        }
      ],
      fees: {
        'Member fee': '$10',
        'Non-member fee': '$15',
        'Annual dues': '$35 (one time)',
      },
      googleMapsIframeUrl: 'https://maps.google.com/maps?hl=en&ie=UTF8&q=whistling+pines+gun+club&fb=1&gl=us&hq=whistling+pines+gun+club&cid=0,0,1414679191610636993&t=m&ll=38.848264,-104.688034&spn=0.097595,0.124969&z=12&iwloc=&output=embed',
      googleMapLink: 'https://maps.google.com/maps?hl=en&ie=UTF8&q=whistling+pines+gun+club&fb=1&gl=us&hq=whistling+pines+gun+club&cid=0,0,1414679191610636993&t=m&ll=38.848264,-104.688034&spn=0.097595,0.124969&z=12&iwloc=&source=embed',
    }, {
      id: 12,
      shortName: "BPS",
      location: "Lakewood",
      schedules: {
        2019: {
          dayOfWeek: 5,
          weekOfMonth: [1, 3],
        },
        2020: {
          dayOfWeek: 5,
          weekOfMonth: [1, 3],
          override: {
            m3: '<span class="super-classifier">5,</span> 19',
          }
        },
      },
      name: 'Bristlecone Practical Shooters',
      code: 'ECO17',
      hostClub: {
        url: 'http://www.bristleconeshooting.com/',
        name: 'Bristlecone Shooting, Training & Retail Center',
      },
      times: {
        'Registration': '5:30 PM',
        'Shooter&#39;s Meeting': '6:00 PM',
      },
      contacts: [
        {
          position: 'President',
          name: 'Bryan Clark',
          email: 'bjclarkgm@gmail.com',
          phone: '720-557-6925'
        },
      ],
      fees: {
        'Member fee': '$22.50',
        'Non-member fee': '$25',
        'Super Classifier fee': '$40',
      },
      googleMapsIframeUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6138.410216386874!2d-105.135754!3d39.712573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b83fa3bf856e1%3A0xc25a9d7fc7ee9f6f!2sBristlecone+Shooting%2C+Training%2C+%26+Retail+Center!5e0!3m2!1sen!2sus!4v1486524626955',
      googleMapLink: 'https://www.google.com/maps/place/Bristlecone+Shooting,+Training,+%26+Retail+Center/@39.712573,-105.135754,15z/data=!4m5!3m4!1s0x0:0xc25a9d7fc7ee9f6f!8m2!3d39.712573!4d-105.135754',
    },
  ]
})
