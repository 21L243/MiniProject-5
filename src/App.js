import {useState} from  'react'
import './App.css';
export function Title1()
{
const[title,setTitle]=useState(false);
return(
<div>
<button onClick={()=>setTitle(!title)}>Harry Potter</button>
{
title ? <p>Harry Potter is a film series based on the
eponymous novels by British author J. K. Rowling. The series is
produced and distributed by Warner Bros. Pictures and consists of
eight fantasy films, beginning with Harry Potter and the
Philosopher's Stone (2001) and culminating with Harry Potter and
the Deathly Hallows – Part 2 (2011).A spin-off prequel series,
planned to consist of five films, started with Fantastic Beasts
and Where to Find Them (2016), marking the beginning of the
Wizarding World shared media franchise.<br/><b>Author: </b>J. K.
Rowling.</p> : null
}
</div>
);
}
export function Title2()
{
const[title,setTitle]=useState(false);
return(
<div>
<button onClick={()=>setTitle(!title)}>SpiderMan</button>
{
title ? <p>Spider-Man is a superhero appearing in
American comic books published by Marvel Comics. Created by
writer-editor Stan Lee and artist Steve Ditko, he first appeared
in the anthology comic book Amazing Fantasy (August 1962) in the
Silver Age of Comic Books. He has been featured in comic books,
television shows, films, video games, novels, and
plays.<br/><b>Author: </b>Stan Lee.</p> : null
}
</div>

);
}
export function Title3()
{
const[title,setTitle]=useState(false);
return(
<div>
<button onClick={()=>setTitle(!title)}>The Avengers</button>
{
title ? <p>Marvel's The Avengers(classified under the
name Marvel Avengers Assemble in the United Kingdom and
Ireland),or simply The Avengers, is a 2012 American superhero
film based on the Marvel Comics superhero team of the same name.
Produced by Marvel Studios and distributed by Walt Disney Studios
Motion Pictures,[a] it is the sixth film in the Marvel Cinematic
Universe (MCU). Written and directed by Joss Whedon, the film
features an ensemble cast including Robert Downey Jr., Chris
Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and
Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan
Skarsgard, and Samuel L. Jackson. In the film, Nick Fury and the
spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce
Banner, Thor, Natasha Romanoff, and Clint Barton to form a team
capable of stopping Thor's brother Loki from subjugating
Earth.<br/><b>Author: </b>Stan Lee.</p> : null
}
</div>
);
}
export function Title4()
{
const[title,setTitle]=useState(false);
return(
<div>
<button onClick={()=>setTitle(!title)}>Doraemon</button>
{
title ? <p>Doraemon (ドラえもん) is a Japanese manga
series written and illustrated by Fujiko F. Fujio. The manga was
first serialized in December 1969. Its chapters were collected in

45 tankōbon volumes published by Shogakukan from 1974 to 1996.
The story revolves around an earless robotic cat named Doraemon,
who travels back in time from the 22nd century to aid a boy named
Nobita Nobi.<br/><b>Author: </b>Fujiko F. Fujio.</p> : null
}
</div>
);
}
export function Title5()
{
const[title,setTitle]=useState(false);
return(
<div>
<button onClick={()=>setTitle(!title)}>Hello kitty</button>
{
title ? <p>Hello Kitty (Japanese: ハロー・キティ, Hepburn:
Harō Kiti),also known by her real name Kitty White (キティ・ホワイト
, Kiti Howaito),is a fictional character created by Yuko Shimizu,
currently designed by Yuko Yamaguchi, and owned by the Japanese
company Sanrio.Sanrio depicts Hello Kitty as an anthropomorphized
white cat with a red bow and no visible mouth.According to her
backstory, she lives in a London suburb with her family, and is
close to her twin sister Mimmy, who is depicted with a yellow
bow.<br/><b>Author: </b>Yuko Shimizu.</p> : null
}
</div>
);
}
export function Filter({arr1 , filterarr})
{
const a=arr1.filter(pros=>pros.title===filterarr);
const s=a.map(pro=><p>{pro.author}</p>)
return(
<>
<h2>Author name :</h2>
<ul>{s}</ul></>
);
}

export default function BlogPost(){
const arr=
[
{ title : "Harry Potter",
author:"J. K. Rowling"
},
{
title : "SpiderMan",
author:"Stan Lee"
},
{
title : "The Avengers",
author:"Stan Lee"
},
{
title : "Hello Kitty",
author:"Yuko Shimizu"
},
{
    title : "Doraemon",
    author:"Fujiko F. Fujio"
    },
]
const [change,setChange]=useState("");
return(
<>
<h1>Blog Title</h1>
<Title1/>
<Title2/>
<Title3/>
<Title4/>
<Title5/>
<label>
Title :
</label>
<input
value={change}
placeholder="Enter the title"
onChange={(e)=>setChange(e.target.value)} />
<h3>You can search author for the title </h3>
<Filter
arr1={arr}
filterarr={change}
/>
</>
);}