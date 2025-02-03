function createCard(title, Cname, views, age, duration, thumbnail) 
{
  let c = 0;
  document.querySelector(".thumb").setAttribute("style", `background-image: url(${thumbnail})`);
  document.querySelector(".time").innerHTML = duration;
  document.querySelector(".title").innerHTML = title;
  document.querySelector(".channel").innerHTML = Cname;
  if (age >= 12) 
  {
    age = Math.floor(age / 12);
    document.querySelector(".age").innerHTML = `${age} years ago`;
  } 
  else 
    document.querySelector(".age").innerHTML = `${age} months ago`;

  while (views > 999) 
  {
    views = views / 1000;
    c++;
  }

  views = views.toFixed(1);
  if((views-Math.abs(views))==0)
    views=Math.abs(views);

  if (c == 0) 
    document.querySelector(".views").innerHTML = `${views} views`;
  else if (c == 1)
    document.querySelector(".views").innerHTML = `${views}K views`;
  else if (c == 2)
    document.querySelector(".views").innerHTML = `${views}M views`;
  else if (c == 3)
    document.querySelector(".views").innerHTML = `${views}B views`;
}

createCard("Introduction to Backend | Sigma Web Development #2","CodeWithHarry",749,7,"31:22","Img1.webp");
createCard("Episode 191 - Taarak Mehta Ka Ooltah Chashmah | Babita's Birthday Party | Full Episode","Sony TV",7145000,37,"19:23","Img2.webp");
createCard("43 Inches 4K QLED TV under Rs.20,000/- Only BUT...😱😱","Venom's Tech",359028,8,"12:40","Img3.webp");
createCard("Phineas & Ferb discover the Space!🚀 | Phineas And Ferb |  EP 33","Disney India",8548245945,3,"21:37","Img4.webp");