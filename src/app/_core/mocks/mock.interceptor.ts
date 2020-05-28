// tslint:disable:max-line-length

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('sequences/list')
      && request.method === 'GET') {
      // return throwError(new HttpErrorResponse({ error: { code: 1035 } })).pipe(delay(50));
      return of(new HttpResponse({
        status: 200, body: campaigns
      })).pipe(delay(50));
    }
    if (request.url.endsWith('suggested')
      && request.method === 'GET') {
      // return throwError(new HttpErrorResponse({ error: { code: 1035 } })).pipe(delay(50));
      return of(new HttpResponse({
        status: 200, body: suggested
      })).pipe(delay(50));
    }
    if (request.url.endsWith('settings')
      && request.method === 'GET') {
      // return throwError(new HttpErrorResponse({ error: { code: 1035 } })).pipe(delay(50));
      return of(new HttpResponse({
        status: 200, body: userSettings
      })).pipe(delay(50));
    }
    return next.handle(request);
  }
}

const userSettings = {
  first_name: 'Michael Kilesa',
  email: 'mkilesa@test.com',
  profile_img_link: '',
};

const campaigns = {
  Result: 'Success',
  Error: 0,
  ErrorDetails: {
    Error: 0,
    Description: 'The operation was successful'
  },
  list: [
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e4c32c9af53912e5f0e79c7',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Torin S',
      company_name: 'ebay',
      email: 'daniel.wiener321@gmail.com',
      job_title: 'CEO',
      contact_id: 256501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'New Product Release',
      campaign_id: '2921',
      origEmails: {
        campaign_id: 2921,
        campaign_name: 'New Product Release',
        intro1: {
          subject: 'Time for a quick touch base?',
          greeting: 'Happy Tuesday,',
          opener: 'Hope you\'ve been well since my last note.',
          role: 'My role at Hamer Street Consulting is to help companies like ebay generate leads at 1/30th of the average cost.',
          reason: 'Given your position in null at ebay, I figured it made sense to see if we could find time to connect.',
          pitch: 'Random -1',
          calltoaction: 'When you have a chance, feel free to browse our website to see what\'s new, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Thursday morning or Friday afternoon to see if now is a better time for Hamer Street Consulting to add value?',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Torin,',
          opener: 'I hope your week has been going well so far.',
          role: 'To recap, I\'m the Hamer Street Consulting sales representative for ebay.',
          reason: 'I\'m curious to hear your thoughts on the work <a href="www.ehamer.us">Hamer Street Consulting</a> does to help companies such as ebay roll out new products more efficiently.',
          pitch: 'Random -2',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Monday morning or Tuesday afternoon to see if Hamer Street Consulting could be of value?',
          signoff: 'Sincerely,<p>Eric',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Hi Torin,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'My company Hamer Street Consulting helps null professionals generate leads at 1/30th of the average cost.',
          reason: 'Has anything I\'ve mentioned resonated with what your team at ebay might benefit from? New product launches are usually a good time to evaluate new options so I figure it makes sense to keep trying to speak with you.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have time for a call Wednesday morning or Thursday afternoon to see if Hamer Street Consulting might be helpful given the latest news on ebay\'s new product?',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Happy Tuesday,',
          opener: 'I\'m glad you had a moment to visit Hamer Street Consulting\'s website. I\'m curious to hear your thoughts.',
          role: 'My company Hamer Street Consulting helps null professionals generate leads at 1/30th of the average cost.',
          reason: 'As you might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">Hamer Street Consulting</a> can help you generate leads at 1/30th of the average cost.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our website to see what\'s new, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Thursday morning or Friday afternoon to see if now is a better time for Hamer Street Consulting to add value?',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Hi Torin,',
          opener: 'I hope you don\'t mind my persistence.',
          role: 'As a refresher, my role at Hamer Street Consulting is to help null hear "yes" more often.',
          reason: 'Did you get a chance to go over what I sent? The work we do at <a href="www.ehamer.us">Hamer Street Consulting</a> is well received by companies in the computer software industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Thursday morning or Friday afternoon to see if Hamer Street Consulting can generate leads at 1/30th of the average cost? Feel free to add time on my <a href="https://calendly.com/kyle-autobound">calendar</a>.',
          signoff: 'Best,<p>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Torin,',
          opener: 'Hope your Tuesday morning is going well.',
          role: 'My company Hamer Street Consulting helps null professionals generate leads at 1/30th of the average cost.',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Thursday morning or Friday afternoon to see if Hamer Street Consulting can generate leads at 1/30th of the average cost? Feel free to set up some time to connect on my <a href="https://calendly.com/kyle-autobound">calendar</a>.',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Happy Tuesday,',
          opener: 'I hope you\'ve been well since my last note.',
          role: 'As a refresher, my role at Hamer Street Consulting is to help companies like ebay hear "yes" more often.',
          reason: 'I\'m curious to hear your thoughts on the work <a href="www.ehamer.us">Hamer Street Consulting</a> does to help companies such as ebay roll out new products more efficiently.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'All the best,<p>Eric',
          signiture: ''
        }
      },
      created: '2020-02-18T18:54:01.126Z',
      modified: '2020-02-18T18:54:01.126Z',
      activation_date: '2020-02-18T18:54:01.126Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e585513cb5aae3ac8830c98',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Garret Tabolt',
      company_name: 'Apple',
      email: 'garret.tabolt@gmail.com',
      job_title: 'VP of sales ops',
      contact_id: 257451,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Apple\'s Hamer Street Consulting Contact (Intro to Eric)',
          greeting: 'Good afternoon Garret,',
          opener: 'It\'s very nice to meet you via email.',
          role: 'I\'m your point of contact at Hamer Street Consulting, it\'s a pleasure to meet you virtually. We help VicePresident target buyers most likely to respond, and reach them with auto-composed, humanistic messaging that is proven to unlock relationships that close deals. You may have heard of Roderick Jefferson & Associates LLC, they are one of our more successful clients',
          reason: 'Given your role in VicePresident at Apple, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Friday ',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes to connect on Monday morning or Tuesday afternoon to see if Hamer Street Consulting could be of value?',
          signoff: 'Best,<p>Eric',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Happy Thursday Garret,',
          opener: 'I trust you\'re having a good Thursday so far.',
          role: 'To recap, I\'m in charge of Apple\'s account helping consumer electronics companies target buyers most likely to respond, and reach them with auto-composed, humanistic messaging that is proven to unlock relationships that close deals. One of our most successful customers is Roderick Jefferson & Associates LLC if you care to look them up.',
          reason: 'I wanted to follow up on my previous message to see if you\'ve had a chance to give it any thought.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes to connect on Monday morning or Tuesday afternoon to see if Hamer Street Consulting could be of value?',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Hi Garret,',
          opener: 'I\'m intruiged in what you\'re working on, I\'ve been following Apple for a while now.',
          role: '',
          reason: 'Have you had a chance to check out my previous emails? I think the work we do at <a href="www.ehamer.us">Hamer Street Consulting</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Friday morning or Monday afternoon to see if Hamer Street Consulting can generate leads at 1/30th of the average cost?  Feel free to add time on my <a href="https://calendly.com/kyle-autobound">calendar</a><p>Thanks and hope to connect soon!',
          signoff: 'Best,<p>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Happy Thursday Garret,',
          opener: 'Thanks for taking a minute to visit our site. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how my team at <a href="www.ehamer.us">Hamer Street Consulting</a> adds value to teams like yours.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability to connect on Monday or Tuesday to see if Hamer Street Consulting\'s resources might be of value? Feel free to add time on my <a href="https://calendly.com/kyle-autobound">calendar</a>.<p> I look forward to hearing from you.',
          signoff: 'All the best,<p>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Hi Garret,',
          opener: 'I\'m sure you\'re busy, so I thought I\'d circle back to try and catch you at the right time.',
          role: 'As you might\'ve seen on my LinkedIn page, I work on the sales team at Hamer Street Consulting.',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Happy Thursday,',
          opener: 'I saw you had a chance to check out my LinkedIn profile, so I thought I\'d circle back.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Friday morning or Monday afternoon to see if Hamer Street Consulting can generate leads at 1/30th of the average cost?  Feel free to add time on my <a href="https://calendly.com/kyle-autobound">calendar</a><p>Thanks and hope to connect soon!',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Hi Garret,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'Have you had a chance to check out my previous emails? I think the work we do at <a href="www.ehamer.us">Hamer Street Consulting</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Apple, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<p>Eric',
          signiture: ''
        }
      },
      created: '2020-02-27T23:47:31.275Z',
      modified: '2020-02-27T23:47:31.275Z',
      activation_date: '2020-02-27T23:47:31.275Z',
      steps: [
        {
          _id: '5e585558faf0a436b4813d1f',
          step: 'send_intro_2',
          date: '2020-02-27T23:48:40.055Z'
        },
        {
          _id: '5e58559400c3d0370af90966',
          step: 'send_intro_3',
          date: '2020-02-27T23:49:40.349Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e68370dedf97736172f3865',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom Foolery',
      company_name: 'Google',
      email: 'kyleschuster93@gmail.com',
      job_title: 'Sales Manager',
      contact_id: 244501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Entering New Market',
      campaign_id: '2912',
      origEmails: {
        campaign_id: 2912,
        campaign_name: 'Entering New Market',
        intro1: {
          subject: 'Idea for Google\'s approach into a new market',
          greeting: 'Good afternoon,',
          opener: 'Wishing you a pleasant afternoon.',
          role: 'As you might recall, I\'m your Hamer Street Consulting sales representative.',
          reason: 'It was great speaking with you previously, I thought I\'d reach back out to see if now might be a better time for us to reconnect. I\'m glad to refresh your memory on what we do over here at <a href="www.ehamer.us">Hamer Street Consulting</a> in the sales acceleration  space.',
          pitch: 'test-12-1',
          calltoaction: 'I realize your schedule is likely busy, so I thought I\'d share a few times for us to connect. Are you free next Thursday or Friday for a 20-30 minute call?  I look forward to hearing from you.',
          signoff: 'Sincerely,<p>Eric',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Happy Wednesday,',
          opener: 'I hope you\'re having a nice day.',
          role: 'As a refresher, we empower Sales professionals hear "yes" more often.',
          reason: 'As you might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">Hamer Street Consulting</a> can help you hear "yes" more often.',
          pitch: 'test-12-2',
          calltoaction: 'When you have a chance, feel free to look over our website again if it\'s helpful, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Monday morning or Tuesday afternoon to see if (ab_user_company) can generate leads at 1/30th of the average cost?',
          signoff: 'All the best,<p>Eric',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Happy Wednesday Tom,',
          opener: 'I hope you don\'t mind my persistence.',
          role: 'To quickly recap, I work with Sales professionals to help them hear "yes" more often.',
          reason: 'Does anything I\'ve mentioned resonated with some of what Google could benefit from? I\'ve had a lot of success working with companies when they are entering new markets, so I figure it makes sense to keep trying to get ahold with you.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'When you have a chance, feel free to browse our website to see what\'s new, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Wednesday morning or Thursday afternoon to see if now is a better time for Hamer Street Consulting to add value?',
          signoff: 'Thanks,<p>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Happy Wednesday,',
          opener: 'I hope you don\'t mind my persistence.',
          role: 'To quickly recap, I work with Sales professionals to help them hear "yes" more often.',
          reason: 'As you might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">Hamer Street Consulting</a> adds value to businesses like Google in the computer software space.  One of our most successful customers is Roderick Jefferson & Associates LLC',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'I realize your schedule is likely busy, so I thought I\'d share a few times for us to connect. Are you free next Thursday or Friday for a 20-30 minute call?  I look forward to hearing from you.',
          signoff: 'Thanks,<p>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Hey Tom,',
          opener: 'I hope you don\'t mind my persistence.',
          role: 'To quickly recap, I work with Sales professionals to help them hear "yes" more often.',
          reason: 'Has anything I\'ve mentioned resonated with what your team at Google might benefit from? I\'ve had a lot of success working with companies when they are entering new markets, so I figure it makes sense to keep trying to connect with you.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect Thursday to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://calendly.com/kyle-autobound">calendar</a> for your convenience.',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Hi Tom,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: 'To quickly recap, I work with Sales professionals to help them generate leads at 1/30th of the average cost.',
          reason: 'Have you had a chance to see my previous note? After diving into Google a bit deeper, I think what we do will have a massive impact alongside Google\'s entrance into the new market.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'When you have a chance, feel free to look over our website again if it\'s helpful, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Monday morning or Tuesday afternoon to see if (ab_user_company) can generate leads at 1/30th of the average cost?',
          signoff: 'Best,<p>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Hi Tom,',
          opener: 'I hope you\'ve been well since my last note.',
          role: 'As a refresher, my role at Hamer Street Consulting is to help companies like Google hear "yes" more often.',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. In the meantime, I figured I\'d try one last time to connect with you. ',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        }
      },
      created: '2020-03-11T00:55:41.337Z',
      modified: '2020-03-11T00:55:41.337Z',
      activation_date: '2020-03-11T00:55:41.337Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e68371192092036f87c24d3',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Don Fakkert',
      company_name: 'Bynder',
      email: 'don@getbynder.com',
      job_title: 'Head of Project Management & Customer Success',
      contact_id: 257711,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Hamer Street Consulting for computer software companies (Intro to Eric)',
          greeting: 'Good afternoon,',
          opener: 'It\'s very nice to e-meet you.',
          role: 'Hamer Street Consulting is a sales enablement  company that specializes in working with computer software businesses.',
          reason: 'Given your position in CustomerSuccess at Bynder, I figured it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Wednesday ',
          calltoaction: 'I realize your schedule is likely busy, so I thought I\'d share a few times for us to connect. Are you free next Thursday or Friday for a 20-30 minute call?  I look forward to hearing from you.',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Happy Wednesday Don,',
          opener: 'Wishing you a pleasant afternoon.',
          role: 'To recap, I\'m the main point of contact for Bynder at Hamer Street Consulting.',
          reason: 'I wanted to circle back on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering? Can we chat? I promise not to waste your time. ',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Happy Wednesday Don,',
          opener: 'I\'m pretty persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Did you get a chance to go over what I sent? The work we do at <a href="www.ehamer.us">Hamer Street Consulting</a> is well received by companies in the computer software industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have any availability to connect on Wednesday or Thursday to see if Hamer Street Consulting can help? Feel free to set up some time to connect on my <a href="https://calendly.com/kyle-autobound">calendar</a>. I look forward to hearing from you.',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Hi Don,',
          opener: 'I\'m intruiged in what your team is working on, I\'ve been following Bynder for a while now.',
          role: '',
          reason: 'I wanted to circle back on my previous note to see if you have given it any thought.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Thursday morning or Friday afternoon to see if Hamer Street Consulting can generate leads at 1/30th of the average cost?  Feel free to set up some time to connect on my <a href="https://calendly.com/kyle-autobound">calendar</a><p>Thanks and hope to connect soon!',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Happy Wednesday Don,',
          opener: 'I don\'t mean to be a bother, I know how busy the life of a CustomerSuccess professional can be.',
          role: 'As you might\'ve seen on my LinkedIn page, I work on the sales team at Hamer Street Consulting.',
          reason: 'I wanted to circle back on my previous note to see if you have given it any thought.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes to connect on Thursday morning or Friday afternoon to see if Hamer Street Consulting could be of value?',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Don,',
          opener: 'I hope you don\'t mind my persistence.',
          role: '',
          reason: 'As you might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">Hamer Street Consulting</a> can help you generate leads at 1/30th of the average cost.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Thursday morning or Friday afternoon to see if Hamer Street Consulting can generate leads at 1/30th of the average cost? Feel free to set up some time to connect on my <a href="https://calendly.com/kyle-autobound">calendar</a>.',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Don,',
          opener: 'I\'m intruiged in what your team is working on, I\'ve been following Bynder for a while now.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how my team at <a href="www.ehamer.us">Hamer Street Consulting</a> adds value to teams like yours.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        }
      },
      created: '2020-03-11T00:55:45.233Z',
      modified: '2020-03-11T00:55:45.233Z',
      activation_date: '2020-03-11T00:55:45.233Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6a647f69130110814d9075',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom Foolery',
      company_name: 'Google',
      email: 'kyleschuster93@gmail.com',
      job_title: 'Sales Manager',
      contact_id: 244501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series B',
      campaign_id: '2913',
      origEmails: {
        campaign_id: 2913,
        campaign_name: 'Series B',
        intro1: {
          subject: 'Article on Google\'s recent Series B 💸- Hamer Street Consulting',
          greeting: 'Hey Tom,',
          opener: 'I hope you\'ve been well since my last note.',
          role: 'As a refresher, I\'m the COO & Co-Founder of Hamer Street Consulting.',
          reason: 'It\'s been a while since you and I spoke last, so I thought it made sense to reach back out.',
          pitch: 'test-10-1',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on Hamer Street Consulting?',
          greeting: 'Tom,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'To refresh your memory, I\'m the COO & Co-Founder of Hamer Street Consulting, I reached out a few days ago.',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: 'test-10-2',
          calltoaction: 'Do you have time for a call to see if Hamer Street Consulting might be helpful given the latest news on Google\'s Series B? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'Cheers,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on Hamer Street Consulting?',
          greeting: 'Tom,',
          opener: 'I don\'t mean to be a pest, I\'m sure you\'re quite busy following the latest Series B round.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Google?',
          signoff: 'Cheers,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on Hamer Street Consulting?',
          greeting: 'Hey Tom,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Google experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if Hamer Street Consulting could be of value given the recent news on Google\'s Series B? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Cheers,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on Hamer Street Consulting?',
          greeting: 'Hey Tom,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">Hamer Street Consulting</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on Hamer Street Consulting?',
          greeting: 'Hi Tom,',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. What did you think?',
          role: '',
          reason: 'I thought I\'d follow up on my previous message, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on Hamer Street Consulting?',
          greeting: 'Hi Tom,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to direct my attention elsewhere. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Cheers,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-03-12T16:34:07.775Z',
      modified: '2020-03-12T16:34:07.775Z',
      activation_date: '2020-03-12T16:34:07.775Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6b1b5c00be6d655098de3d',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom Foolery',
      company_name: 'Google',
      email: 'kyleschuster93@gmail.com',
      job_title: 'Sales Manager',
      contact_id: 244501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Contact 30 Days',
      campaign_id: '2922',
      origEmails: {
        campaign_id: 2922,
        campaign_name: 'No Contact 30 Days',
        intro1: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'I\'ve been eager to connect with you again. How have you been?',
          role: 'As a refresher, my company New Company, helps businesses sell more with advanced auto-personalization.',
          reason: 'I reviewed my notes and noticed you had previously looked into working with us so I thought I\'d reach back out and refresh you memory on what we do.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website</a> to see what\'s new. Can we <a href="https://meetings.hubspot.com/kyle282">set up 20-30 minutes</a> to connect to see if now is a better time for New Company to add value?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, I help companies like Google set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'Thought I\'d follow up in case my previous message slipped your inbox.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/kyle282">sync</a> to see if so?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Did you get a chance to see what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'Thanks for taking a moment to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T05:34:20.760Z',
      modified: '2020-03-13T05:34:20.760Z',
      activation_date: '2020-03-13T05:34:20.760Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6bbb71168e1f6598633790',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Ryan Asai',
      company_name: 'Oracle',
      email: 'demo3729@autobound.ai',
      job_title: 'Sales Manager, Business Analytics',
      contact_id: 289782,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Intro meeting - how New Company can increase sales qualified leads at Oracle',
          greeting: 'Hi Ryan,',
          opener: 'i m test snippet',
          role: 'I\'m the COO & Co-Founder of New Company, pleasure to meet you via email.',
          reason: 'Given your role at Oracle, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Ryan,',
          opener: 'What would it mean to you if your business was able to increase efficiencies around sales qualified leads?',
          role: 'As a refresher, I help companies like Oracle set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'I thought I\'d circle back on my previous messages to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability to connect to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Ryan,',
          opener: 'Hope you don\'t mind my persistence.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Ryan,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall - I shared a message a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Ryan,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Ryan,',
          opener: 'Saw you had a chance to view our site! Did you have any questions I could help answer?',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Oracle.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Ryan,',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T16:57:21.230Z',
      modified: '2020-03-13T16:57:21.230Z',
      activation_date: '2020-03-13T16:57:21.230Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6bbea720bdb964e539ec3b',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Sara Carrier',
      company_name: 'Oracle',
      email: 'demo4169@autobound.ai',
      job_title: 'Regional Manager, Sales Development',
      contact_id: 289797,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'time spent selling vs. prospecting for Oracle',
          greeting: 'Hi Sara,',
          opener: 'I had a chance to browse Oracle\'s site and thought it made sense to introduce myself.',
          role: 'I help teams like yours set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'Given your position at Oracle, I figured it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Might that work for you?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sara,',
          opener: 'i m test snippet',
          role: 'Just to refresh your memory, I\'m the COO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I thought I\'d bump my previous message to the top of your inbox incase it got lost in your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/kyle282">sync</a> to see if so?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Sara,',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Did you get a chance to review what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Oracle.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the Oracle team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a> for your convenience.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Sara,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Oracle experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Sara,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I sent a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Oracle, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Sara,',
          opener: 'i m test snippet',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Oracle.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Sara,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Oracle, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T17:11:03.262Z',
      modified: '2020-03-13T17:11:03.262Z',
      activation_date: '2020-03-13T17:11:03.262Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6bc5d18e80756510000df0',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Leianna Euteneuer',
      company_name: 'zones',
      email: 'demo3273@autobound.ai',
      job_title: 'Sales Enablement Manager',
      contact_id: 289839,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Increasing sales qualified leads at zones || New Company',
          greeting: 'Hi Leianna,',
          opener: 'i m test snippet',
          role: 'I specialize in helping companies like zones generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Given your role at zones, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/kyle282">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Leianna.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Leianna,',
          opener: 'i m test snippet',
          role: 'As a refresher, my team works with businesses like zones to help auto-compose expert sales outreach instantly.',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Leianna,',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Have you had a chance to review my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/kyle282">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Leianna,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'You might recall - I shared a message a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Leianna,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Leianna,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for zones.',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Leianna,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to direct my attention elsewhere. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T17:41:37.689Z',
      modified: '2020-03-13T17:41:37.689Z',
      activation_date: '2020-03-13T17:41:37.689Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6bc5e5970cb3657505d9f9',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Robert Kawahara',
      company_name: 'Elastic',
      email: 'demo2548@autobound.ai',
      job_title: 'Sales Director',
      contact_id: 289852,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Kyle <> Robert - intro 👋 ',
          greeting: 'Hi Robert,',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the COO & Co-Founder of New Company, it\'s a pleasure to meet you via email. I help companies generate more sales qualified leads using extremely relevant, AI powered customization. You may have heard of Kompyte, they are one of our more successful clients.',
          reason: 'Given your role at Elastic, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Would that work for you?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Robert,',
          opener: 'Did you happen to see my last note?',
          role: 'As a refresher, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d bump my previous message to the top of your inbox incase it got lost in shuffle.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Elastic?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Elastic experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Robert,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Elastic, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Robert,',
          opener: 'i m test snippet',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T17:41:57.930Z',
      modified: '2020-03-13T17:41:57.930Z',
      activation_date: '2020-03-13T17:41:57.930Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c1275efb2ac0910727ec2',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Mark Durawala',
      company_name: 'Awake Security',
      email: 'demo2663@autobound.ai',
      job_title: 'Director, Sales',
      contact_id: 289866,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: '10 mins to connect? Awake Security & New Company',
          greeting: 'Hi Mark,',
          opener: 'i m test snippet',
          role: 'I\'m a COO & Co-Founder at New Company, a sales enablement company that helps businesses set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'Given your position at Awake Security, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Mark,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'To refresh your memory, I\'m the COO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I thought I\'d circle back on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Mark,',
          opener: 'i m test snippet',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Awake Security<br><br>I\'m happy to refresh your memory on what we do in the sales automation space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Mark,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Awake Security.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mark,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I sent a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Awake Security, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Mark,',
          opener: 'Thanks for taking a moment to visit our site. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> increases efficiencies to businesses like Awake Security.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mark,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Awake Security, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:08:37.744Z',
      modified: '2020-03-13T23:08:37.744Z',
      activation_date: '2020-03-13T23:08:37.744Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c1382efb2ac0910727ec4',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Scott Seifert',
      company_name: 'adobe',
      email: 'demo2941@autobound.ai',
      job_title: 'Senior Director, Global Sales Operations',
      contact_id: 289867,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Scott - auto-compose expert sales outreach instantly',
          greeting: 'Hi Scott,',
          opener: 'Just browsed adobe\'s website, seems your team does very interesting work. test',
          role: 'I\'m the COO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like adobe auto-compose expert sales outreach instantly.test',
          reason: 'Given your role at adobe, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Might that work for you?',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Scott,',
          opener: 'What would it mean to you if your business was able to increase efficiencies around time spent selling vs. prospecting?',
          role: 'Just to refresh your memory, I\'m the COO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I thought I\'d follow up on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'Hope you don\'t mind my persistence.',
          role: '',
          reason: 'Did you get a chance to review what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like adobe.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at adobe?',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'You might recall - I shared a message a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Scott,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like adobe.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:13:06.390Z',
      modified: '2020-03-13T23:13:06.390Z',
      activation_date: '2020-03-13T23:13:06.390Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c15c4efb2ac0910727f82',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom Black',
      company_name: 'CODAN US Corporation',
      email: 'demo2444@autobound.ai',
      job_title: 'Manager, Sales (Mid Atlantic Region)',
      contact_id: 289871,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: '👋 Intro - CODAN US oration - auto-compose expert sales outreach instantly',
          greeting: 'Hi Tom,',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the COO & Co-Founder of New Company, pleasure to meet you via email.',
          reason: 'Given your position at CODAN US oration, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'Did you happen to see my last email?',
          role: 'As a refresher, I work with businesses to help them sell more with advanced auto-personalization.',
          reason: 'I thought I\'d follow up on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like CODAN US oration<br><br>I\'m happy to refresh your memory on what we do in the sales automation industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/kyle282">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like CODAN US oration.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I sent a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like CODAN US oration.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at CODAN US oration, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:22:44.941Z',
      modified: '2020-03-13T23:22:44.941Z',
      activation_date: '2020-03-13T23:22:44.941Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c15fcefb2ac0910727f84',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Meike Rowley',
      company_name: 'Oracle',
      email: 'eric@autobound.ai',
      job_title: 'Territory Sales Manager',
      contact_id: 289875,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Question about sales qualified leads',
          greeting: 'Hi Meike,',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the COO & Co-Founder of New Company - a sales automation company based in San Francisco that helps businesses like Oracle sell more with advanced auto-personalization.',
          reason: 'Given your position at Oracle, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Might that work for you?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Meike,',
          opener: 'Did you happen to see my last email?',
          role: 'To quickly recap, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'I wanted to follow up on my previous email from a couple of days ago to see if you\'ve had time to give it any consideration.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Meike,',
          opener: 'Hope you don\'t mind my persistence.',
          role: '',
          reason: 'If this message is better suited for someone else, let me know and I\'d be happy to reach out to them instead.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Oracle?',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Meike,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Based on feedback from similar companies in Oracle\'s industry, I think it\'d be worth your time to chat.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Meike,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Meike,',
          opener: 'Glad you had a chance to visit our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> adds value to businesses like Oracle.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Meike,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:23:40.031Z',
      modified: '2020-03-13T23:23:40.031Z',
      activation_date: '2020-03-13T23:23:40.031Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c172a460b030953f7a9d0',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Scott Zyrek',
      company_name: 'Microsoft',
      email: 'demo3572@autobound.ai',
      job_title: 'Sales Manager',
      contact_id: 289885,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Intro call - how New Company can decrease spammy & generic outreach at Microsoft',
          greeting: 'Hi Scott,',
          opener: 'Just browsed Microsoft\'s website, seems your team does very interesting work. test',
          role: 'My company, New Company, helps companies like Microsoft sell more with advanced auto-personalization.',
          reason: 'Given your position at Microsoft, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/kyle282">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Scott.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Scott,',
          opener: 'i m test snippet',
          role: 'As a refresher, I work with businesses to help them sell more with advanced auto-personalization.',
          reason: 'I thought I\'d bump my previous message to the top of your inbox incase it got lost in shuffle.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'I\'ve been working with some folks in your industry who are struggling with low quota attainment & high attrition.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Microsoft<br><br>I\'m happy to refresh your memory on what we do in the sales enablement space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. I look forward to hearing from you.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Scott,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'You might recall - I shared a note a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Scott,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Scott,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:28:42.306Z',
      modified: '2020-03-13T23:28:42.306Z',
      activation_date: '2020-03-13T23:28:42.306Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c1925460b030953f7a9d7',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Greg Wallace',
      company_name: 'Oracle',
      email: 'demo3311@autobound.ai',
      job_title: 'Sales Director, Oracle Managed Cloud Services',
      contact_id: 289914,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Intro call - how New Company can increase sales qualified leads at Oracle',
          greeting: 'Hi Greg,',
          opener: 'Very nice to meet you via email.',
          role: 'I\'m the COO & Co-Founder of New Company, it\'s a pleasure to e-meet you. We help businesses set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'Given your position at Oracle, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/kyle282">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Greg.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Greg,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'Just to refresh your memory, I\'m the COO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I thought I\'d circle back on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/kyle282">sync</a> to see if so?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Greg,',
          opener: 'i m test snippet',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Greg,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Based on feedback from similar companies in Oracle\'s industry, I think it\'d be worth your time to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Greg,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Greg,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: 'If my messages are better suited for someone else, please let me know and I\'d be happy to reach out to them instead.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Greg,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Oracle, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:37:09.437Z',
      modified: '2020-03-13T23:37:09.437Z',
      activation_date: '2020-03-13T23:37:09.437Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c1d3e22abc823484c0a4d',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom Saso',
      company_name: 'ServiceNow',
      email: 'demo4195@autobound.ai',
      job_title: 'Sales Manager, ITOM Product Line',
      contact_id: 289940,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Tom - Sellers have a new expert copilot',
          greeting: 'Hi Tom,',
          opener: 'i m test snippet',
          role: 'I\'m the COO & Co-Founder of New Company, pleasure to meet you virtually.',
          reason: 'Given your position at ServiceNow, I figured it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'Did you happen to see my last email?',
          role: 'To recap, I\'m the COO & Co-Founder of New Company.',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'i m test snippet',
          role: '',
          reason: 'Have you had a chance to review my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does ServiceNow experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for ServiceNow.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> adds value to businesses like ServiceNow.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tom,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:54:38.700Z',
      modified: '2020-03-13T23:54:38.700Z',
      activation_date: '2020-03-13T23:54:38.700Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e6c1deb999382236e15193e',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Taylor Mooers',
      company_name: 'PowerSchool',
      email: 'demo3591@autobound.ai',
      job_title: 'Sales Operations Analyst',
      contact_id: 289946,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Question about time spent selling vs. prospecting',
          greeting: 'Hi Taylor,',
          opener: 'Very nice to meet you via email.',
          role: 'I\'m the COO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like PowerSchool auto-compose expert sales outreach instantly.test',
          reason: 'Given your position at PowerSchool, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Taylor,',
          opener: 'i m test snippet',
          role: 'To quickly recap, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d circle back on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Taylor,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to review my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Taylor,',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like PowerSchool.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Taylor,',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I shared a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at PowerSchool, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Taylor,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'If my messages are better suited for someone else, please let me know and I\'d be happy to reach out to them instead.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Taylor,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at PowerSchool, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-13T23:57:31.786Z',
      modified: '2020-03-13T23:57:31.786Z',
      activation_date: '2020-03-13T23:57:31.786Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e70f27f96e8b51f5849d97e',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Summer Garish',
      company_name: 'Tableau',
      email: 'demo3254@autobound.ai',
      job_title: 'Senior Area Sales Manager',
      contact_id: 289961,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Kyle <> Summer - intro 🤝 ',
          greeting: 'Hi Summer,',
          opener: 'Very nice to meet you via email.',
          role: 'I work with teams like yours at Tableau and feel as though you\'d find value in the work we do at New Company, helping companies sell more with advanced auto-personalization.',
          reason: 'Given your role at Tableau, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Wednesday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Summer,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'To refresh your memory, I\'m the COO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I wanted to follow up on my last email to see if you\'ve had a chance to give it any thought.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Summer,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Tableau<br><br>I\'m happy to refresh your memory on what we do in the sales automation space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have any availability to connect to see if New Company can help? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. Hope to connect with you soon.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Summer,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'You might recall - I shared a message a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Summer,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Summer,',
          opener: 'Glad you were able to check out our site, hopefully you have a deeper understanding of how we might be a fit for Tableau.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Tableau experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Summer,',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Tableau, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-17T15:53:35.951Z',
      modified: '2020-03-17T15:53:35.951Z',
      activation_date: '2020-03-17T15:53:35.951Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e73e7dd40c2ba4dc1c90e84',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Vera ',
      company_name: 'Intapp, Inc.',
      email: 'demo2571@autobound.ai',
      job_title: 'Senior Manager, Sales Operations',
      contact_id: 289962,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Intro call - how New Company can decrease spammy & generic outreach at Intapp',
          greeting: '',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I work with teams like yours, helping to generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Given your position at Intapp, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Friday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Might that work for you?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Did you happen to see my last email?',
          role: 'As a refresher, I\'m the COO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I figured I\'d follow up on my previous note from a couple of days ago to see if you\'ve had a chance to give it any consideration.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to review my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/kyle282">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Intapp.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Saw you had a chance to view our site! Did you have any questions I could help answer?',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intapp, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-19T21:45:01.823Z',
      modified: '2020-03-19T21:45:01.823Z',
      activation_date: '2020-03-19T21:45:01.823Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e744871ba1e8946058b91bc',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Kristine ',
      company_name: 'Blue Water Ads',
      email: 'demo3407@autobound.ai',
      job_title: 'Manager, Sales',
      contact_id: 289968,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Question about sales qualified leads',
          greeting: '',
          opener: 'Very nice to e-meet you.',
          role: 'New Company is a sales enablement company that specializes in working with businesses like Blue Water Ads.',
          reason: 'Given your position at Blue Water Ads, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Friday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Would that work for you?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Did you happen to see my last message?',
          role: 'To recap, I\'m the COO & Co-Founder of New Company, a sales enablement company that works with businesses to help them generate more sales qualified leads using extremely relevant, AI powered customization. One of our most successful customers is Kompyte if you care to look them up.',
          reason: 'I thought I\'d bump my previous message up incase it got lost in shuffle.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Blue Water Ads<br><br>I\'m happy to refresh your memory on what we do in the sales enablement space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Blue Water Ads?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Based on feedback from similar companies in Blue Water Ads\'s industry, I think it\'d be worth your time to sync up.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Glad you were able to check out New Company\'s site, hopefully you have a deeper understanding of how we might be a fit for Blue Water Ads.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> increases efficiencies to businesses like Blue Water Ads.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-20T04:37:05.733Z',
      modified: '2020-03-20T04:37:05.734Z',
      activation_date: '2020-03-20T04:37:05.734Z',
      steps: [
        {
          _id: '5e78ddcd886713301951d390',
          step: 'send_intro_1',
          date: '2020-03-23T16:03:25.407Z'
        },
        {
          _id: '5e78de0ff407e330a6d6a493',
          step: 'send_intro_2',
          date: '2020-03-23T16:04:31.892Z'
        },
        {
          _id: '5e78de521016a92fc5fef682',
          step: 'send_intro_3',
          date: '2020-03-23T16:05:38.399Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e754ebca2d31d30125ba02f',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Wilfried ',
      company_name: 'Salesforce',
      email: 'demo2629@autobound.ai',
      job_title: 'Regional Sales Director, Salesforce Marketing',
      contact_id: 289970,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Wilfried / Kyle chat? Customized outreach at scale',
          greeting: '',
          opener: 'Very nice to e-meet you.',
          role: 'I work with teams like yours at Salesforce and think you\'d find value in the work we do at New Company, helping companies sell more with advanced auto-personalization.',
          reason: 'Given your position at Salesforce, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I hope you have been well since I last reached out.',
          role: 'To recap, I\'m the COO & Co-Founder of New Company, a sales enablement company that works with businesses to help them generate more sales qualified leads using extremely relevant, AI powered customization. One of our most successful customers is Kompyte if you care to look them up.',
          reason: 'Thought I\'d follow up in case my previous message slipped your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Salesforce<br><br>I\'m happy to refresh your memory on what we do in the sales enablement industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Salesforce?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Salesforce experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'If my messages are better suited for someone else, please let me know and I\'d be happy to direct my attention elsewhere.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-20T23:16:12.259Z',
      modified: '2020-03-20T23:16:12.259Z',
      activation_date: '2020-03-20T23:16:12.259Z',
      steps: [
        {
          _id: '5e78ddb8c99d472feead08c2',
          step: 'send_intro_2',
          date: '2020-03-23T16:03:04.237Z'
        },
        {
          _id: '5e78ddfd8d412d2ff6e8e04a',
          step: 'send_intro_3',
          date: '2020-03-23T16:04:13.789Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e754f9e24eee25c0854a580',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Thomas ',
      company_name: 'Meltwater',
      email: 'demo3722@autobound.ai',
      job_title: 'Sales Manager',
      contact_id: 289977,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the COO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Meltwater sell more with advanced auto-personalization.',
          reason: 'Given your role at Meltwater, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Might that work for you?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, we empower companies to auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d follow up on my last email from a couple of days ago to see if you\'ve had a chance to give it any consideration.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Meltwater<br><br>I\'m happy to refresh your memory on what we do in the sales automation industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'You might recall - I shared a message a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Glad you were able to check out our site, hopefully you have a deeper understanding of how we might be a fit for Meltwater.',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Meltwater.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-20T23:19:58.036Z',
      modified: '2020-03-20T23:19:58.036Z',
      activation_date: '2020-03-20T23:19:58.036Z',
      steps: [
        {
          _id: '5e78de1ca2d31d30125ba06b',
          step: 'send_intro_1',
          date: '2020-03-23T16:04:44.289Z'
        },
        {
          _id: '5e78de64a0510f2fe144dbc9',
          step: 'send_intro_2',
          date: '2020-03-23T16:05:56.653Z'
        },
        {
          _id: '5e78deaa7200ae30444ded87',
          step: 'send_intro_3',
          date: '2020-03-23T16:07:06.300Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e755455f035c05c2f11773a',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Suzanne ',
      company_name: 'LinkedIn',
      email: 'demo3163@autobound.ai',
      job_title: 'Manager, Sales Solutions Relationship',
      contact_id: 289978,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Suzanne - Sellers have a new expert copilot',
          greeting: '',
          opener: 'Very nice to meet you via email.',
          role: 'I\'m the COO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like LinkedIn sell more with advanced auto-personalization.',
          reason: 'Given your position at LinkedIn, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Would that work for you?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: 'As a refresher, my team works with businesses like LinkedIn to help auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d circle back on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/kyle282">sync</a> to see if so?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I\'ve been working with some folks in your industry who are struggling with spammy & generic outreach.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the LinkedIn team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a> for your convenience.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does LinkedIn experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for LinkedIn.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does LinkedIn experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-20T23:40:05.594Z',
      modified: '2020-03-20T23:40:05.594Z',
      activation_date: '2020-03-20T23:40:05.594Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7557c5f035c05c2f11773e',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Vince ',
      company_name: 'Medallia Inc.',
      email: 'demo3878@autobound.ai',
      job_title: 'Sales Director',
      contact_id: 289983,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Vince / Kyle chat? Customized outreach at scale',
          greeting: '',
          opener: 'Very nice to e-meet you.',
          role: 'I\'m the COO & Co-Founder of New Company. We help businesses sell more with advanced auto-personalization. It\'s nice to meet you virtually.',
          reason: 'Given your role at Medallia, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/kyle282">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Vince.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'What would it mean to you if your business was able to increase efficiencies around sales qualified leads?',
          role: 'A quick recap, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'I wanted to follow up on my last email from a couple of days ago to see if you\'ve had a chance to give it any thought.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Medallia<br><br>I\'m happy to refresh your memory on what we do in the sales automation space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. Hope to connect with you soon.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Medallia.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'I thought I\'d follow up on my previous message, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/kyle282">here</a>.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Medallia, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-20T23:54:45.985Z',
      modified: '2020-03-20T23:54:45.985Z',
      activation_date: '2020-03-20T23:54:45.986Z',
      steps: [
        {
          _id: '5e7557ca26d82f2fda73a69e',
          step: 'send_intro_1',
          date: '2020-03-20T23:54:50.582Z'
        },
        {
          _id: '5e755806f407e330a6d6a468',
          step: 'send_intro_2',
          date: '2020-03-20T23:55:50.990Z'
        },
        {
          _id: '5e75584346e24f30d9a2f0b3',
          step: 'send_intro_3',
          date: '2020-03-20T23:56:51.319Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e755868f407e330a6d6a46e',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Sebastian ',
      company_name: 'adobe',
      email: 'demo3475@autobound.ai',
      job_title: 'Director, Sales, Digital Marketing, Strategic Enterprise Accounts',
      contact_id: 289988,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: '🤝 Intro - adobe - sell more with advanced auto-personalization',
          greeting: '',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the COO & Co-Founder of New Company. We help businesses sell more with advanced auto-personalization. It\'s nice to meet you virtually.',
          reason: 'Given your position at adobe, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Monday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: 'As a refresher, I help companies like adobe set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'I wanted to circle back on my previous email to see if you\'ve had a chance to give it any thought.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/kyle282">sync</a> to see if so?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Did you get a chance to go over what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like adobe.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at adobe?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'You might recall - I shared a note a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I sent a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at adobe, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Glad you were able to check out our site, hopefully you have a deeper understanding of how we might be a fit for adobe.',
          role: '',
          reason: 'If my messages are better suited for someone else, please let me know and I\'d be happy to direct my attention elsewhere.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at adobe, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-20T23:57:28.514Z',
      modified: '2020-03-20T23:57:28.514Z',
      activation_date: '2020-03-20T23:57:28.514Z',
      steps: [
        {
          _id: '5e75586db8c64d300b4ac94c',
          step: 'send_intro_1',
          date: '2020-03-20T23:57:33.608Z'
        },
        {
          _id: '5e7558a9eb9f043004c17442',
          step: 'send_intro_2',
          date: '2020-03-20T23:58:33.892Z'
        },
        {
          _id: '5e7558e65dca35303d6e191e',
          step: 'send_intro_3',
          date: '2020-03-20T23:59:34.323Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7a4de3f0616f797ff5dfbd',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Steve Khan',
      company_name: 'loanDepot.com, LLC',
      email: 'demo3581@autobound.ai',
      job_title: 'Sales Manager',
      contact_id: 289990,
      steps_completed: 1,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Question about sales qualified leads',
          greeting: '',
          opener: 'i m test snippet',
          role: 'I help companies like loanDepot generate more sales qualified leads using extremely relevant, AI powered customization. One of our most successful clients is Kompyte.',
          reason: 'Given your position at loanDepot, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Wednesday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Hope you have been well since I last reached out.',
          role: 'As a refresher I\'m the COO & Co-Founder of New Company.',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/kyle282">sync</a> to see if so?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/kyle282">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Based on feedback from similar companies in loanDepot\'s industry, I think it\'d be worth your time to sync up.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at loanDepot, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Thanks for taking a minute to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does loanDepot experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-24T18:13:55.143Z',
      modified: '2020-03-24T18:13:55.143Z',
      activation_date: '2020-03-24T18:13:55.143Z',
      steps: [
        {
          _id: '5e98fc5e7e35f93731843bdc',
          step: 'send_intro_1',
          date: '2020-04-17T00:46:22.662Z'
        }
      ],
      __v: 1
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7a5a201002097a56e16044',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Valerie Tatarian',
      company_name: 'zones',
      email: 'demo3884@autobound.ai',
      job_title: 'Manager, Sales Enablement',
      contact_id: 289995,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'time spent selling vs. prospecting for zones',
          greeting: '',
          opener: 'i m test snippet',
          role: 'I specialize in helping companies like zones generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Given your position at zones, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Wednesday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/kyle282">calendars</a> match up. Would that work for you?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, I\'m the COO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I wanted to follow up on my last note to see if you\'ve given it any thought.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I have an idea on how to address spammy & generic outreach.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like zones<br><br>I\'m happy to refresh your memory on what we do in the sales enablement space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the zones team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a> for your convenience.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'Based on feedback from similar companies in zones\'s industry, I think it\'d be worth your time to chat.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'i m test snippet',
          role: '',
          reason: 'You might recall, I sent a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Saw you had a chance to view our site! Did you have any questions I could help answer?',
          role: '',
          reason: 'Have you had any thoughts on working with us after the previous messages I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like zones.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/kyle282">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'If I should be speaking to someone else, please let me know and I\'d be happy to reach out to them instead. Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-24T19:06:08.840Z',
      modified: '2020-03-24T19:06:08.840Z',
      activation_date: '2020-03-24T19:06:08.840Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7c0f105fc8f1062448ddcc',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Teresa ',
      company_name: 'ForgeRock',
      email: 'demo4406@autobound.ai',
      job_title: 'VP, Global Sales Operations',
      contact_id: 289997,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Intro call - how New Company can decrease spammy & generic outreach at ForgeRock',
          greeting: '',
          opener: 'Just browsed ForgeRock\'s website, seems your team does very interesting work.',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales enablement company that helps companies generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Given your position at ForgeRock, I thought it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Thursday ',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/daniel612">calendars</a> match up. Would that work for you?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Teresa,',
          opener: 'Did you happen to see my last note?',
          role: 'To recap, I\'m the CEO & Co-Founder of New Company.',
          reason: 'Thought I\'d circle back in case my previous message slipped your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Teresa,',
          opener: 'I have an idea on how to address spammy & generic outreach.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Teresa,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Based on feedback from similar companies in ForgeRock\'s industry, I think it\'d be worth your time to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Teresa,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to ForgeRock.',
          role: '',
          reason: 'As a refresher, I shared a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Teresa,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for ForgeRock.',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like ForgeRock.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Teresa,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at ForgeRock, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-26T02:10:24.620Z',
      modified: '2020-03-26T02:10:24.620Z',
      activation_date: '2020-03-26T02:10:24.620Z',
      steps: [
        {
          _id: '5e7cd4cbd8a1f92835787310',
          step: 'send_intro_1',
          date: '2020-03-26T16:14:03.709Z'
        },
        {
          _id: '5e7cd50836e82427cff47c01',
          step: 'send_intro_2',
          date: '2020-03-26T16:15:04.263Z'
        },
        {
          _id: '5e7cd547fdee7127cd563dc2',
          step: 'send_intro_3',
          date: '2020-03-26T16:16:07.936Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7c0f73586bd605cdd03d1f',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Sarah ',
      company_name: 'Polycom, Inc.',
      email: 'demo3499@autobound.ai',
      job_title: 'Sales Operations Analyst',
      contact_id: 290007,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Polycom\'s New Company Contact (Intro to Kyle) ',
          greeting: '',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales automation company based in San Francisco that helps businesses like Polycom auto-compose expert sales outreach instantly.',
          reason: 'Given your position at Polycom, I figured it made sense to see if we could find time to connect.',
          pitch: 'Hello, this is an ABT testing. Thursday ',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sarah,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'To recap, I\'m the CEO & Co-Founder of New Company, a sales enablement company that works with businesses to help them generate more sales qualified leads using extremely relevant, AI powered customization. One of our most successful customers is Kompyte if you care to look them up.',
          reason: 'I thought I\'d follow up on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/daniel612">sync</a> to see if so?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sarah,',
          opener: 'I\'ve been working with some folks in your industry who are struggling with low quota attainment & high attrition.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Polycom<br><br>I\'m happy to refresh your memory on what we do in the sales enablement industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the Polycom team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sarah,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Polycom experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sarah,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Polycom.',
          role: '',
          reason: 'As a refresher, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sarah,',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Polycom.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sarah,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-26T02:12:03.569Z',
      modified: '2020-03-26T02:12:03.569Z',
      activation_date: '2020-03-26T02:12:03.569Z',
      steps: [
        {
          _id: '5e7cd2bf462e9927943c1cc7',
          step: 'send_intro_1',
          date: '2020-03-26T16:05:19.213Z'
        },
        {
          _id: '5e7cd2fbb98e0b279a25270e',
          step: 'send_intro_2',
          date: '2020-03-26T16:06:19.941Z'
        },
        {
          _id: '5e7cd33868613227ecf8d276',
          step: 'send_intro_3',
          date: '2020-03-26T16:07:20.380Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7c1049bea9d20693fdb4dc',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Nigel ',
      company_name: 'workday',
      email: 'demo240@autobound.ai',
      job_title: 'Regional Sales Director, Business Services',
      contact_id: 285752,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Nigel / Kyle chat? Customized outreach at scale',
          greeting: '',
          opener: 'Just browsed workday\'s website, seems your team does very interesting work.',
          role: 'I work with teams like yours at workday and think you\'d find value in the work we do at New Company, helping companies sell more with advanced auto-personalization.',
          reason: 'Given your position at workday, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Thursday ',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Nigel.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Nigel,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, I\'m the CEO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I thought I\'d circle back on my previous notes to see if now might be a better time for us to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Nigel,',
          opener: 'I\'ve been working with some folks in your industry who are struggling with low quota attainment & high attrition.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like workday<br><br>I\'m happy to refresh your memory on what we do in the sales automation industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have any availability to connect to see if New Company can help? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. Hope to connect with you soon.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Nigel,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Based on feedback from similar companies in workday\'s industry, I think it\'d be worth your time to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Nigel,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to workday.',
          role: '',
          reason: 'As a refresher, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Nigel,',
          opener: 'Thanks for taking a minute to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like workday.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Nigel,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-26T02:15:37.523Z',
      modified: '2020-03-26T02:15:37.523Z',
      activation_date: '2020-03-26T02:15:37.523Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7c11e9bea9d20693fdb4dd',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Robert ',
      company_name: 'Slack',
      email: 'demo75@autobound.ai',
      job_title: 'Vice President, Sales',
      contact_id: 285753,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Robert - Customized outreach at scale',
          greeting: '',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Slack sell more with advanced auto-personalization.',
          reason: 'Given your position at Slack, I thought it made sense to see if we could find time to connect in the coming weeks.',
          pitch: 'Hello, this is an ABT testing. Thursday ',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Robert.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, I help companies like Slack set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'I thought I\'d bump my previous message up incase it got lost in your inbox.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. ',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Slack?',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Slack experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Slack.',
          role: '',
          reason: 'As a refresher, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Slack, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'Glad you were able to check out our site, hopefully you have a deeper understanding of how we might be a fit for Slack.',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Robert,',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at a more convinient time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-26T02:22:33.613Z',
      modified: '2020-03-26T02:22:33.613Z',
      activation_date: '2020-03-26T02:22:33.613Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e7cb555d7d50d27c4adf60a',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Kristen Mehta',
      company_name: 'Google',
      email: 'demo332@autobound.ai',
      job_title: 'Global Manager, Curriculum, Sales Enablement',
      contact_id: 285813,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Sales qualified leads for Google',
          greeting: 'test delete template',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales enablement company that helps businesses set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'When I saw the article <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">www.ehamer.us</a>, on Google\'s acquisition, I thought I\'d shoot you a note.',
          pitch: 'test-41',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Kristen.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'test delete template',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, my team works with businesses like Google to help auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d follow up on my previous messages to see if now might be a better time for us to connect.',
          pitch: 'test-42',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Kristen,',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Did you get a chance to see what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'test delete template',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'test delete template',
          opener: 'Saw you had a chance to view our site! Did you have any questions I could help answer?',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Kristen,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Kristen,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-26T13:59:49.778Z',
      modified: '2020-03-26T13:59:49.779Z',
      activation_date: '2020-03-26T13:59:49.779Z',
      steps: [
        {
          _id: '5e7cb59fc965e02810d7d9da',
          step: 'send_intro_2',
          date: '2020-03-26T14:01:03.095Z'
        },
        {
          _id: '5e7cb5de33e6a527cbb5cc71',
          step: 'send_intro_3',
          date: '2020-03-26T14:02:06.809Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e811ae91254662ff7e5a910',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Trent ',
      company_name: 'Google',
      email: 'demo550@autobound.ai',
      job_title: 'Sales Operations Analyst',
      contact_id: 285921,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Question about time spent selling vs. prospecting',
          greeting: 'Hi Trent,',
          opener: 'Very nice to e-meet you.',
          role: 'I\'m the CEO & Co-Founder of New Company. We help companies auto-compose expert sales outreach instantly. It\'s a pleasure to meet you. ',
          reason: 'Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. It\'s hyperlinked if are interested in reading.',
          pitch: 'test-41',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Trent.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Trent,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'To recap, I\'m the CEO & Co-Founder of New Company, a sales enablement company that works with businesses to help them generate more sales qualified leads using extremely relevant, AI powered customization. One of our most successful customers is Kompyte if you care to look them up.',
          reason: 'I thought I\'d bump my previous message to the top of your inbox incase it got lost in shuffle.',
          pitch: 'test-42',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. ',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Trent,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Did you get a chance to see what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. Hope to connect with you soon.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Trent,',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'Based on feedback from similar companies in Google\'s industry, I think it\'d be worth your time to chat.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Trent,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Trent,',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Trent,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at the right time.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-29T22:02:17.647Z',
      modified: '2020-03-29T22:02:17.647Z',
      activation_date: '2020-03-29T22:02:17.647Z',
      steps: [
        {
          _id: '5e811b2aafa47a308531fae9',
          step: 'send_intro_2',
          date: '2020-03-29T22:03:22.221Z'
        },
        {
          _id: '5e811b660d57032fc6671e51',
          step: 'send_intro_3',
          date: '2020-03-29T22:04:22.680Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e811b00135f683036ef759c',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Mahlet ',
      company_name: 'Google',
      email: 'demo458@autobound.ai',
      job_title: 'Sales Development Manager',
      contact_id: 285974,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Intro & article on Google\'s recent purchase, congrats! 🎉',
          greeting: 'Hi Mahlet,',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the CEO & Co-Founder of New Company, it\'s a pleasure to meet you via email. I help companies generate more sales qualified leads using extremely relevant, AI powered customization. You may have heard of Kompyte, they are one of our more successful clients.',
          reason: 'Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. ',
          pitch: 'test-41',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mahlet,',
          opener: 'Did you happen to see my last message?',
          role: 'A quick recap, I work with businesses to help them sell more with advanced auto-personalization.',
          reason: 'Thought I\'d circle back on the article I saw regarding Google\'s recent purchase on TechCrunch.',
          pitch: 'test-42',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mahlet,',
          opener: 'I have an idea on how to address low quota attainment & high attrition.',
          role: '',
          reason: 'Did you get a chance to review what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mahlet,',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Google experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Mahlet,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mahlet,',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. What did you think?',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Mahlet,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-29T22:02:40.660Z',
      modified: '2020-03-29T22:02:40.660Z',
      activation_date: '2020-03-29T22:02:40.660Z',
      steps: [
        {
          _id: '5e811b053e191d30b68a1841',
          step: 'send_intro_1',
          date: '2020-03-29T22:02:45.714Z'
        },
        {
          _id: '5e811b3fe9d48b2ff03b7502',
          step: 'send_intro_2',
          date: '2020-03-29T22:03:43.348Z'
        },
        {
          _id: '5e811b7ba7f85a2fdb57546f',
          step: 'send_intro_3',
          date: '2020-03-29T22:04:43.737Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e812de264800f30ac6b6ae9',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom ',
      company_name: 'Intuit Inc.',
      email: 'kyleschuster93@gmail.com',
      job_title: 'Sales Manager',
      contact_id: 244501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series B',
      campaign_id: '2913',
      origEmails: {
        campaign_id: 2913,
        campaign_name: 'Series B',
        intro1: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'How\'ve you been since my last note?',
          role: 'As a refresher, my company New Company, helps businesses sell more with advanced auto-personalization.',
          reason: 'We haven\'t spoken in a while, so I thought I\'d reach back out and quickly refresher your memory on what we do in the sales enablement space.',
          pitch: 'test-10-1',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, we empower companies to auto-compose expert sales outreach instantly.',
          reason: 'Last we spoke, I believe Intuit wasn\'t quite ready to work with us. Thought I\'d circle back and recap what we do at <a href="www.ehamer.us">New Company</a>.',
          pitch: 'test-10-2',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Have you had a chance to check out my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'Based on feedback from similar companies in Intuit\'s industry, I think it\'d be worth your time to chat.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent news on Intuit\'s Series B? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'As a refresher, I shared a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Intuit.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent news on Intuit\'s Series B? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Did you get a chance to review my previous note? After diving into Intuit a bit deeper, I think what we do is worth evaluating after raising a Series B round.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-29T23:23:14.644Z',
      modified: '2020-03-29T23:23:14.644Z',
      activation_date: '2020-03-29T23:23:14.644Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e812e29a7f85a2fdb575475',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom ',
      company_name: 'Intuit Inc.',
      email: 'kyleschuster93@gmail.com',
      job_title: 'Sales Manager',
      contact_id: 244501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Activity 60 Days',
      campaign_id: '2917',
      origEmails: {
        campaign_id: 2917,
        campaign_name: 'No Activity 60 Days',
        intro1: {
          subject: 'Congrats on the new product! Customized outreach at scale - reconnecting',
          greeting: 'Hey Tom,',
          opener: 'I hope spirits have been high at Intuit since we spoke last.',
          role: 'As a refresher, my company New Company, helps businesses sell more with advanced auto-personalization.',
          reason: 'Does your team struggle with spammy & generic outreach? If so, I\'ll bet I could be a huge help.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Feel free to review our <a href="www.ehamer.us">website.</a>. Hoping to <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can sell more with advanced auto-personalization. Does that sound fair?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'How\'s everything? I hope you and the team are well!',
          role: 'As a refresher, I\'m the CEO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I wanted to follow up on my last email from a couple of days ago to see if you\'ve had a moment to give it any thought.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'I\'ve been working with some folks in your industry who are struggling with low quota attainment & high attrition.',
          role: '',
          reason: 'Have you had a chance to review my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tom,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Intuit experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Intuit.',
          role: '',
          reason: 'As a refresher, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'I saw you had a chance to visit our site.',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hey Tom,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-29T23:24:25.785Z',
      modified: '2020-03-29T23:24:25.785Z',
      activation_date: '2020-03-29T23:24:25.785Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e812e339ce624301f276ab7',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Torin ',
      company_name: 'Intuit Inc.',
      email: 'kyle.schuster321@gmail.com',
      job_title: 'Sales Director',
      contact_id: 249051,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Seed',
      campaign_id: '2924',
      origEmails: {
        campaign_id: 2924,
        campaign_name: 'Seed',
        intro1: {
          subject: 'Question about time spent selling vs. prospecting',
          greeting: 'Hi Torin,',
          opener: 'I had a chance to browse Intuit\'s site and thought I\'d reach out and introduce myself.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Intuit auto-compose expert sales outreach instantly.',
          reason: 'Read on <a href="https://finance.yahoo.com/news/fintech-company-intuit-acquires-credit-214833955.html">Yahoo.com</a> that Intuit closed their venture round! Huge congratulations to you and your team, that\'s very exciting.',
          pitch: 'Random -41',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Torin,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher, I\'m the CEO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I thought I\'d bump my previous message to the top of your inbox incase it got lost in your inbox.',
          pitch: 'Random -42',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. ',
          signoff: 'Best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Torin,',
          opener: 'I have an idea on how to address spammy & generic outreach.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales enablement space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Torin,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Intuit experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Torin,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Intuit.',
          role: '',
          reason: 'As a refresher, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Torin,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'Thought I\'d circle back, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Torin,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Sincerely,<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-29T23:24:35.124Z',
      modified: '2020-03-29T23:24:35.125Z',
      activation_date: '2020-03-29T23:24:35.125Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e814b6bff67d02fa447d1b1',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Brian ',
      company_name: 'Salesforce',
      email: 'hannah@beyondpricing.com',
      job_title: 'Head of Global Sales Operations',
      contact_id: 306288,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series B',
      campaign_id: '2913',
      origEmails: {
        campaign_id: 2913,
        campaign_name: 'Series B',
        intro1: {
          subject: 'Question about sales qualified leads',
          greeting: 'Hi Brian,',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales enablement company that helps companies generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Saw on Yahoo.com that Salesforce closed their Series B round! Huge congratulations to you and your colleagues, I\'m sure you\'re all very excited. Here\'s the <a href="https://news.yahoo.com/spinnaker-support-launches-salesforce-application-103000605.html">link</a> to the article if you care to give it a read.',
          pitch: 'test-10-1',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Brian,',
          opener: 'I hope you have been well since I last reached out.',
          role: 'Just to refresh your memory, I\'m the CEO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I thought I\'d follow up on my previous note from a couple of days ago to see if you\'ve had a moment to give it any thought.',
          pitch: 'test-10-2',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Brian,',
          opener: 'I\'ve been working with some folks in your industry who are struggling with low quota attainment & high attrition.',
          role: '',
          reason: 'Have you had a chance to see my previous note? After diving into Salesforce a bit deeper, I think what we do in the sales automation industry  is worth evaluating after raising a Series B round.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'All the best,<br>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Brian,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do in sales enablement is very impactful for companies like Salesforce.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Brian,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Salesforce.',
          role: '',
          reason: 'As a refresher, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Salesforce, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best regards,<br>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Brian,',
          opener: 'Glad you were able to check out our site, hopefully you have a deeper understanding of how we might be a fit for Salesforce.',
          role: '',
          reason: 'Curious to hear your thoughts on how <a href="www.ehamer.us">New Company</a> supports companies like Salesforce surrounding fundraising rounds and the expected growth associated.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'Thanks,<br>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Brian,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at the right time.',
          role: '',
          reason: 'Have you had a chance to see my previous note? After diving into Salesforce a bit deeper, I think what we do is worth evaluating after raising a Series B round.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Salesforce, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks!<br>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-30T01:29:15.776Z',
      modified: '2020-03-30T01:29:15.776Z',
      activation_date: '2020-03-30T01:29:15.776Z',
      steps: [
        {
          _id: '5e814b6fb2a5e43026f85ab8',
          step: 'send_intro_1',
          date: '2020-03-30T01:29:19.430Z'
        },
        {
          _id: '5e814babafa47a308531faf7',
          step: 'send_intro_2',
          date: '2020-03-30T01:30:19.995Z'
        },
        {
          _id: '5e814be8e9d48b2ff03b7510',
          step: 'send_intro_3',
          date: '2020-03-30T01:31:20.484Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e82dc770fb776070500b8d2',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tom ',
      company_name: 'Intuit Inc.',
      email: 'kyleschuster93@gmail.com',
      job_title: 'Sales Manager',
      contact_id: 244501,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series A',
      campaign_id: '2926',
      origEmails: {
        campaign_id: 2926,
        campaign_name: 'Series A',
        intro1: {
          subject: 'Idea for your product launch New Company 🧠 - let\'s reconnect',
          greeting: 'Good evening Tom,',
          opener: 'I wanted to reach back out after seeing} the [news on Intuit\'s funding round.',
          role: 'To quickly recap from the last time I reached out, I work with companies to help them sell more with advanced auto-personalization.',
          reason: 'It\'s been some time since you and I spoke last, so I thought it made sense to reach back out.',
          pitch: 'test-71',
          calltoaction: 'When you have a chance, feel free to browse our website to see what\'s new, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes to connect on Wednesday morning or Thursday afternoon to see if now is a better time for New Company to add value?',
          signoff: 'Best regards,<p>Kyle',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Hey Tom,',
          opener: 'How\'s everything? I hope you and the team are well!',
          role: 'As a refresher I\'m the COO & Co-Founder of New Company.',
          reason: 'Wanted to follow up on the exciting news I read on Intuit\'s recent round on Yahoo.com.',
          pitch: 'test-72',
          calltoaction: 'Do you have time for a call Monday morning or Tuesday afternoon to see if New Company might be helpful given the latest news on Intuit\'s Series A? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'Thanks,<p>Kyle',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Hey Tom,',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a>.',
          signoff: 'All the best,<p>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Hi Tom,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'Based on feedback from similar companies in the computer software industry, I think it\'d be worth your time to sync up.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent news on Intuit\'s Series A? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'All the best,<p>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Tom,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I sent a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to doing? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<p>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Tom,',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> adds value to businesses like Intuit in the computer software space.  One of our most successful customers is Kompyte',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Do you mind if we put something on the calendar for us to connect? That way we can have a quick check-in call rather than having to go back and forth over email. Feel free to <a href="https://meetings.hubspot.com/kyle282">book a time</a> that works for you.',
          signoff: 'Best regards,<p>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Hi Tom,',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'Did you get a chance to review my previous note? After diving into Intuit a bit deeper, I think what we do is worth evaluating after raising a Series A round.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<p>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-31T06:00:23.609Z',
      modified: '2020-03-31T06:00:23.609Z',
      activation_date: '2020-03-31T06:00:23.609Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e82dc813b40ff07543708d5',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Torin ',
      company_name: 'Intuit Inc.',
      email: 'kyle.schuster321@gmail.com',
      job_title: 'Sales Director',
      contact_id: 249051,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series A',
      campaign_id: '2926',
      origEmails: {
        campaign_id: 2926,
        campaign_name: 'Series A',
        intro1: {
          subject: 'Intuit\'s round & how New Company helps companies auto-compose expert sales outreach instantly',
          greeting: 'Good evening,',
          opener: 'I have a few suggestions for capitalizing on the latest funding round.',
          role: 'I specialize in the computer software industry and am now in charge of Intuit\'s account.',
          reason: 'I saw Tom had previously evaluated working with us so I thought I\'d reach back out.',
          pitch: 'test-71',
          calltoaction: 'Do you have any availability for a call on Wednesday or Thursday to see if New Company\'s resources might be of value? Here is a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a> for your convenience.',
          signoff: 'Regards,<p>Kyle',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Torin,',
          opener: 'I trust you\'re having a nice Thursday thus far.',
          role: 'To recap, I\'m the COO & Co-Founder of New Company.',
          reason: 'Do you think anything I mentioned could benefit Intuit? I know it takes time to evaluate all your options, so I figure it makes sense to keep trying to speak with you.',
          pitch: 'test-72',
          calltoaction: 'Do you have any availability to connect on Monday or Tuesday to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Thanks,<p>Kyle',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Hi Torin,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: '1. You are not interested <br>2. This sounds interesting, but now is not the right time <br> 3. Interested. Let\'s talk now! <br><br> Just reply with a 1 or 2 or 3. Hope to hear from you soon.',
          signoff: 'All the best,<p>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Torin,',
          opener: 'Thanks for taking a moment to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'You might recall - I shared a note a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/kyle282">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best,<p>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Torin,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I shared a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I really believe that I can help Intuit, but I don\'t want to be that pesky, annoying salesperson that keeps reaching out. <br><br> Thanks for your response!',
          signoff: 'Regards,<p>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Torin,',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'If my messages are better suited for someone else, please let me know and I\'d be happy to reach out to them instead. In the meantime, I figured I\'d try one last time to connect with you. ',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Do you mind if we put something on the calendar for us to connect? That way we can have a quick check-in call rather than having to go back and forth over email. Feel free to <a href="https://meetings.hubspot.com/kyle282">book a time</a> that works for you.',
          signoff: 'Regards,<p>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Hi Torin,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'Have you had a chance to see my previous note? After diving into Intuit a bit deeper, I think what we do is worth evaluating after raising a Series A round.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Sincerely,<p>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-31T06:00:33.675Z',
      modified: '2020-03-31T06:00:33.675Z',
      activation_date: '2020-03-31T06:00:33.675Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e82dc882dc41a07a2d30a95',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Hannah ',
      company_name: 'Intuit Inc.',
      email: 'hcorrell1995@gmail.com',
      job_title: 'COO',
      contact_id: 318251,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series A',
      campaign_id: '2926',
      origEmails: {
        campaign_id: 2926,
        campaign_name: 'Series A',
        intro1: {
          subject: 'Intuit\'s Series A & how New Company helps companies auto-compose expert sales outreach instantly',
          greeting: 'Hi Hannah,',
          opener: 'I hope your week has been going well thus far.',
          role: 'I\'m the COO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Intuit]sell more with advanced auto-personalization.',
          reason: 'Was reading on Yahoo.com that Intuit closed their Series A round! Huge congratulations to you and your team, I\'m sure you\'re all very excited. Here\'s the <a href="https://finance.yahoo.com/news/fintech-company-intuit-acquires-credit-214833955.html">link</a> to the article if you care to give it a read.',
          pitch: 'test-71',
          calltoaction: 'Do you have a few minutes to connect on Wednesday morning or Thursday afternoon? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>',
          signoff: 'Best,<p>Kyle',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Hannah,',
          opener: 'I trust you\'re having a nice Thursday thus far.',
          role: 'As a refresher, I mainly focus on companies in the computer software industry, helping them set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences',
          reason: 'Did you happen to see my previous note?',
          pitch: 'test-72',
          calltoaction: 'Do you have any availability for a call on Monday or Tuesday to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a>. ',
          signoff: 'Sincerely,<p>Kyle',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Hi Hannah,',
          opener: 'I don\'t mean to be a pest, I\'m sure you\'re quite busy following the latest Series A round.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Intuit, I\'m happy to refresh your memory on what we do.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: '1. You are not interested <br>2. This sounds interesting, but now is not the right time <br> 3. Interested. Let\'s talk now! <br><br> Just reply with a 1 or 2 or 3. Hope to hear from you soon.',
          signoff: 'Best regards,<p>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Hannah,',
          opener: 'Saw you had a chance to view our site! Did you have any questions I could help answer?',
          role: '',
          reason: 'Based on feedback from similar companies in the computer software industry, I think it\'d be worth your time to chat.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent news on Intuit\'s Series A? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'Regards,<p>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Hannah,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/kyle282">these times</a>?',
          signoff: 'Thanks,<p>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Hannah,',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'Curious to hear your thoughts on the work <a href="www.ehamer.us">New Company</a> does to help companies such as Intuit surrounding fundraising rounds and expected growth.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent news on Intuit\'s Series A? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'Best,<p>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Hannah,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'did you happen to read through my previous note? After diving into Intuit a bit deeper, I think what we do is worth evaluating after raising a Series A round.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<p>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-31T06:00:40.493Z',
      modified: '2020-03-31T06:00:40.493Z',
      activation_date: '2020-03-31T06:00:40.493Z',
      steps: [
        {
          _id: '5e82dcce98a2c7072ea5caa7',
          step: 'send_intro_2',
          date: '2020-03-31T06:01:50.593Z'
        },
        {
          _id: '5e82dd0bb17da506cd8a0f31',
          step: 'send_intro_3',
          date: '2020-03-31T06:02:51.266Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e82de796faa1506b14fe41d',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Han ',
      company_name: 'Intuit Inc.',
      email: 'hcorrell1995@icloud.com',
      job_title: 'COO',
      contact_id: 318301,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series B',
      campaign_id: '2913',
      origEmails: {
        campaign_id: 2913,
        campaign_name: 'Series B',
        intro1: {
          subject: 'Just read article on Intuit\'s Series B, congrats! 💸',
          greeting: 'Hi Han,',
          opener: 'Very nice to meet you via email.',
          role: 'I spoke with Tom\'s last time I reach out to Intuit.',
          reason: 'Saw on Yahoo.com that Intuit closed their Series B round! Huge congratulations to you and your colleagues, I\'m sure you\'re all very excited. let me know if you\'d like me to share the link to the article',
          pitch: 'test-10-1',
          calltoaction: 'Do you have any availability to connect on Wednesday or Thursday to see if New Company\'s resources might be of value? Here is a link to my <a href="https://meetings.hubspot.com/kyle282">calendar</a> for your convenience.',
          signoff: 'Sincerely,<p>Kyle',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Happy Thursday Han,',
          opener: 'I trust you\'re having a nice Thursday thus far.',
          role: 'As a refresher I\'m the COO & Co-Founder of New Company.',
          reason: 'I figured I\'d follow up on my last email from a couple of days ago to see if you\'ve had an opportuntiy to give it any consideration.',
          pitch: 'test-10-2',
          calltoaction: 'Do you have time for a call Monday morning or Tuesday afternoon to see if New Company might be helpful given the latest news on Intuit\'s Series B? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'Sincerely,<p>Kyle',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Han,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: '1. You are not interested <br>2. This sounds interesting, but now is not the right time <br> 3. Interested. Let\'s talk now! <br><br> Just reply with a 1 or 2 or 3. Hope to hear from you soon.',
          signoff: 'Sincerely,<p>Kyle',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Hi Han,',
          opener: 'Thanks for taking a moment to visit our site. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you looked at our site. Does Intuit experience an issue related to spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'All the best,<p>Kyle',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Han,',
          opener: 'I find your business and New Company use case very interesting, hence my persistence. Let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'You might recall, I shared a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Sincerely,<p>Kyle',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Hi Han,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Curious to hear your thoughts on the work <a href="www.ehamer.us">New Company</a> does with businesses such as Intuit surrounding fundraising rounds and the expected growth associated.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Do you mind if we put something on the calendar for us to connect? That way we can have a quick check-in call rather than having to go back and forth over email. Feel free to <a href="https://meetings.hubspot.com/kyle282">book a time</a> that works for you.',
          signoff: 'All the best,<p>Kyle',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Hi Han,',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at a more convinient time.',
          role: '',
          reason: 'Have you had a chance to see my previous note? After diving into Intuit a bit deeper, I think what we do is worth evaluating after raising a Series B round.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<p>Kyle',
          signiture: ''
        }
      },
      created: '2020-03-31T06:08:57.379Z',
      modified: '2020-03-31T06:08:57.379Z',
      activation_date: '2020-03-31T06:08:57.379Z',
      steps: [
        {
          _id: '5e82dec4e3abaa0730cb37c4',
          step: 'send_intro_1',
          date: '2020-03-31T06:10:12.070Z'
        },
        {
          _id: '5e82ed12209f5f06b8bca90d',
          step: 'send_intro_2',
          date: '2020-03-31T07:11:14.749Z'
        },
        {
          _id: '5e82ed4eb17da506cd8a0f3f',
          step: 'send_intro_3',
          date: '2020-03-31T07:12:14.669Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e8b46406d519b078d6edd15',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Asif ',
      company_name: 'Salesforce',
      email: 'asif_hameed_37@hotmail.com',
      job_title: 'COO',
      contact_id: 318351,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series A',
      campaign_id: '2926',
      origEmails: {
        campaign_id: 2926,
        campaign_name: 'Series A',
        intro1: {
          subject: 'Salesforce\'s fundraising & how New Company can help 🤝',
          greeting: 'Good morning,',
          opener: 'I had a chance to browse Salesforce\'s website - I\'m very interested in what you do!',
          role: 'I\'m a COO & Co-Founder at New Company, a sales automation company that helps businesses set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'Read on <a href="https://news.yahoo.com/spinnaker-support-launches-salesforce-application-103000605.html">Yahoo.com</a> that Salesforce closed their Series A round! Huge congratulations to you and your team, I\'m sure you\'re all very excited.',
          pitch: 'test-71',
          calltoaction: 'When you have a chance, feel free to browse our website, here\'s a <a href="www.ehamer.us">link.</a> Can we set up 20-30 minutes for a call on Wednesday morning or Thursday afternoon to see if New Company can auto-compose expert sales outreach instantly? Feel free to add time on my <a href="https://meetings.hubspot.com/kyle282">calendar</a><br><br>Thanks and hope to connect soon!',
          signoff: 'Regards,<p>Eric',
          signiture: ''
        },
        intro2: {
          subject: '',
          greeting: 'Hi Asif,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'As a refresher, we empower companies to auto-compose expert sales outreach instantly.',
          reason: 'I wanted to follow up on my previous messages to see if now might be a better time for us to connect.',
          pitch: 'test-72',
          calltoaction: 'Do you have time for a call Friday morning or Monday afternoon to see if New Company might be helpful given the latest news on Salesforce\'s Series A? Would you mind adding time in my <a href="https://meetings.hubspot.com/kyle282">calendar</a> that is convenient for you?',
          signoff: 'Thanks,<p>Eric',
          signiture: ''
        },
        intro3: {
          subject: '',
          greeting: 'Hi Asif,',
          opener: 'I have an idea on how to address low quota attainment & high attrition.',
          role: '',
          reason: 'Did you get a chance to review my previous note? After diving into Salesforce a bit deeper, I think what we do in the sales automation space  is worth evaluating after raising a Series A round.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can we set up 20-30 minutes to connect on Tuesday morning or Wednesday afternoon to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'Sincerely,<p>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: '',
          greeting: 'Hi Asif,',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. Did you have any questions I can help answer?',
          role: '',
          reason: 'Have you had any thoughts on working with us since my last email? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Salesforce, I\'m happy to refresh your memory on what we do.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Sincerely,<p>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: '',
          greeting: 'Asif,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'You might recall, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<p>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: '',
          greeting: 'Asif,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Salesforce experience an issue related to low quota attainment & high attrition?',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Do you mind if we put something on the calendar for us to connect? That way we can have a quick check-in call rather than having to go back and forth over email. Feel free to <a href="https://meetings.hubspot.com/kyle282">book a time</a> that works for you.',
          signoff: 'Sincerely,<p>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: '',
          greeting: 'Asif,',
          opener: 'I am hoping to catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Sincerely,<p>Eric',
          signiture: ''
        }
      },
      created: '2020-04-06T15:09:52.185Z',
      modified: '2020-04-06T15:09:52.185Z',
      activation_date: '2020-04-06T15:09:52.185Z',
      steps: [
        {
          _id: '5e8b54b07a471e06f143efce',
          step: 'send_intro_2',
          date: '2020-04-06T16:11:28.108Z'
        },
        {
          _id: '5e8b5502c4264406d2321d7d',
          step: 'send_intro_3',
          date: '2020-04-06T16:12:50.122Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e8e2d523f64995854fc8535',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tariq Serviss',
      company_name: 'Google',
      email: 'demo582@autobound.ai',
      job_title: 'President, Enterprise Sales',
      contact_id: 286050,
      steps_completed: 2,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Exciting news on Google\'s latest acquisition on TechCrunch',
          greeting: 'Hi Tariq,',
          opener: 'I had a chance to browse Google\'s site and thought it made sense to introduce myself.',
          role: 'New Company is a sales enablement company that specializes in working with businesses like Google.',
          reason: 'Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. It\'s hyperlinked if you care to give it a read.',
          pitch: 'test-41',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Tariq.',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tariq,',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the acquisition.',
          role: 'To recap, I\'m the CEO & Co-Founder of New Company.',
          reason: 'I thought I\'d bump my previous message up incase it got lost in your inbox.',
          pitch: 'test-42',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tariq,',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google<br><br>I\'m happy to refresh your memory on what we do in the sales automation space.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/daniel612">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tariq,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tariq,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'As a refresher, I sent a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tariq,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for Google.',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tariq,',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at a more convinient time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-08T20:00:18.352Z',
      modified: '2020-04-08T20:00:18.352Z',
      activation_date: '2020-04-08T20:00:18.352Z',
      steps: [
        {
          _id: '5e8e3bacdadab058971a1da5',
          step: 'send_intro_2',
          date: '2020-04-08T21:01:32.535Z'
        },
        {
          _id: '5e8e3bec1170c458e4e1ddf4',
          step: 'send_intro_3',
          date: '2020-04-08T21:02:36.311Z'
        }
      ],
      __v: 2
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e8e311f2e3ac758468c6ed5',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Tonia Scollins',
      company_name: 'Google',
      email: 'demo558@autobound.ai',
      job_title: 'Manager, Sales Operations',
      contact_id: 286119,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Sales qualified leads for Google',
          greeting: 'Hi Tonia,',
          opener: 'Just browsed Google\'s website, seems your team does very interesting work.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Google sell more with advanced auto-personalization.',
          reason: 'Saw an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. It\'s hyperlinked if are interested in reading.',
          pitch: 'test-41',
          calltoaction: 'Do you have <a href="https://meetings.hubspot.com/daniel612">time for a call</a> to see if New Company might be helpful given the latest purchase? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tonia,',
          opener: 'Did you happen to see my last message?',
          role: 'As a refresher I\'m the CEO & Co-Founder of New Company.',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: 'test-42',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tonia,',
          opener: 'Hope you don\'t mind my persistence.',
          role: '',
          reason: 'Did you get a chance to go over what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tonia,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Based on feedback from similar companies in Google\'s industry, I think it\'d be worth your time to connect.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tonia,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Tonia,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: 'Thought I\'d circle back, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I hope to hear from you soon.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Tonia,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-08T20:16:31.078Z',
      modified: '2020-04-08T20:16:31.078Z',
      activation_date: '2020-04-08T20:16:31.078Z',
      steps: [
        {
          _id: '5e8e313de2428d58db831056',
          step: 'send_intro_1',
          date: '2020-04-08T20:17:01.340Z'
        },
        {
          _id: '5e8e3f8af37ecf58b25f3a47',
          step: 'send_intro_2',
          date: '2020-04-08T21:18:02.956Z'
        },
        {
          _id: '5e8e3fc7f8d330592a0c0be9',
          step: 'send_intro_3',
          date: '2020-04-08T21:19:03.632Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e8e5c942ed658599d04c2e7',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Eric Test',
      company_name: 'Salesforce',
      email: 'sockotj@yahoo.com',
      job_title: 'CTO',
      contact_id: 318201,
      steps_completed: 20,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'New Product Release',
      campaign_id: '2921',
      origEmails: {
        campaign_id: 2921,
        campaign_name: 'New Product Release',
        intro1: {
          subject: 'Congrats on the new product! Customized outreach at scale',
          greeting: 'Hi Eric,',
          opener: 'I had a chance to browse Salesforce\'s site and figured I\'d reach out and introduce myself.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Salesforce sell more with advanced auto-personalization.',
          reason: 'Congrats on the product launch, I\'m sure it\'s been going well so far. I thought I\'d reach out because I think the work I do at <a href="www.ehamer.us">New Company</a> may be of value.',
          pitch: 'New Product - Large Buyer - 1',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'Did you happen to see my last message?',
          role: 'As a refresher, I\'m the CEO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'Curious to hear your thoughts on the work <a href="www.ehamer.us">New Company</a> does to help companies such as Salesforce roll out new products more efficiently.',
          pitch: 'New Product - Large Buyer - 2',
          calltoaction: 'Do you have time for a call to see if New Company might be helpful given the latest news on Salesforce\'s new product? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d circle back to try and catch you at the right time.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'From what I know about the Salesforce team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Based on feedback from similar companies in Salesforce\'s industry, I think it\'d be worth your time to sync up.',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Salesforce.',
          role: '',
          reason: 'As a refresher, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Salesforce, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'Thought I\'d circle back, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent news on Salesforce\'s new product? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Salesforce, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-08T23:21:56.021Z',
      modified: '2020-04-08T23:21:56.021Z',
      activation_date: '2020-04-08T23:21:56.021Z',
      steps: [
        {
          _id: '5e8e5c978826d1584c5f3010',
          step: 'send_intro_1',
          date: '2020-04-08T23:21:59.934Z'
        },
        {
          _id: '5ec5bb29e6f3cc0474920a59',
          step: 'send_intro_1',
          date: '2020-05-20T23:20:09.506Z'
        },
        {
          _id: '5ec5bb29e6f3cc0474920a64',
          step: 'send_intro_1',
          date: '2020-05-20T23:20:09.959Z'
        },
        {
          _id: '5ec5bc55e617e8039eb38294',
          step: 'send_intro_2',
          date: '2020-05-20T23:25:09.120Z'
        },
        {
          _id: '5ec5bc55e617e8039eb3829e',
          step: 'send_intro_2',
          date: '2020-05-20T23:25:09.583Z'
        },
        {
          _id: '5ec5bc9155358404456557fa',
          step: 'send_intro_3',
          date: '2020-05-20T23:26:09.600Z'
        },
        {
          _id: '5ec5bc925535840445655804',
          step: 'send_intro_3',
          date: '2020-05-20T23:26:10.082Z'
        },
        {
          _id: '5ec5d1195d74881f6e40f674',
          step: 'send_intro_2',
          date: '2020-05-21T00:53:45.476Z'
        },
        {
          _id: '5ec5d11b5d74881f6e40f6a3',
          step: 'send_linkedin_1',
          date: '2020-05-21T00:53:47.820Z'
        },
        {
          _id: '5ec5d11c5d74881f6e40f6af',
          step: 'send_linkedin_1',
          date: '2020-05-21T00:53:48.308Z'
        },
        {
          _id: '5ec5d11e5d74881f6e40f6e3',
          step: 'send_product_2',
          date: '2020-05-21T00:53:50.827Z'
        },
        {
          _id: '5ec5d11f5d74881f6e40f6ef',
          step: 'send_product_2',
          date: '2020-05-21T00:53:51.278Z'
        },
        {
          _id: '5ec5d1215d74881f6e40f721',
          step: 'send_intro_3',
          date: '2020-05-21T00:53:53.690Z'
        },
        {
          _id: '5ec5d1225d74881f6e40f72d',
          step: 'send_intro_3',
          date: '2020-05-21T00:53:54.152Z'
        },
        {
          _id: '5ec5d1245d74881f6e40f75f',
          step: 'send_product_1',
          date: '2020-05-21T00:53:56.619Z'
        },
        {
          _id: '5ec5d1255d74881f6e40f76b',
          step: 'send_product_1',
          date: '2020-05-21T00:53:57.077Z'
        },
        {
          _id: '5ec5d1275d74881f6e40f79d',
          step: 'send_linkedin_2',
          date: '2020-05-21T00:53:59.663Z'
        },
        {
          _id: '5ec5d1285d74881f6e40f7a9',
          step: 'send_linkedin_2',
          date: '2020-05-21T00:54:00.120Z'
        },
        {
          _id: '5ec5d12a5d74881f6e40f7de',
          step: 'send_intro_1',
          date: '2020-05-21T00:54:02.792Z'
        },
        {
          _id: '5ec5d12b5d74881f6e40f7e8',
          step: 'send_intro_1',
          date: '2020-05-21T00:54:03.262Z'
        }
      ],
      __v: 20
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e904fa00a0393599400f6bb',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Eric Test',
      company_name: 'Salesforce',
      email: 'sockotj@yahoo.com',
      job_title: 'CTO',
      contact_id: 318201,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'New Product Release',
      campaign_id: '2921',
      origEmails: {
        campaign_id: 2921,
        campaign_name: 'New Product Release',
        intro1: {
          subject: 'Congrats on the new product! Customized outreach at scale',
          greeting: 'Hi Eric,',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Salesforce auto-compose expert sales outreach instantly.',
          reason: 'Congrats on the product launch, I\'m sure it\'s been a smashing success so far. I thought I\'d reach out because I think the work I do at <a href="www.ehamer.us">New Company</a> may be of value.',
          pitch: 'New Product - Large Buyer - 1',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/daniel612">calendars</a> match up. Might that work for you?',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the product release.',
          role: 'As a refresher I\'m the CEO & Co-Founder of New Company.',
          reason: 'I thought I\'d bump my previous message up incase it got lost in shuffle.',
          pitch: 'New Product - Large Buyer - 2',
          calltoaction: 'Do you have time for a call to see if New Company might be helpful given the latest news on Salesforce\'s new product? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: 'I\'ve been working with some folks in your industry who are struggling with spammy & generic outreach.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Salesforce<br><br>I\'m happy to refresh your memory on what we do in the sales automation industry.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'Might this conversation be better suited for your colleagues at Salesforce?',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: 'Hello, this is an ABT testing-2.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Salesforce.',
          role: '',
          reason: 'As a refresher, I shared a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: 'Hello, this is an ABT testing-3.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Salesforce, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'My colleague in marketing pinged me mentioning that you had a chance to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'To reiterate, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> increases efficiencies to businesses like Salesforce.',
          pitch: 'Hello, this is an ABT testing-4.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: 'Hello, this is an ABT testing-5.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Salesforce, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-10T10:51:12.924Z',
      modified: '2020-04-10T10:51:12.924Z',
      activation_date: '2020-04-10T10:51:12.924Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e976eaab5e2c90ff185fdaf',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Vic Santos',
      company_name: 'Google',
      email: 'demo450@autobound.ai',
      job_title: 'Competitive & Market Intel, Sales Operations & Strategy Analyst (APAC)',
      contact_id: 287264,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Interesting news on Google\'s latest acquisition on TechCrunch',
          greeting: 'Hi Vic,',
          opener: 'Just browsed Google\'s website, seems your team does very interesting work.',
          role: 'I specialize in helping companies like Google generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Saw an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. ',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/daniel612">calendars</a> match up. Would that work for you?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Vic,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'To quickly recap, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d bump my previous message up incase it got lost in your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Vic,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I realize this decision might not fall into your wheelhouse. Would you mind pointing me in the right direction if so?',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'To recap - I shared a note a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Vic,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'To reiterate, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> increases efficiencies to businesses like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Vic,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-15T20:29:30.401Z',
      modified: '2020-04-15T20:29:30.401Z',
      activation_date: '2020-04-15T20:29:30.401Z',
      steps: [
        {
          _id: '5e976eb350882b0fd0746536',
          step: 'send_intro_1',
          date: '2020-04-15T20:29:39.641Z'
        },
        {
          _id: '5e977cfeeba2a8107b6bdec6',
          step: 'send_intro_2',
          date: '2020-04-15T21:30:38.897Z'
        },
        {
          _id: '5e977d3bfd64590f7133cf59',
          step: 'send_intro_3',
          date: '2020-04-15T21:31:39.412Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e976eb46eb9f00fcdde1974',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Joanne Toy',
      company_name: 'Google',
      email: 'demo906@autobound.ai',
      job_title: 'Product Sales Lead',
      contact_id: 287424,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Question about sales qualified leads',
          greeting: 'persona 1',
          opener: 'Just browsed Google\'s website, seems your team does very interesting work.',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales automation company based in San Francisco that helps businesses like Google auto-compose expert sales outreach instantly.',
          reason: 'Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. It\'s hyperlinked if are interested in reading.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have <a href="https://meetings.hubspot.com/daniel612">time for a call</a> to see if New Company might be helpful given the latest purchase? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: '<p>another persona 2</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Joanne,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'As a refresher I\'m the CEO & Co-Founder of New Company.',
          reason: 'I wanted to follow up on my last message to see if you have given it any thought.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Joanne,',
          opener: 'I have an idea on how to address low quota attainment & high attrition.',
          role: '',
          reason: 'Did you get a chance to see what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/daniel612">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Thanks for taking a moment to visit my LinkedIn page! Would be great to connect if you\'d be open to it.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Google experience an issue related to spammy & generic outreach?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Joanne,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'Glad you were able to check out our site, hopefully you have a deeper understanding of how we might be a fit for Google.',
          role: '',
          reason: 'Curious to hear your thoughts on the work <a href="www.ehamer.us">New Company</a> does to help businesses such as Google regarding transformative acquisitions.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Joanne,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-15T20:29:40.830Z',
      modified: '2020-04-15T20:29:40.830Z',
      activation_date: '2020-04-15T20:29:40.830Z',
      steps: [
        {
          _id: '5e976eb9ffaa780f7409e0f3',
          step: 'send_intro_1',
          date: '2020-04-15T20:29:45.699Z'
        },
        {
          _id: '5e977d07efdaee1072d06911',
          step: 'send_intro_2',
          date: '2020-04-15T21:30:47.920Z'
        },
        {
          _id: '5e977d4485460a0f9181e379',
          step: 'send_intro_3',
          date: '2020-04-15T21:31:48.553Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e976eb77df9bb104fff8b98',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Vinay Skaggs',
      company_name: 'Google',
      email: 'demo541@autobound.ai',
      job_title: 'Sales Enablement Lead',
      contact_id: 287514,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Congrats on the deal announcement 🏅',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'I have a few suggestions for capitalizing on the latest acquisiton.',
          role: 'New Company is a sales enablement company that specializes in working with businesses like Google.',
          reason: 'When I saw the article <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">www.ehamer.us</a>, on Google\'s acquisition, I thought I\'d shoot you a note.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Vinay.',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Vinay,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'As a refresher I\'m the CEO & Co-Founder of New Company.',
          reason: 'I wanted to follow up on my previous email to see if you\'ve given it any thought.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'I\'m sure you\'re probably drinking from the fire hose, so I thought I\'d circle back to try and catch you at the right time.',
          role: '',
          reason: 'Have you had any thoughts on working with us since I last reached out? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google<br><br>I\'m happy to refresh your memory on what we do in the sales enablement industry.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Google experience an issue related to low quota attainment & high attrition?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Vinay,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Glad you were able to check out New Company\'s site, hopefully you have a deeper understanding of how we might be a fit for Google.',
          role: '',
          reason: 'To reiterate, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> increases efficiencies to businesses like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Vinay,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-15T20:29:43.493Z',
      modified: '2020-04-15T20:29:43.493Z',
      activation_date: '2020-04-15T20:29:43.493Z',
      steps: [
        {
          _id: '5e976ebf154f450f3b7fe6ff',
          step: 'send_intro_1',
          date: '2020-04-15T20:29:51.807Z'
        },
        {
          _id: '5e977d0da2387110256aa9a2',
          step: 'send_intro_2',
          date: '2020-04-15T21:30:53.945Z'
        },
        {
          _id: '5e977d4ad6b27b0f497cbf38',
          step: 'send_intro_3',
          date: '2020-04-15T21:31:54.531Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e976ebefd64590f7133cf4e',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Sunny Schermer',
      company_name: 'Google',
      email: 'demo1734@autobound.ai',
      job_title: 'Manager, Enterprise Field Sales (Google Cloud)',
      contact_id: 287679,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'TechCrunch\'s Article on Google\'s acquisition & ideas for efficiency 🤝',
          greeting: 'Hi Sunny,',
          opener: 'I have a few suggestions for capitalizing on the latest acquisiton.',
          role: 'I\'m the CEO & Co-Founder of New Company, it\'s a pleasure to e-meet you. We help companies set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: 'Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. It\'s hyperlinked if are interested in reading.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Sunny.',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'What would it mean to you if your business was able to increase efficiencies around sales qualified leads?',
          role: 'As a refresher, I\'m the CEO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I thought I\'d bump my previous message to the top of your inbox incase it got lost in shuffle.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Have you had a chance to check out my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sunny,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Google experience an issue related to low quota attainment & high attrition?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I sent a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Sunny,',
          opener: 'Glad you had a chance to visit our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Sunny,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        }
      },
      created: '2020-04-15T20:29:50.999Z',
      modified: '2020-04-15T20:29:50.999Z',
      activation_date: '2020-04-15T20:29:50.999Z',
      steps: [
        {
          _id: '5e976ec593b7740fc59c6836',
          step: 'send_intro_1',
          date: '2020-04-15T20:29:57.784Z'
        },
        {
          _id: '5e977d13ffaa780f7409e103',
          step: 'send_intro_2',
          date: '2020-04-15T21:30:59.975Z'
        },
        {
          _id: '5e977d50f62d060f7ae4033a',
          step: 'send_intro_3',
          date: '2020-04-15T21:32:00.614Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e976ec80f4ac40f41be3a1b',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Leonardo Jarron',
      company_name: 'Google',
      email: 'demo931@autobound.ai',
      job_title: 'Sales Manager, New Business',
      contact_id: 287763,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Leonardo,',
          opener: 'I have a few suggestions for capitalizing on the latest acquisiton.',
          role: 'I\'m the CEO & Co-Founder of New Company. We help businesses sell more with advanced auto-personalization. It\'s nice to meet you virtually.',
          reason: 'When I saw the article <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">www.ehamer.us</a>, on Google\'s acquisition, I thought I\'d shoot you a note.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Did you happen to see my last message?',
          role: 'As a refresher, we empower companies to auto-compose expert sales outreach instantly.',
          reason: 'I wanted to follow up on my last message to see if you\'ve given it any thought.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'What are your thoughts? I look forward to hearing from you.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Leonardo,',
          opener: 'I have an idea on how to address spammy & generic outreach.',
          role: '',
          reason: 'Have you had a chance to review my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'To recap - I shared a note a few days ago on how <a href="www.ehamer.us">New Company</a> can help you sell more with advanced auto-personalization.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Leonardo,',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Thanks for taking a moment to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Leonardo,',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-15T20:30:00.886Z',
      modified: '2020-04-15T20:30:00.886Z',
      activation_date: '2020-04-15T20:30:00.886Z',
      steps: [
        {
          _id: '5e976ed1d632690f5181493f',
          step: 'send_intro_1',
          date: '2020-04-15T20:30:09.985Z'
        },
        {
          _id: '5e977d2350882b0fd0746546',
          step: 'send_intro_2',
          date: '2020-04-15T21:31:15.100Z'
        },
        {
          _id: '5e977d5f2439b20f693444cc',
          step: 'send_intro_3',
          date: '2020-04-15T21:32:15.659Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e98721b0f4ac40f41be3a1c',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Priscila Yee',
      company_name: 'Google',
      email: 'demo2012@autobound.ai',
      job_title: 'Agency Sales Operations Lead (North America)',
      contact_id: 288084,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Exciting article on Google\'s latest acquisition on TechCrunch',
          greeting: 'test greeting',
          opener: 'I have a few suggestions for capitalizing on the latest acquisiton.',
          role: 'New Company is a sales enablement company that specializes in working with businesses like Google.',
          reason: 'When I saw the article <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">www.ehamer.us</a>, on Google\'s acquisition, I thought I\'d shoot you a note.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Priscila.',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Priscila,',
          opener: 'Did you happen to see my last note?',
          role: 'A quick recap, I work with businesses to help them sell more with advanced auto-personalization.',
          reason: 'Thought I\'d circle back in case my previous message slipped your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Priscila,',
          opener: 'I have an idea on how to address low quota attainment & high attrition.',
          role: '',
          reason: 'If this message is better suited for someone else, let me know and I\'d be happy to direct my attention elsewhere.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Priscila,',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Google experience an issue related to low quota attainment & high attrition?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'test greeting',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'As a refresher, I sent a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>snippet we want to test if test greeting 2 stays deleted modifed</p>',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - curious to hear if anything that caught your eye?',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Priscila,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T14:56:27.685Z',
      modified: '2020-04-16T14:56:27.685Z',
      activation_date: '2020-04-16T14:56:27.685Z',
      steps: [
        {
          _id: '5e98722910df120ffc175b93',
          step: 'send_intro_1',
          date: '2020-04-16T14:56:41.630Z'
        },
        {
          _id: '5e98807c2211765d8ee45742',
          step: 'send_intro_2',
          date: '2020-04-16T15:57:48.597Z'
        },
        {
          _id: '5e9880bfa668835daa3dece4',
          step: 'send_intro_3',
          date: '2020-04-16T15:58:55.640Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e989346b1784f5efc731341',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Russ Barnard',
      company_name: 'Google',
      email: 'demo1953@autobound.ai',
      job_title: 'Head of Sales (Google Cloud)',
      contact_id: 288142,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Time spent selling vs. prospecting at Google',
          greeting: '',
          opener: '',
          role: 'I\'m the CEO & Co-Founder of New Company - a sales enablement company based in San Francisco that helps businesses like Google sell more with advanced auto-personalization.',
          reason: 'Saw an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and thought I\'d reach out. It\'s hyperlinked if are interested in reading.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have <a href="https://meetings.hubspot.com/daniel612">time for a call</a> to see if New Company might be helpful given the latest purchase? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Russ,</p>',
          opener: 'Did you happen to see my last note?',
          role: 'As a refresher, I\'m the CEO & Co-Founder of New Company, I reached out a few days back.',
          reason: 'I wanted to circle back on my previous message to see if you\'ve had a chance to give it any thought.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes to connect to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Russ,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. I look forward to hearing from you.',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do in sales enablement is very impactful for companies like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: '<p>Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and thought I\'d reach out. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Are you available to connect briefly during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Saw you had a chance to view our site! Did you have any questions I could help answer?',
          role: '',
          reason: 'To reiterate, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> adds value to businesses like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'I know how slammed you must be, so I thought I\'d follow up to try and catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T17:17:58.599Z',
      modified: '2020-04-16T17:17:58.599Z',
      activation_date: '2020-04-16T17:17:58.599Z',
      steps: [
        {
          _id: '5e98935457133e69716f7550',
          step: 'send_intro_1',
          date: '2020-04-16T17:18:12.414Z'
        },
        {
          _id: '5e98a1a522337878692cf486',
          step: 'send_intro_2',
          date: '2020-04-16T18:19:17.937Z'
        },
        {
          _id: '5e98a1e276d4137881602350',
          step: 'send_intro_3',
          date: '2020-04-16T18:20:18.472Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e989384b1784f5efc731342',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Samuel Hanchett',
      company_name: 'Google',
      email: 'demo2055@autobound.ai',
      job_title: 'Sales Manager, ,  (Singapore, Malaysia, Philippines)',
      contact_id: 288181,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Congrats on the transaction 🏅',
          greeting: '<p>another persona 1</p>',
          opener: 'I had a chance to browse Google\'s site and thought I\'d reach out and introduce myself.',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales enablement company that helps companies generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and thought I\'d reach out. It\'s hyperlinked if you care to give it a read.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Samuel.',
          signoff: '<p>another persona 2</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the acquisition.',
          role: 'Just to refresh your memory, I\'m the CEO & Co-Founder of New Company, I reached out a few days ago.',
          reason: 'I thought I\'d circle back on my previous messages to see if now might be a better time for us to connect.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. ',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samuel,',
          opener: 'I\'m fairly persistent when it comes to companies I am passionate about, let me know if you\'d like me to reach back out some other time.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Based on feedback from similar companies in Google\'s industry, I think it\'d be worth your time to chat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Samuel,</p>',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>another persona 1</p>',
          opener: 'Thanks for taking a moment to visit our site. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'Curious to hear your thoughts on the work <a href="www.ehamer.us">New Company</a> does with businesses such as Google regarding transformative acquisitions.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at the right time.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T17:19:00.125Z',
      modified: '2020-04-16T17:19:00.125Z',
      activation_date: '2020-04-16T17:19:00.126Z',
      steps: [
        {
          _id: '5e989390a618c168eb83872a',
          step: 'send_intro_1',
          date: '2020-04-16T17:19:12.906Z'
        },
        {
          _id: '5e98a1dfe8c01678f5826012',
          step: 'send_intro_2',
          date: '2020-04-16T18:20:15.458Z'
        },
        {
          _id: '5e98a21fc25fec785b2a0351',
          step: 'send_intro_3',
          date: '2020-04-16T18:21:19.082Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e9895fd93429c407818e459',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Mihir Hayes',
      company_name: 'Google',
      email: 'demo2503@autobound.ai',
      job_title: 'Web, SMB Sales Tools & Technology Developer',
      contact_id: 289113,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Just read article on Google\'s purchase, congrats! 💸',
          greeting: '<p>another persona 1</p>',
          opener: 'Very nice to e-meet you.',
          role: 'I work with teams like yours, helping to generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: '<p>Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Any interest in briefly discussing further? Here\'s a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'persona 1',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>another persona 1</p>',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the acquisition.',
          role: 'As a refresher, my team works with businesses like Google to help auto-compose expert sales outreach instantly.',
          reason: 'Wanted to circle back on the article I saw regarding Google\'s recent purchase on TechCrunch.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'persona 1',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'I\'ve been working with some folks in your industry who are struggling with low quota attainment & high attrition.',
          role: '',
          reason: 'If this message is better suited for someone else, let me know and I\'d be happy to reach out to them instead.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. I look forward to hearing from you.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>another persona 1</p>',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'Based on feedback from similar companies in Google\'s industry, I think it\'d be worth your time to connect.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mihir,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: '<p>Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'I saw you had a chance to check out our site.',
          role: '',
          reason: '<p>Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Mihir,</p>',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at the right time.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T17:29:33.197Z',
      modified: '2020-04-16T17:29:33.197Z',
      activation_date: '2020-04-16T17:29:33.197Z',
      steps: [
        {
          _id: '5e98960e31b56b6929d52e5c',
          step: 'send_intro_1',
          date: '2020-04-16T17:29:50.367Z'
        },
        {
          _id: '5e98a45ab8c7a578924be199',
          step: 'send_intro_2',
          date: '2020-04-16T18:30:50.685Z'
        },
        {
          _id: '5e98a49aaeb2cd7871cc4dbd',
          step: 'send_intro_3',
          date: '2020-04-16T18:31:54.079Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e9896eb93429c407818e45f',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Rachel Bienvenu',
      company_name: 'Google',
      email: 'demo2187@autobound.ai',
      job_title: 'Manager, Sales Strategy & Operations',
      contact_id: 289557,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Sales qualified leads for Google',
          greeting: '<p>overwrite Hi Rachel,</p>',
          opener: 'I had a chance to browse Google\'s site and thought I\'d reach out and introduce myself.',
          role: 'My company, New Company, helps companies like Google sell more with advanced auto-personalization.',
          reason: '<p>Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have <a href="https://meetings.hubspot.com/daniel612">time for a call</a> to see if New Company might be helpful given the latest purchase? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the acquisition.',
          role: 'As a refresher, my team works with businesses like Google to help auto-compose expert sales outreach instantly.',
          reason: 'I thought I\'d follow up on my previous notes to see if now might be a better time for us to connect.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have 15-20 minutes to see if New Company\'s solutions might be a fit? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: '<p>another persona 2</p>',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can you or someone on your team jump on a quick 14 minute call this week to explore? Here is a link to my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Rachel,</p>',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Google experience an issue related to low quota attainment & high attrition?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a note recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: '<p>another persona 2</p>',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>another persona 1</p>',
          opener: 'I saw you had a chance to visit our website.',
          role: '',
          reason: 'To reiterate, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> increases efficiencies to businesses like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: '<p>Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T17:33:31.081Z',
      modified: '2020-04-16T17:33:31.081Z',
      activation_date: '2020-04-16T17:33:31.082Z',
      steps: [
        {
          _id: '5e9896feea61376943772805',
          step: 'send_intro_1',
          date: '2020-04-16T17:33:50.518Z'
        },
        {
          _id: '5e98a5525d26d478611b746d',
          step: 'send_intro_2',
          date: '2020-04-16T18:34:58.958Z'
        },
        {
          _id: '5e98a58fc9cda203e875544d',
          step: 'send_intro_3',
          date: '2020-04-16T18:35:59.713Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e989e1314846e68fbd9221b',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Stephen Gremban',
      company_name: 'Google',
      email: 'demo2856@autobound.ai',
      job_title: 'Manager, Hardware Sales & Partnerships',
      contact_id: 289608,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'TechCrunch\'s Article on Google\'s purchase & ideas for efficiency 🤝',
          greeting: 'persona 1',
          opener: 'Very nice to meet you via email.',
          role: 'I\'m the CEO & Co-Founder of New Company, pleasure to meet you via email.',
          reason: '<p>Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. hi bob</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/daniel612">calendars</a> match up. Might that work for you?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the acquisition.',
          role: 'As a refresher, my team works with businesses like Google to help auto-compose expert sales outreach instantly.',
          reason: '<p>Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes for a call to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Stephen,',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'If this message is better suited for someone else, let me know and I\'d be happy to direct my attention elsewhere.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Stephen,',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do in sales enablement is very impactful for companies like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: 'As a refresher, I shared a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: '<p>another persona 2</p>',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Stephen,</p>',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for Google.',
          role: '',
          reason: 'Thought I\'d circle back, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: '<p>another persona 2</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>another persona 1</p>',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: '<p>Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T18:04:03.041Z',
      modified: '2020-04-16T18:04:03.041Z',
      activation_date: '2020-04-16T18:04:03.041Z',
      steps: [
        {
          _id: '5e989e1f8e8b7169d6336c4f',
          step: 'send_intro_1',
          date: '2020-04-16T18:04:15.452Z'
        },
        {
          _id: '5e98ac69ae909403da6e02cf',
          step: 'send_intro_2',
          date: '2020-04-16T19:05:13.912Z'
        },
        {
          _id: '5e98aca90098750415690ece',
          step: 'send_intro_3',
          date: '2020-04-16T19:06:17.713Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e989e1b25952b697d030e36',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Mrinali Merhej',
      company_name: 'Google',
      email: 'demo2312@autobound.ai',
      job_title: 'Sales Operations Analyst (Google Fiber Division)',
      contact_id: 289803,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Intro call - how New Company can decrease spammy & generic outreach at Google',
          greeting: '<p>another persona 1</p>',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the CEO & Co-Founder of New Company. We help companies auto-compose expert sales outreach instantly. It\'s a pleasure to meet you. ',
          reason: 'Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent purchase and think the work I do at <a href="www.ehamer.us">New Company</a> may be of value. It\'s hyperlinked if are interested in reading.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have <a href="https://meetings.hubspot.com/daniel612">time for a call</a> to see if New Company might be helpful given the latest purchase? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: '<p>does this get deleted?</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'Did you happen to see my last note?',
          role: 'To quickly recap, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'Thought I\'d follow up in case my previous message missed your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Might be worth considering, could we <a href="https://meetings.hubspot.com/daniel612">sync</a> to see if so?',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Mrinali,',
          opener: 'Hope you don\'t mind my persistence.',
          role: '',
          reason: 'Did you get a chance to see what I sent? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. Hope to connect with you soon.',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>another persona 1</p>',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Have you had a chance to give any thought towards the work New Company does in sales enablement with businesses like Google surrounding a recent M&A?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value?',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Mrinali,</p>',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '',
          reason: '<p>Was reading an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and thought I\'d reach out. do these changes reflect</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Glad you had a chance to visit our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'Not meaning to sound like a broken record, wanted to briefly recap how we help companies auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>test persona update persona 1</p>',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'persona 1',
          signiture: ''
        }
      },
      created: '2020-04-16T18:04:11.724Z',
      modified: '2020-04-16T18:04:11.724Z',
      activation_date: '2020-04-16T18:04:11.724Z',
      steps: [
        {
          _id: '5e989e25d1d0c468938b392e',
          step: 'send_intro_1',
          date: '2020-04-16T18:04:21.222Z'
        },
        {
          _id: '5e98ac7235f7b4040d3e2d79',
          step: 'send_intro_2',
          date: '2020-04-16T19:05:22.975Z'
        },
        {
          _id: '5e98acaff9ee4604de070ac5',
          step: 'send_intro_3',
          date: '2020-04-16T19:06:23.881Z'
        }
      ],
      __v: 3
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5e989e64f4a0ab688d79181e',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Russ Barnard',
      company_name: 'Google',
      email: 'demo1953@autobound.ai',
      job_title: 'Head of Sales (Google Cloud)',
      contact_id: 288142,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Sales qualified leads for Google',
          greeting: '<p>another persona 1</p>',
          opener: 'Just browsed Google\'s website, seems your team does very interesting work.',
          role: 'I help companies like Google generate more sales qualified leads using extremely relevant, AI powered customization. One of our most successful clients is Kompyte.',
          reason: '<p>does this make it larger</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Would love to briefly connect when the <a href="https://meetings.hubspot.com/daniel612">calendars</a> match up. Might that work for you?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Russ,',
          opener: 'Hope you have been well since I last reached out.',
          role: 'To quickly recap, I work with companies to help them auto-compose expert sales outreach instantly.',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. ',
          signoff: 'persona 1',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Russ,',
          opener: 'Don\'t mean to be a bother, I\'m sure you\'re busy as well.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation industry.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we <a href="https://meetings.hubspot.com/daniel612">set up 20-30 minutes</a> for a call to see if New Company could be of value? Thanks and hope to connect soon!',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Glad you were able to check out my LinkedIn!',
          role: '',
          reason: 'Have you had a chance to give any thought towards the work New Company does in sales enablement with businesses like Google surrounding a recent M&A?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Russ,</p>',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'As a refresher, I shared a message recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>overwrite Hi Russ,</p>',
          opener: 'Thanks for taking a moment to visit our site. Curious if you had questions on any of the content that I could help answer?',
          role: '',
          reason: 'Thought I\'d circle back, I know it can be difficult to find the time to read every email in your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'Thanks!<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Russ,',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: 'Wanted to follow up with a recap of why I think it makes sense for us to chat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'All the best,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-16T18:05:24.714Z',
      modified: '2020-04-16T18:05:24.715Z',
      activation_date: '2020-04-16T18:05:24.715Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ea75fb270e84841bd545474',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Jorge ',
      company_name: 'RED HAT',
      email: 'demo988@autobound.ai',
      job_title: 'Cloud Sales Specialist',
      contact_id: 285936,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Series A',
      campaign_id: '2926',
      origEmails: {
        campaign_id: 2926,
        campaign_name: 'Series A',
        intro1: {
          subject: 'Storagereview.com Article on Red Hat\'s round',
          greeting: 'persona 1',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'My company, New Company, helps  businesses like Red Hat auto-compose expert sales outreach instantly.',
          reason: 'Read on <a href="https://www.storagereview.com/news/red-hat-releases-ceph-storage-4">Storagereview.com</a> that Red Hat closed their Series A round! Huge congratulations to you and your colleagues, that\'s very exciting.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Jorge.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello (first_name<i>), </i>computer software&nbsp;</p>',
          opener: 'I hope you have been well since I last reached out.',
          role: 'As a refresher I\'m the CEO & Co-Founder of New Company.',
          reason: 'Thought I\'d follow up in case my previous message slipped your inbox.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'When you have a chance, feel free to browse our <a href="www.ehamer.us">website.</a> Can we set up 20-30 minutes for a call to see if New Company can sell more with advanced auto-personalization?<br><br>Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'persona 1',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'I have an idea on how to address low quota attainment & high attrition.',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation industry.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability to connect to see if New Company can help? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. I look forward to hearing from you.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Jorge,',
          opener: 'I saw you had a chance to check out my LinkedIn page and wanted to drop you a note.',
          role: '',
          reason: 'Based on feedback from similar companies in Red Hat\'s industry, I think it\'d be worth your time to connect.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent news on Red Hat\'s Series A? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: 'persona 1',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Jorge,',
          opener: 'Hopefully this message catches you at the right time.',
          role: '',
          reason: 'As a refresher, I sent a message recently discussing how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Jorge,',
          opener: 'Glad you had a chance to visit our website. What did you think?',
          role: '',
          reason: 'To reiterate, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> adds value to businesses like Red Hat.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'You\'re likely busy as well, so I thought sharing my <a href="https://meetings.hubspot.com/daniel612">calendar</a> might make things easier.  I look forward to hearing from you.',
          signoff: 'Regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'persona 1',
          opener: 'Hoping this finds you well.',
          role: '',
          reason: 'You might recall, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Red Hat, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-27T22:41:54.101Z',
      modified: '2020-04-27T22:41:54.101Z',
      activation_date: '2020-04-27T22:41:54.101Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ea9e252389cf63b188f1cf6',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Simone ',
      company_name: 'Google',
      email: 'demo2744@autobound.ai',
      job_title: 'Sales Manager, Industry Google Cloud',
      contact_id: 289804,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Acquisitions',
      campaign_id: '2914',
      origEmails: {
        campaign_id: 2914,
        campaign_name: 'Acquisitions',
        intro1: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales enablement company that helps companies generate more sales qualified leads using extremely relevant, AI powered customization.',
          reason: 'Read an interesting <a href="http://techcrunch.com/2020/02/19/google-cloud-acquires-mainframe-migration-service-cornerstone/">article</a> on TechCrunch on Google\'s recent acquisition and thought I\'d reach out. It\'s hyperlinked if are interested in reading.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Simone.',
          signoff: '<p>does this show when i click insert?</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: 'Did you get my last message by chance? I\'m sure you\'re quite busy following the acquisition.',
          role: 'To recap, I\'m the CEO & Co-Founder of New Company.',
          reason: 'I wanted to follow up on my last email from a couple of days ago to see if you\'ve had an opportuntiy to give it any consideration.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company might be of value? Feel free to add some time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. ',
          signoff: 'Thanks,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '<p>My company, New Company, helps companies like Google sell more with advanced auto-personalization.</p>',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'From what I know about the Google team, I think I can be a big value add. Can we connect to see if I can add any immediate value? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a> for your convenience.',
          signoff: '<p>does this show when i click insert?</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '<p>My company, New Company, helps companies like Google sell more with advanced auto-personalization.</p>',
          reason: 'Figured I must\'ve sparked interest, Does Google experience an issue related to spammy & generic outreach?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes for a call to see if New Company could be of value given the recent acquisition? Would you mind adding time in my <a href="https://meetings.hubspot.com/daniel612">calendar</a> that is convenient for you?',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: 'I think you\'d find the work New Company does around sales automation to be relevant to Google.',
          role: '<p>My company, New Company, helps companies like Google sell more with advanced auto-personalization.</p>',
          reason: 'As a refresher, I sent a note recently highlighting how <a href="www.ehamer.us">New Company</a> can help teams like yours.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: 'My colleague in marketing mentioned you had a chance to review our website - hopefully you have a deeper understanding of how we might be a fit for Google.',
          role: '<p>My company, New Company, helps companies like Google sell more with advanced auto-personalization.</p>',
          reason: 'Have you given any thought to my last note? The work we do at <a href="www.ehamer.us">New Company</a> is well received by companies like Google.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '<p>Hello Simone,</p>',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '<p>My company, New Company, helps companies like Google sell more with advanced auto-personalization.</p>',
          reason: 'You might recall, you received a message from me a few days ago on how <a href="www.ehamer.us">New Company</a> can help you auto-compose expert sales outreach instantly.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Google, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-04-29T20:23:46.064Z',
      modified: '2020-04-29T20:23:46.064Z',
      activation_date: '2020-04-29T20:23:46.064Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5eab6231b9b73e4ae0dfa8ca',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Radoslav ',
      company_name: 'Methodics',
      email: 'demo222@autobound.ai',
      job_title: 'Technical Sales Manager',
      contact_id: 285754,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'No Previous Contact',
      campaign_id: '2923',
      origEmails: {
        campaign_id: 2923,
        campaign_name: 'No Previous Contact',
        intro1: {
          subject: 'Eric <> Radoslav - intro 👋 ',
          greeting: '',
          opener: 'I know everyone hates a cold email, but I wanted to explain why you should check out New Company.',
          role: 'I\'m the CEO & Co-Founder of New Company, it\'s a pleasure to meet you via email. I help businesses generate more sales qualified leads using extremely relevant, AI powered customization. You may have heard of Kompyte, they are one of our more successful clients.',
          reason: 'Given your position at Methodics, I thought it made sense to see if we could find time to connect.',
          pitch: 'test',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Radoslav.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Did you happen to see my last email?',
          role: 'To recap, I\'m the CEO & Co-Founder of New Company.',
          reason: '<p>Given your role at Methodics, I thought it made sense to see if we could find time to connect.</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: '',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I have an idea on how to address spammy & generic outreach.',
          role: '',
          reason: 'Have you had a chance to check out my previous emails? I think the work we do at <a href="www.ehamer.us">New Company</a> would add a ton of value to the work you do.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Do you have any availability for a call to see if New Company can help? Feel free to add time on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>. I look forward to hearing from you.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'My marketing team told me you had a chance to visit our site.',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Methodics experience an issue related to spammy & generic outreach?',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value?',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '<p>Given your role at Methodics, I figured it made sense to see if we could find time to connect. does trhis work</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Methodics, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'Marketing pinged me and mentioned that you had a chance to check out our website. I\'m curious to hear your thoughts.',
          role: '',
          reason: 'To reiterate, you received a note from me a few days ago on how <a href="www.ehamer.us">New Company</a> adds value to businesses like Methodics.',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: 'persona 1',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: '',
          opener: 'I know how slammed you must be, so I thought I\'d circle back to try and catch you at a more convinient time.',
          role: '',
          reason: '<p>Given your role at Methodics, I thought it made sense to see if we could find time to connect.</p>',
          pitch: '<a href="https://www.youtube.com/watch?v=mdjiDQtaF_8">Autobound</a> automates 95% of the work of an outbound sales rep so they can double their effectiveness and help your company hit revenue targets. It prospects for them, identifying who makes the most sense to reach out to (think AI research assistant), and then fully composes 100% ready to go email sequences, curated to your buyers. All our user needs to do is click send if they like what they see.',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        }
      },
      created: '2020-04-30T23:41:37.077Z',
      modified: '2020-04-30T23:41:37.077Z',
      activation_date: '2020-04-30T23:41:37.077Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ec56d49a09caacb6c818e22',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Eric ',
      company_name: 'Intuit Inc.',
      email: 'eric.hamer@gmail.com',
      job_title: 'Test-CTO',
      contact_id: 318801,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Autobound Test Campaign',
      campaign_id: '2930',
      origEmails: {
        campaign_id: 2930,
        campaign_name: 'Autobound Test Campaign',
        intro1: {
          subject: 'Time spent selling vs. prospecting at Intuit',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales enablement company that helps businesses set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: '',
          pitch: '',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Eric.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'One of the easiest ways to get more from every outbound email: Punch your prospect in the face🤕.<br><br>\n\nWhat I mean is, open up your email with a wake up call such as a strong pain point, but phrase it using an open-ended question.\n',
          role: '',
          reason: 'Thought I\'d follow up in case my previous message missed your inbox.',
          pitch: '',
          calltoaction: '<a href="https://meetings.hubspot.com/kyle282">Book a 15 min slot</a> at your convenience and let’s talk about how we can save your team hours, daily, on <b>effective email creation</b>, and get more bang for your buck.',
          signoff: 'Cheers,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation space.',
          pitch: 'I speak to sales reps daily - nearly 100% of them<p>\n1) Are unclear <b>how to write</b> an effective sales sequence<p>\n2) <b>Rarely have time</b> to personalize their message and do the appropriate research<p>\nYet, the most common initiative for sales leaders in 2020 is to increase lead gen from outbound sales.\n',
          calltoaction: 'I recognize your bandwidth is minimal  - I’m happy to answer any questions related to Autobound, or exchange ideas on effective outbound email strategies.<br><br>\n\n<a href="https://meetings.hubspot.com/kyle282">Schedule 15 minutes here on my calendar.</a> here.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: 'Have you given any thought to my last note? The work we do in sales enablement is very impactful for companies like Intuit.',
          pitch: '',
          calltoaction: '<a href="https://meetings.hubspot.com/kyle282">Schedule time on my calendar</a> if you want to learn more about Autobound.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: '<a href="www.ehamer.us">Autobound</a> is built by some of the top thought leaders in the sales space. The CEO of Xactly (our advisor) had this to say about our solution:<br><br>\n<I>“Having a data-driven, replicable, and personalized outbound sales process has never been so important. Autobound\'s sales intelligence platform takes that process to a new level. This will soon be a "must-have" for effective sales teams."<I>',
          calltoaction: 'I don\'t mean to be overly persistent - does this decision fall into your wheelhouse?',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: '',
          pitch: 'Common questions include:<p>\n- How are you able to automatically composes expert emails?<p>\n- What does onboarding look like?<p>\n- When can I start?<p>\n',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: 'The CEO of Kompyte (our client), said:<br><br>\n<i> "This changes the game for outbound sales engagement. A prospecting and outreach process that used to take 20 minutes and 5 tools can now be done instantly and at scale with <a href="www.ehamer.us">Autobound</a>."<i>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Best,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-05-20T17:47:53.398Z',
      modified: '2020-05-20T17:47:53.398Z',
      activation_date: '2020-05-20T17:47:53.398Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ec57120c27325cbd7f17ef7',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Eric ',
      company_name: 'Intuit Inc.',
      email: 'eric.hamer@gmail.com',
      job_title: 'Test-CTO',
      contact_id: 318801,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Autobound Test Campaign',
      campaign_id: '2930',
      origEmails: {
        campaign_id: 2930,
        campaign_name: 'Autobound Test Campaign',
        intro1: {
          subject: 'Intro call - how New Company can decrease spammy & generic outreach at Intuit',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: 'I work with teams like yours at Intuit and think you\'d find value in the work we do at New Company, helping companies sell more with advanced auto-personalization.',
          reason: '',
          pitch: '',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Eric.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: 'Thought I\'d circle back in case my previous message missed your inbox.',
          pitch: '',
          calltoaction: '<a href="https://meetings.hubspot.com/kyle282">Book a 15 min slot</a> at your convenience and let’s talk about how we can save your team hours, daily, on <b>effective email creation</b>, and get more bang for your buck.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales enablement space.',
          pitch: 'I speak to sales reps daily - nearly 100% of them<p>\n1) Are unclear <b>how to write</b> an effective sales sequence<p>\n2) <b>Rarely have time</b> to personalize their message and do the appropriate research<p>\nYet, the most common initiative for sales leaders in 2020 is to increase lead gen from outbound sales.\n',
          calltoaction: 'I recognize your bandwidth is minimal  - I’m happy to answer any questions related to Autobound, or exchange ideas on effective outbound email strategies.<br><br>\n\n<a href="https://meetings.hubspot.com/kyle282">Schedule 15 minutes here on my calendar.</a> here.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Saw you had a chance to view my LinkedIn - does your team struggle with spammy & generic outreach?',
          pitch: '',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: '<a href="www.ehamer.us">Autobound</a> is built by some of the top thought leaders in the sales space. The CEO of Xactly (our advisor) had this to say about our solution:<br><br>\n<I>“Having a data-driven, replicable, and personalized outbound sales process has never been so important. Autobound\'s sales intelligence platform takes that process to a new level. This will soon be a "must-have" for effective sales teams."<I>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'Glad you had a chance to visit our website. What did you think?',
          role: '',
          reason: '',
          pitch: 'Common questions include:<p>\n- How are you able to automatically composes expert emails?<p>\n- What does onboarding look like?<p>\n- When can I start?<p>\n',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: 'The CEO of Kompyte (our client), said:<br><br>\n<i> "This changes the game for outbound sales engagement. A prospecting and outreach process that used to take 20 minutes and 5 tools can now be done instantly and at scale with <a href="www.ehamer.us">Autobound</a>."<i>',
          calltoaction: 'I don\'t mean to be a bother, and I realize this decision might not fall into your wheelhouse. If that\'s the case, would you mind pointing me in the right direction? If you are the right person, let me know if you have 15-20 minutes to connect over the next few days.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-05-20T18:04:16.239Z',
      modified: '2020-05-20T18:04:16.239Z',
      activation_date: '2020-05-20T18:04:16.239Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ec597fd63d136040de30ee8',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Eric ',
      company_name: 'Intuit Inc.',
      email: 'eric.hamer@gmail.com',
      job_title: 'Test-CTO',
      contact_id: 318801,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Autobound Test Campaign',
      campaign_id: '2930',
      origEmails: {
        campaign_id: 2930,
        campaign_name: 'Autobound Test Campaign',
        intro1: {
          subject: 'Intro call - how New Company can decrease spammy & generic outreach at Intuit',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: 'New Company is a sales enablement company that specializes in working with businesses like Intuit.',
          reason: '',
          pitch: '',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Eric.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: 'One of the easiest ways to get more from every outbound email: Punch your prospect in the face🤕.<br><br>\n\nWhat I mean is, open up your email with a wake up call such as a strong pain point, but phrase it using an open-ended question.\n',
          role: '',
          reason: 'Thought I\'d follow up in case my previous message missed your inbox.',
          pitch: '',
          calltoaction: '<a href="https://meetings.hubspot.com/kyle282">Book a 15 min slot</a> at your convenience and let’s talk about how we can save your team hours, daily, on <b>effective email creation</b>, and get more bang for your buck.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation industry.',
          pitch: 'I speak to sales reps daily - nearly 100% of them<p>\n1) Are unclear <b>how to write</b> an effective sales sequence<p>\n2) <b>Rarely have time</b> to personalize their message and do the appropriate research<p>\nYet, the most common initiative for sales leaders in 2020 is to increase lead gen from outbound sales.\n',
          calltoaction: 'I recognize your bandwidth is minimal  - I’m happy to answer any questions related to Autobound, or exchange ideas on effective outbound email strategies.<br><br>\n\n<a href="https://meetings.hubspot.com/kyle282">Schedule 15 minutes here on my calendar.</a> here.',
          signoff: 'Best,<br>Eric<br><br>Sent from my iPhone',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Figured I must\'ve sparked interest, Does Intuit experience an issue related to spammy & generic outreach?',
          pitch: '',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: '<a href="www.ehamer.us">Autobound</a> is built by some of the top thought leaders in the sales space. The CEO of Xactly (our advisor) had this to say about our solution:<br><br>\n<I>“Having a data-driven, replicable, and personalized outbound sales process has never been so important. Autobound\'s sales intelligence platform takes that process to a new level. This will soon be a "must-have" for effective sales teams."<I>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: 'Saw you had a chance to check out our site. What questions can I help answer that will make the decision on exploring Autobound easy?',
          role: '',
          reason: '',
          pitch: 'Common questions include:<p>\n- How are you able to automatically composes expert emails?<p>\n- What does onboarding look like?<p>\n- When can I start?<p>\n',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: 'The CEO of Kompyte (our client), said:<br><br>\n<i> "This changes the game for outbound sales engagement. A prospecting and outreach process that used to take 20 minutes and 5 tools can now be done instantly and at scale with <a href="www.ehamer.us">Autobound</a>."<i>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be open to? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: 'Sincerely,<br>Eric',
          signiture: ''
        }
      },
      created: '2020-05-20T20:50:05.772Z',
      modified: '2020-05-20T20:50:05.772Z',
      activation_date: '2020-05-20T20:50:05.772Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ec59b9763d136040de30eea',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Eric ',
      company_name: 'Intuit Inc.',
      email: 'eric.hamer@gmail.com',
      job_title: 'Test-CTO',
      contact_id: 318801,
      steps_completed: 0,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'Autobound Test Campaign',
      campaign_id: '2930',
      origEmails: {
        campaign_id: 2930,
        campaign_name: 'Autobound Test Campaign',
        intro1: {
          subject: 'Question about time spent selling vs. prospecting',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: 'New Company is a sales enablement company that specializes in working with businesses like Intuit.',
          reason: '',
          pitch: '',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Eric.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: 'Thought I\'d follow up in case my previous message missed your inbox.',
          pitch: '',
          calltoaction: '<a href="https://meetings.hubspot.com/kyle282">Book a 15 min slot</a> at your convenience and let’s talk about how we can save your team hours, daily, on <b>effective email creation</b>, and get more bang for your buck.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'What is the <b>average reply rate</b> of your team’s outbound emails? How about <b>positive reply rate</b>?',
          role: '',
          reason: 'Have you had a chance to review my previous message? I\'m happy to recap what we do in the sales automation space.',
          pitch: 'I speak to sales reps daily - nearly 100% of them<p>\n1) Are unclear <b>how to write</b> an effective sales sequence<p>\n2) <b>Rarely have time</b> to personalize their message and do the appropriate research<p>\nYet, the most common initiative for sales leaders in 2020 is to increase lead gen from outbound sales.\n',
          calltoaction: 'I recognize your bandwidth is minimal  - I’m happy to answer any questions related to Autobound, or exchange ideas on effective outbound email strategies.<br><br>\n\n<a href="https://meetings.hubspot.com/kyle282">Schedule 15 minutes here on my calendar.</a> here.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'I noticed you had a chance to check out my LinkedIn profile!',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Intuit experience an issue related to low quota attainment & high attrition?',
          pitch: '',
          calltoaction: 'What is the best way to get some time on your calendar? If it is convenient for you, feel free to add <a href="https://meetings.hubspot.com/daniel612">time in mine</a>. <br><br> Looking forward to hearing from you. ',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: '<a href="www.ehamer.us">Autobound</a> is built by some of the top thought leaders in the sales space. The CEO of Xactly (our advisor) had this to say about our solution:<br><br>\n<I>“Having a data-driven, replicable, and personalized outbound sales process has never been so important. Autobound\'s sales intelligence platform takes that process to a new level. This will soon be a "must-have" for effective sales teams."<I>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Thanks, talk soon!',
          signoff: 'Best regards,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Hi Eric,',
          opener: 'Glad you had a chance to visit our website. Did you have any questions I can help answer?',
          role: '',
          reason: '',
          pitch: 'Common questions include:<p>\n- How are you able to automatically composes expert emails?<p>\n- What does onboarding look like?<p>\n- When can I start?<p>\n',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Eric,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: 'The CEO of Kompyte (our client), said:<br><br>\n<i> "This changes the game for outbound sales engagement. A prospecting and outreach process that used to take 20 minutes and 5 tools can now be done instantly and at scale with <a href="www.ehamer.us">Autobound</a>."<i>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Intuit, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        }
      },
      created: '2020-05-20T21:05:27.019Z',
      modified: '2020-05-20T21:05:27.019Z',
      activation_date: '2020-05-20T21:05:27.019Z',
      steps: [

      ],
      __v: 0
    },
    {
      created_by: '5dc73cf55ff33a28b25ea542',
      modified_by: '5dc73cf55ff33a28b25ea542',
      status: true,
      first_reply: false,
      calls: [

      ],
      _id: '5ecb7fd154cbfdcf7f421919',
      owner: '5dc73cf55ff33a28b25ea543',
      prospect_name: 'Samantha ',
      company_name: 'VMware',
      email: 'demo150@autobound.ai',
      job_title: 'WW Sales Operations, GPO Global Order Management',
      contact_id: 286275,
      steps_completed: 3,
      steps_total: 3,
      current_branch: 'Intro',
      campaign_name: 'New Product Release',
      campaign_id: '2921',
      origEmails: {
        campaign_id: 2921,
        campaign_name: 'New Product Release',
        intro1: {
          subject: 'Intro & your product launch | New Company 💡',
          greeting: 'Hi Samantha,',
          opener: '<p>Just browsed (company<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: 'I\'m a CEO & Co-Founder at New Company, a sales automation company that helps businesses set more qualified meetings while spending less time prospecting, writing outreach, and creating email sequences.',
          reason: '',
          pitch: 'Reason I ask - Most sales leaders I work with have not figured out outbound sales, particularly the messaging around a new product. The decrease of inbound leads (which they have relied heavily on) is destroying the company and employees are being let go.',
          calltoaction: 'Feel free to browse our website <a href="www.ehamer.us">here.</a> Can we <a href="https://meetings.hubspot.com/daniel612">connect for 20-30 minutes</a> to see if New Company can auto-compose expert sales outreach instantly? Thanks Samantha.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samantha,',
          opener: 'One of the easiest ways to get more from every outbound email: Punch your prospect in the face🤕.<br><br>\n\nWhat I mean is, open up your email with a wake up call such as a strong pain point, but phrase it using an open-ended question.\n',
          role: '',
          reason: 'Does anything I\'ve mentioned resonated with some of what Vmware could benefit from? New product releases are usually a good time to evaluate new options so I figure it made sense for us to find time to connect.',
          pitch: '<a href="www.ehamer.us">Our personalization technology</a> has hundreds of expert sales strategies built into the system to help you increase conversion rates and push Vmware’s new product into the market.',
          calltoaction: '<a href="https://meetings.hubspot.com/kyle282">Book a 15 min slot</a> at your convenience and let’s talk about how we can save your team hours, daily, on <b>effective email creation</b>, and get more bang for your buck.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        intro3: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samantha,',
          opener: 'What is the <b>average reply rate</b> of your team’s outbound emails? How about <b>positive reply rate</b>?',
          role: '',
          reason: 'Have you had a chance to give my previous message any thought?',
          pitch: 'I speak to sales reps daily - nearly 100% of them<p>\n1) Are unclear <b>how to write</b> an effective sales sequence<p>\n2) <b>Rarely have time</b> to personalize their message and do the appropriate research<p>\nYet, the most common initiative for sales leaders in 2020 is to increase lead gen from outbound sales.\n',
          calltoaction: 'I recognize your bandwidth is minimal  - I’m happy to answer any questions related to Autobound, or exchange ideas on effective outbound email strategies.<br><br>\n\n<a href="https://meetings.hubspot.com/kyle282">Schedule 15 minutes here on my calendar.</a> here.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samantha,',
          opener: 'Saw you made it on to my LinkedIn profile. What questions can I help answer that will make the decision on exploring Autobound easy?',
          role: '',
          reason: 'Figured I must\'ve sparked interest if you took time to view my LinkedIn. Does Vmware experience an issue related to low quota attainment & high attrition?',
          pitch: 'know deciding on sales technology solutions is a fulltime job in itself, If we aren’t the right fit, I’ll be the first to tell you, as well as point you in the right direction. I’m here to help you bring your product to the market as fast and as lowcost as possible.',
          calltoaction: 'Can we set up 20-30 minutes to connect to see if New Company could be of value given the recent news on Vmware\'s new product? Feel free to set up some time to connect on my <a href="https://meetings.hubspot.com/daniel612">calendar</a>.',
          signoff: 'Best,<br>Eric',
          signiture: ''
        },
        productUrlClicked: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samantha,',
          opener: 'Saw you had a chance to check out our site. What questions can I help answer that will make the decision on exploring Autobound easy?',
          role: '',
          reason: '',
          pitch: 'Common questions include:<p>\n- How are you able to automatically composes expert emails?<p>\n- What does onboarding look like?<p>\n- When can I start?<p>\n',
          calltoaction: 'I realize you\'re busy, can we tentatively hold 20 minutes to connect next week? Feel free to book me <a href="https://meetings.hubspot.com/daniel612">here</a>.',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        linkinClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samantha,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: '<a href="www.ehamer.us">Autobound</a> is built by some of the top thought leaders in the sales space. The CEO of Xactly (our advisor) had this to say about our solution:<br><br>\n<I>“Having a data-driven, replicable, and personalized outbound sales process has never been so important. Autobound\'s sales intelligence platform takes that process to a new level. This will soon be a "must-have" for effective sales teams."<I>',
          calltoaction: 'Are you available for a brief chat during any of <a href="https://meetings.hubspot.com/daniel612">these times</a>?',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        },
        productUrlClicked2: {
          subject: 'Thoughts on New Company?',
          greeting: 'Samantha,',
          opener: '<p>Just browsed (company_<i>name)\'s website, seems your team does very interesting work. (</i></p>',
          role: '',
          reason: '',
          pitch: 'The CEO of Kompyte (our client), said:<br><br>\n<i> "This changes the game for outbound sales engagement. A prospecting and outreach process that used to take 20 minutes and 5 tools can now be done instantly and at scale with <a href="www.ehamer.us">Autobound</a>."<i>',
          calltoaction: 'I understand if this conversation would better be suited for one of your colleagues at Vmware, in which case I\'d greatly appreciate you letting me know. Is that something you\'d be willing to do? <br><br>If you are the right person, let me know if you have 15-20 minutes to connect over the next few days, thanks!',
          signoff: '<p>Best,</p><p>Kyle</p>',
          signiture: ''
        }
      },
      created: '2020-05-25T08:20:33.926Z',
      modified: '2020-05-25T08:20:33.926Z',
      activation_date: '2020-05-25T08:20:33.926Z',
      steps: [
        {
          _id: '5ecb7fd7ef521363e8aac384',
          step: 'send_intro_1',
          date: '2020-05-25T08:20:39.161Z'
        },
        {
          _id: '5ecb823c72a76d7c6abf0d86',
          step: 'send_intro_2',
          date: '2020-05-25T08:30:52.276Z'
        },
        {
          _id: '5ecb82c61f00bf7cf70d10cf',
          step: 'send_intro_3',
          date: '2020-05-25T08:33:10.925Z'
        }
      ],
      __v: 3
    }
  ]
};


const suggested = {
  Result: 'Success',
  Error: 0,
  ErrorDetails: {
    Error: 0,
    Description: 'The operation was successful'
  },
  campaigns: {
    campaignsSuggested: [
      {
        reason: 'New Revenue Executives',
        prospects: [
          { id: 1, name: 'Christian Cecchi' },
          { id: 2, name: 'Colin Marshall' },
          { id: 3, name: 'Jonathan Basiri' }
        ],
        activity: 'Initial Contact',
        job_titles: [
          'Sales Director (EMEA)',
          'Sales Director'
        ],
        companies: [
          'Flipboard'
        ],
        campaign_id: 91
      },
      {
        reason: 'New Product Release',
        prospects: [
          'Anastasia Stoljarova',
          'Alden Bradley',
          'Ann Griffith',
          'Alex Grandbury',
          'Alexandra Kelly',
          'Andras Horvath',
          'Ami Silverman',
          'Alexandra Maher',
          'Amir Assif',
          'Aditya Biswas',
          'Adam Barker',
          'Akihiro Minamisawa',
          'Analisa Roberts',
          'Adam Reed',
          'Amjad Khan',
          'Amanda Trouba',
          'Adam Beacher',
          'Andrew Yip',
          'Ann Bradley',
          'Alex Schudrich',
          'Amol Shah',
          'Aleksey Nechiporuk',
          'Alicia Martin',
          'Andrew Ford',
          'Alison Cunard'
        ],
        activity: 'Introduce New Product',
        job_titles: [
          'Sales Manager (EMEA)',
          'Business Sales Manager',
          'Director, US Services Sales Excellence & Operations',
          'Sales Manager',
          'Sales, Services, & G&A Talent Partner',
          'Retail Sales Lead',
          'Corporate VP, Worldwide Sales & Marketing (Consumer & Devices)',
          'Sales Operations Manager',
          'Solution Principal & Manager, Azure (Sales',
          'Manager, Sales, Operations',
          'Azure Sales Lead (Asia)',
          'Sales Development Specialist',
          'Business Management, Sales Operations & Strategy Specialist (OEM Division)',
          'Sales Director (Northeast US Education)',
          'Director, Solution Sales',
          'Business & Education Sales Specialist',
          'Sales Director (Retail & Manufacturing Division)',
          'Partner Sales Executive',
          'Director, Region Sales Excellence (East)',
          'Director, PC Category Sales',
          'Director, Sales, Search Advertising',
          'Head of Sales Operations',
          'General Manager, Worldwide Sales &amp, Marketing'
        ],
        companies: [
          'Malwarebytes',
          'T-Mobile',
          'Microsoft',
          'github'
        ],
        campaign_id: 96
      },
      {
        reason: 'No Previous Contact',
        prospects: [
          'Alberto Escudero',
          'Alex Rice',
          'Anthony Rethans',
          'Alyssa Schoch',
          'Amanda Evangelista',
          'Alan Pecci',
          'Andy Seepersad',
          'Arif Afandi',
          'Anil Reddy-Neal',
          'Andrew Lebowski',
          'Anthony Rice',
          'Anne Fisher',
          'Alex Stanton',
          'Anthony Narducci',
          'Anne-Marie Azzi',
          'Andy Shotz',
          'Anthony Frattali',
          'Alyssa Domokos',
          'Andy Due',
          'Arnold Britto',
          'Abdullah Al-Kindi',
          'Adam Cheer',
          'Adam Cooper',
          'Aaron Engram',
          'Aakash Arya'
        ],
        activity: 'Initial Contact',
        job_titles: [
          'Director, Diagnostics Sales (EMEA)',
          'Area Sales Manager',
          'Director, Sales (Western Region)',
          'Sales Development Team Lead',
          'Manager, Ambulatory Inside Sales',
          'Sales Executive',
          'Inside Sales Manager',
          'Senior Manager, Sales',
          'Salesforce Business System Analyst(Apttus CPQ, CLM, Billing Management',
          'Chief Sales Officer',
          'Sales Manager',
          'Vice President, Presales',
          'Vice President, Sales',
          'Manager, Marketing & Sales Enablement',
          'Director, Enterprise Sales',
          'Sales Operations Specialist',
          'Director, Sales',
          'Area Sales Director',
          'Manager, Commercial Sales Mountain (West)',
          'Sales Director'
        ],
        companies: [
          'NanoString Technologies, Inc.',
          'Tableau',
          'Apstra',
          'Pushpay',
          'NextGen Healthcare',
          'Oracle',
          'Ethos Lending',
          'Cloudely Inc',
          'Epom',
          'Bay Equity Home Loans',
          'Guild Mortgage',
          'yardi',
          'Qadium, Inc.',
          'Cisco',
          'Degreed',
          'Procore Technologies, Inc',
          'MOXA',
          'Reflektion Inc',
          'HCL',
          'rfxcel',
          'Advantage Solutions',
          'Amobee, Inc.'
        ],
        campaign_id: 98
      }
    ]
  }
};
