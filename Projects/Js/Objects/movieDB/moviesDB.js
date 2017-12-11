var movies = [
    {
    title:"In Bruges", 
    rating: 5, 
    hasWatched: true
},
    {
     title:"Frozen",
     rating: 4.5, 
     hasWatched: false
    },
    {
     title:"Mad Max Fury Road",
     rating: 3,
     hasWatched: true
    }
]

var len = movies.length;

for (var i = 0; i < len; i++) {
    if (movies[i].hasWatched === true) {
     console.log("You have watched " + movies[i].title + " - " + movies[i].rating);
    } else {
        console.log("You have no seen " + movies[i].title + " - " + movies[i].rating)
    }

}