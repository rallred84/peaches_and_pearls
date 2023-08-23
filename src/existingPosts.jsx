const dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

import { miraclesScreenshot } from "./images/base64";

export const existingPosts = [
  {
    id: 1,
    title: "Waiting on Miracles",
    postHTMl: `
    <p>I'm sure if you're married, then you are well aware of the question most people ask you after you tie the knot. I laugh a little bit thinking about it because I can't tell you how many times I have been asked when Robert and I are going to start having children. If this didn't happen to you then feel blessed, because the older you get, the more awkward answering the question becomes. Early into our marriage I could easily slip in the “we're working on it”, but after the months turned into years, answering the question became increasingly difficult as I became convinced that people started to question if we even knew how to make a baby.</p>

    <p>
    It was obvious that neither of us were getting younger, but let me tell you, people have a difficult time handling the truth. Avoiding the awkward topic of infertility, I simply started telling people that Robert and I have a dream of joining the circus and we simply don't want to subject our children to that type of lifestyle. For whatever reason, that was better accepted than we were struggling with getting pregnant. If you know me, then you know that I tend to joke around a lot, but when it came to my struggle to become a Mom, it was a subject better left unsaid. For me at least, there are only so many times you can hear “it will happen some day” or better yet, “you'll be grateful one day that you never had children.” 
    </p>
    
    <p>
    It's cringeworthy when I reflect on some of the remarks that have been shared with me when I was open and honest, but the truth is that it's an uncomfortable topic that most people would rather not talk about, so Robert and I have kept it to ourselves for the most part. Without digging too deep into my long and humdrum story, I wanted to share a little bit of encouragement for someone who has been waiting on the Lord for a miracle. 
    </p>
    
    <p>
    Psalm 77:14 says, “You are the God who performs miracles; you display your power among the peoples.” A miracle is defined as a surprising and welcome event that is not explicable by natural or scientific laws and is therefore considered to be the work of a divine agency. This means that even when everything is impossible by natural or scientific laws, they are not impossible through the God of miracles. 
    </p>
    
    <p>
    I don't think I could begin to explain how much I want to be able to take all of the natural and scientific reasoning and rewire my brain to combat it with the truths written in the book of life. Sometime ago I found myself asking God to not only create in me a clean heart, but also to mould me into a biblical warrior against all things evil that creep into my mind and pull me further from my savior. 
    </p>
    
    <p>
    The biblical warrior in me would be so nose deep into the word of God that she would fight within the spiritual realm all demons and principalities with the truth given to her. As a result of her effort to seek God intensionally, she would rest in the midst of uncertainty, in the lowest valley, and directly in the eye of the storm. 
    </p>

    <p>
    It is true that God gave me his living truth in the form of the Bible to ward off the enemy, to build my hope, and give me strength. But, that wasn't the primary reason. He gave me his living truth to tell me who he is, what he has done, and what he has yet to do. He gave me his living and breathing truth so that I may know that uncertainty, valleys, and storms are remnants of a battle that has already been won against an opponent that has already been destroyed, and the faith I hold precludes me from natural and scientific reasoning alone. 


    </p>
    
    <p>
    If you would have told me on my wedding day (July 16th, 2016) that within a year I wouldn't just be celebrating my anniversary, but the blessing of starting a family I would have told you to get thee behind me satan. If you told me that I would spend years on my knees begging God for a miracle that would be beaten down by natural and scientific reasoning I would have turned you away. If you told me that the one time I received my miracle, I would soon be back on my knees in tears as the thing I prayed for the most would be back in the arms of God before my arms ever had a chance to experience it, I would have been crushed. 
    </p>
    
    <p>
    If you told me that I would still be praying for that miracle nearly seven years later with every bit of natural and scientific reasoning against me, I'm not sure I would have prayed as fervently. If you told me that when I moved to every option outside of the scientific and the natural to build a family that every door would close, I wouldn't have believed you. It's a miracle in and of itself that we live in the present because I am positive I wouldn't have been able to handle the truth before I was able to live it out.
    </p>
    
    <p>
    So as Robert and I remain in prayer over this broken body of mine, our hearts have pressed to open the doors of our home to foster care and adoption through foster care. Having had the door closed through domestic and international because of the natural and scientific, we find ourselves in complete and utter surrender to Christ. As our home becomes open to be a place of rest and peace while we serve and pray for the healing of broken families, we press forward outside of the natural and scientific.
    </p>
    
    <p>
    This wasn't an easy decision and with a mending heart it was surreal and beyond humbling to open up everything about my life, my past, my present, my marriage, my family and my future to someone else just to get approval to care for a child. But even when I feared that I wasn't enough and that my imperfections would outweigh my heart, God carried me above the natural and the scientific. It was one text message from the case worker who spent over 5 hours questioning Robert and I like we were on a judgement stand that broke the shell of protection I felt I needed around my heart from all the disappointment. 
    </p>
    
    <p>
    Below is the text I received after she left our home…
    </p>

    <img src="${miraclesScreenshot}">
    
    <p>
    As of today, February 28th, 2023, Robert and I are officially licensed in the state of Texas to foster and adopt children out of the foster care system. I'm not sure if I will ever be a Mom, whether it be naturally or through adoption. But what I do know is that whether God blesses me with a successful pregnancy, we welcome a child into our home that never leaves, or my heart and home becomes a revolving door of miracles for children and their biological families… Worthy Worthy is the Lord God Almighty!
    </p>
    
    <p>
    Even in the midst of uncertainty, he consistently fulfills his promises filled with mercy and compassion, remaining near to my mending heart while covering me with his Holy Spirit. 
    </p>
    
    `,
    publishDate: new Date("3.1.23").toLocaleDateString("en-us", dateOptions),
    categories: ["Jesus Talk"],
    author: "kimberlylucinda",
    comments: [
      {
        commentAuthor: "Jeanne",
        commentDate: new Date("3.1.23").toLocaleDateString(
          "en-us",
          dateOptions
        ),
        commentText:
          "Amazingly written! God truly has a different plan for you and Robert as parents right now because I believe you are needed in a way that other people are unable to, you both will make positive change in a child's life and love a child more than their biological parents may be able to! So only God knows what your future holds as far as birthing your own child but he knows your ready to make a better life for someone else's! Prayers for both of you! You deserve this opportunity to change some child's future for the better.",
      },
    ],
  },
];
