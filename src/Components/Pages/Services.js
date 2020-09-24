import React from 'react';
import './Services.css';
import { Button } from 'react-bootstrap';

export default function Services() {

    return (
<React.Fragment>
<h1 className='text-center  text-danger text-capitalize my-5'> Welcome to our Adventures places </h1>
<div className="container">
<div className="row">
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card1.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Rome</h4>
<p class="card-text">      This was originally called the Flavian Amphitheatre and was mostly used as public entertainment arena.
The Colosseum is one of the most famous attractions in Rome and is where most gladiatorial fights took place.</p>
<Button variant="primary">View Packages</Button>
</div>
</div>
</div>
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card2.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Amsterdam</h4>
<p class="card-text">
The capital city of Netherlands probably has one of the most chilled out vibes across all cities of Europe.
If you're travelling to Amsterdam, rest assured, it's going to be one of your most wonderful experiences. </p>
<Button variant="primary">View Packages</Button>
</div>
</div></div>
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card3.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Indonesia</h4>
<p class="card-text">
Indonesia's most famous island, Bali is the best place for any tourist who needs a week of absolute relaxation,
scenic beauty,galore of culture and tradition and its own cultural roots, own cuisine,music, native art.

</p>
<Button variant="primary">View Packages</Button>
</div>
</div></div>
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card4.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Thailand</h4>
<p class="card-text">The largest Island in all of Thailand, Phuket has everything Thailand has to offer.
Serviced by the Phuket International Airport, the island sees no dearth of travellers during any time of the year. </p>
<Button variant="primary">View Packages</Button>
</div>
</div></div>
</div>

<div className="row">
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/PARIS.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Paris</h4>
<p class="card-text">       The mesmerizing wrought-iron spire of the Eiffel Tower piercing the skyline, the Arc de Triomphe guarding the most glamorous avenue,
the Champs Elysees, the regal Notre Dame cathedral, 
lamp lit bridges spanning the Seine and art nouveau cafes spilling onto wicker-chair-lined terraces.</p>
<Button variant="primary">View Packages</Button>
</div>
</div>
</div>
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card5.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Costa Rica</h4>
<p class="card-text">
Costa Rica, a Catholic country in Central America, shares its borders with Nicaragua and Panama. It has the Pacific Ocean 
to the west and Carribean Coast to the East. it is a secular country and respects all religions. </p>
<Button variant="primary">View Packages</Button>
</div>
</div></div>
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card6.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">London</h4>
<p class="card-text">
Standing on the Thames River, London is the capital of England as well as the most populous city in Great Britain. 
The city is a confluence of the old and the new and is one of the top tourist destinations in the world.
</p>
<Button variant="primary">View Packages</Button>
</div>
</div></div>
<div className="col-sm-3"><div class="card">
<img class="card-img-top" src='images/card7.jpg' alt=" " />
<div class="card-body">
<h4 class="card-title">Prague</h4>
<p class="card-text">Shrouded in mystery and bathed in history and rich culture, Prague is arguably one of the most beautiful capital cities in the world. 
This ever-growing cosmopolitan is home to a mix of both modern and ancient culture strewn together with romanticism </p>
<Button variant="primary">View Packages</Button>
</div>
</div></div>
</div>
</div>
</React.Fragment>
    );
}