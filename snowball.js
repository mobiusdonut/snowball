$(document).ready(function() {
  var slider = document.getElementById("myRange");

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    head.color = 'hsl(204, 76%, ' + (80 - this.value * 0.4) +'%)'
    back.color = 'hsl(211, 83%, ' + (80 - this.value * 0.44) +'%)'
    land1.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land11.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land2.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land3.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land13.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land4.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land14.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land.color = 'hsl(105, 55%, ' + (100 - this.value * 0.44) +'%)'
    land5.color = "hsl(146, 34%, " + (100 - this.value * 0.66) +'%)'
    land15.color = "hsl(146, 34%, " + (100 - this.value * 0.66) +'%)'
    land6.color = "hsl(146, 34%, " + (100 - this.value * 0.66) +'%)'
    land7.color = "hsl(146, 34%, " + (100 - this.value * 0.66) +'%)'
    land17.color = "hsl(146, 34%, " + (100 - this.value * 0.66) +'%)'
    if (this.value <= 25) {
      title.value = "Snowball"
    }
    else if (this.value <= 75) {
      title.value = "Slushball"
    }
    else if (this.value <= 100) {
      title.value = "Present"
    }
  }

  /*-- Made with Zdog --*/

  // setting up Zdog illustration element
  Zfont.init(Zdog);
  const illoElem = document.querySelector('.illo');
  const illoSize = 50;
  const minWindowSize = Math.min( window.innerWidth - 20, window.innerHeight - 60 );
  const zoom = Math.floor( (minWindowSize / illoSize) * 0.6 );
  illoElem.setAttribute( 'width', 450);
  illoElem.setAttribute( 'height', 450);

  // Zdog math variables
  const TAU = Zdog.TAU;

  // boolean flag for spin
  let isSpinning = true;

  // illustration base
  const illo = new Zdog.Illustration({
    element: illoElem,
    zoom: zoom,
    dragRotate: true,
    onDragStart: function() {
      isSpinning = false;
    },
    rotate: { y: TAU/4 }
  });

  // Set up a font to use
  const comfFont = new Zdog.Font({
    src: 'fonts/Comfortaa-Light.ttf'
  });

  // Create a text object
  // This is just a Zdog.Shape object with a couple of extra parameters!
  const title = new Zdog.Text({
    addTo: illo,
    font: comfFont,
    value: 'Present',
    fontSize: 8,
    textAlign: 'center',
    color: '#fff',
    translate: { x: 0, y: 25, z: 10 },
  });

  // frontside earth
  const head = new Zdog.Hemisphere({
    addTo: illo,
    diameter: 40,
    stroke: false,
    color: 'hsl(204, 76%, 40%)',
  });

  // backside earth
  const back = new Zdog.Hemisphere({
    addTo: head,
    diameter: 40,
    stroke: false,
    color: 'hsl(211, 83%, 36%)',
    rotate: { x: TAU/2 }
  });

  // light green lands
  const land1 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 17, y: 5, z: 4 },
    color: "hsl(105, 55%, 56%)",
    closed: false,
    fill: true,
    stroke: 7,
    addTo: head,
  });
  const land11 = land1.copy({
    scale: { x: -1 },
    translate: { x: -17, y: 0, z: 4 },
  })

  const land2 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -10, y: 0, z: 4 },
    ],
    translate: { x: 13, y: -10, z: 10 },
    color: "hsl(105, 55%, 56%)",
    closed: false,
    fill: true,
    stroke: 7,
    addTo: head,
  });

  const land = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: 5, y: 0, z: 4 },
    ],
    translate: { x: -13, y: -10, z: 10 },
    color: "hsl(105, 55%, 56%)",
    closed: false,
    fill: true,
    stroke: 7,
    addTo: head,
  });

  const land3 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 3 },
    ],
    translate: { x: 13, y: 13, z: 7 },
    color: "hsl(105, 55%, 56%)",
    closed: false,
    fill: true,
    stroke: 4,
    addTo: head,
  });
  const land13 = land3.copy({
    scale: { x: -1 },
    translate: { x: -13, y: 13, z: 7 },
  })

  const land4 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -7, y: 0, z: 3 },
    ],
    translate: { x: 10, y: -3, z: 16 },
    color: "hsl(105, 55%, 56%)",
    closed: false,
    fill: true,
    stroke: 4,
    addTo: head,
  });
  const land14 = land4.copy({
    scale: { x: -1 },
    translate: { x: -10, y: 3, z: 16 },
  })

  // light clouds
  const cloud1 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 20, y: 7, z: 4 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 5,
    addTo: head,
  });

  new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: 3, y: 0, z: 1 },
    ],
    translate: { x: -5, y: 7, z: 20 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 5,
    addTo: head,
  });

  const cloud2 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -5, y: 0, z: 10 },
    ],
    translate: { x: 23, y: 2, z: 4 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 4,
    addTo: head,
  });
  cloud2.copy({
    scale: { x: -1 },
    translate: { x: -23, y: 2, z: 4 },
  })

  const cloud3 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 20, y: -2, z: 7 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 2,
    addTo: head,
  });
  cloud3.copy({
    scale: { x: -1 },
    translate: { x: -20, y: -2, z: 7 },
  })

  const cloud4 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -2, y: 0, z: 5 },
    ],
    translate: { x: 18, y: -10, z: 7 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 3,
    addTo: head,
  });
  cloud4.copy({
    scale: { x: -1 },
    translate: { x: -18, y: -10, z: 7 },
  })

  // dark clouds
  const cloud5 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: 0, y: 0, z: -3 },
    ],
    translate: { x: 20, y: -8, z: -3 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 3,
    addTo: head,
  });
  cloud5.copy({
    scale: { x: -1 },
    translate: { x: -20, y: -8, z: -3 },
  })

  const cloud6 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -4, y: 0, z: -7 },
    ],
    translate: { x: 20, y: 0, z: -8 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 6,
    addTo: head,
  });
  cloud6.copy({
    scale: { x: -1 },
    translate: { x: -20, y: 0, z: -8 },
  })

  const cloud7 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z:  0 },
      { x: -3, y: 0, z: -3 },
    ],
    translate: { x: 15, y: 15, z: -8 },
    color: "#fff",
    closed: false,
    fill: true,
    stroke: 3,
    addTo: head,
  });
  cloud7.copy({
    scale: { x: -1 },
    translate: { x: -15, y: 15, z: -8 },
  })

  new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: -5, y:  0, z: 0 },
    ],
    translate: { x: -5, y: -4, z: -18 },
    color: "#fff",
    fill: true,
    stroke: 8,
    addTo: head,
  });

  // dark green lands
  const land5 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: 2.5, y:  0, z: 2 },
    ],
    translate: { x: 7, y: 7, z: -16 },
    color: "hsl(146, 34%, 43%)",
    fill: true,
    stroke: 4,
    addTo: head,
  });
  const land15 = land5.copy({
    scale: { x: -1 },
    translate: { x: -7, y: 12, z: -16 },
  })

  const land6 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: 10, y:  0, z: 9 },
    ],
    translate: { x: 5, y: -2, z: -17 },
    color: "hsl(146, 34%, 43%)",
    fill: true,
    stroke: 8,
    addTo: head,
  });

  const land7 = new Zdog.Shape({
    path: [
      { x: 0, y:  0, z: 0 },
      { x: 2.5, y:  0, z: 5 },
    ],
    translate: { x: 13, y: -10, z: -10 },
    color: "hsl(146, 34%, 43%)",
    fill: true,
    stroke: 4,
    addTo: head,
  });
  const land17 = land5.copy({
    scale: { x: -1 },
    translate: { x: -13, y: -10, z: -10 },
    stroke: 5,
  })


  // spinning animation
  function animate() {
    illo.rotate.y += isSpinning ? -0.01 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }

  animate();

  // reset animation
  document.querySelector('.reset-button').onclick = function() {
    isSpinning = false;
    illo.rotate.set({
      y: TAU/4,
    });

    setTimeout(() => {
      isSpinning = true;
    }, 2000);
  };

  var current_modal = 0;

  htmlist = [
    `<h2 id=\"infotexthead\">What is the Snowball Earth Hypothesis?</h2>
    <img src=\"img/1snearth.png\" style=\"max-width:450px;\"></img>
    <p id=\"infotext\">The Snowball Earth hypothesis proposes that during one or more of Earth's icehouse climates, <strong>Earth's surface became entirely or nearly entirely frozen</strong>, sometime earlier than 650 Mya during the Cryogenian period.</p>`,
    `<h2 id=\"infotexthead\">Causes</h2>
    <p id=\"infotext\">Directly before Snowball Earth, the supercontinent Rodinia was in the process of breaking up. A supercontinent is a state in which all of the continents are clustered together in one group. The breakup of a supercontinent would increase rainfall in the continental areas, and that would increase the <strong>weathering of crustal rocks</strong>. The weathering of rocks actually consumes carbon dioxide, so that would lead to <strong>less carbon dioxide in the atmosphere</strong> and therefore a <strong>colder climate</strong>.</p>
    <p id=\"infotext\">The more immediate trigger may be a sequence of very large volcanic eruptions that occurred in what is now the high arctic of Canada around 717 million and 719 million years ago. Lava heating the atmosphere can cause <strong?thermal upwelling in the atmosphere</strong> which can loft <strong>sulfur aerosols</strong> into the stratosphere where they hang around for a significant amount of time, <strong>reflecting incoming solar radiation</strong> and have a <strong>strong cooling effect</strong>. The coincidence in timing between these eruptions and the onset of the first and longer of the two Snowball Earths has led to postulations that they may have been the immediate trigger.</p>`,
    `<h2 id=\"infotexthead\">Evidence</h2>
    <ul>
    <li id=\"infotext\">Measurement of old rocks that preserved signs of Earth’s ancient magnetic field indicate that <strong>rocks known to be associated with the presence of ice were formed near the Equator</strong>.</li>
    <li id=\"infotext\">A 45-meter thick layer of manganese ore in the Kalahari Desert with an age corresponding to the end of the 2.4 billion-year “Snowball Earth” period  is thought to have been deposited by <strong>rapid and massive changes in global climate</strong> as the worldwide covering of ice melted.</li>
    <li id=\"infotext\">By studying chromium, which exists in different states depending on the amount of oxygen in the air, one can estimate oxygen levels. Until 800 million years ago, <strong>atmospheric oxygen levels were just one-hundredth of today's levels</strong>.</li>
    <li id=\"infotext\">There is evidence of ancient <strong>glacial activity in the rocks</strong> that are spread in limestone, which usually forms in the <strong>warmest parts of the ocean.</strong>.</li>
    <li id=\"infotext\">Structures exist that are related to <strong>potential impacts on stone</strong>, as if it was somehow dropped and then plunked into the underlying sediment. It is unknown what transported this debris, other than <strong>floating ice</strong> which transports it out to the sea.</li>
    <ul>`,
    `<h2 id=\"infotexthead\">Missing Evidence</h2>
    <ul>
    <li id=\"infotext\">Simulations of the Cryogenian period indicate that the Earth's <strong>global mean temperature</strong> could have gone 12 degrees Celsius below freezing with half of the oceans would remaining ice-free, suggesting that the Earth would have resisted mass glaciation.</li>
    <li id=\"infotext\">The <strong>thawing</strong> of Snowball Earth is still unexplained, with one theory suggesting that global warming occurred after the release of greenhouse gases from immense volcanic eruptions, with the amount of carbon dioxide rising to levels hundreds of times greater than present in the atmosphere today.</li>
    <li id=\"infotext\">It must also be demonstrated that <strong>glaciers were active at different global locations at the same time</strong>, and that no other deposits of the same age exist.</li>
    <li id=\"infotext\">The existence of a bed containing sedimentary structures that could have been created <strong>only by glacial activity and deposited in the tropics</strong> would confirm the theory.</li>
    <ul>
    <h2 id=\"infotexthead\">Holes in the Theory</h2>
    <ul>
    <li id=\"infotext\">A mass glaciation would have been accompanied by a mass extinction, but the fossil record <strong>only shows evidence of smaller extinctions</strong>.</li>
    <li id=\"infotext\">There is evidence for the <strong>existence of a water cycle</strong> during the Cryogenian period. Earth being covered with ice would result in a dry atmosphere, and a lack of precipitation, which drives the water cycle.</li>
    <li id=\"infotext\">In the <strong>High-obliquity hypothesis</strong>, Earth’s tilt caused the poles to be warmer than the equator while maintaining a fully functional water cycle and open oceans.</li>
    <ul>
    <h2 id=\"infotexthead\">Competing Theories</h2>
    <ul>
    <li id=\"infotext\">In the <strong>Slushball Theory</strong>, there was water near the equator but most of Earth was covered by ice.</li>
    <li id=\"infotext\">In the <strong>Zipper Rift Theory</strong>, the breakup of supercontinents resulted in regional glaciation.</li>
    <li id=\"infotext\">In the <strong>High-obliquity hypothesis</strong>, Earth’s tilt caused the poles to be warmer than the equator while maintaining a fully functional water cycle and open oceans.</li>
    <ul>`,
    `<h2 id=\"infotexthead\">Climate Change</h2>
    <!-- Slideshow container -->
    <div class="slideshow-container">
      <div class="slideshow-align">
      <!-- Full-width images with number and caption text -->
       <div class="mySlides fade" style="display:inline;">
         <div class="numbertext">1 / 4</div>
         <img src="img/2canyonmorph1.png" style="max-height:400px">
         <div class="text"><strong>Grinnell Glacier (1938)</strong></div>
       </div>

       <div class="mySlides fade">
         <div class="numbertext">2 / 4</div>
         <img src="img/2canyonmorph2.png" style="max-height:400px">
         <div class="text"><strong>Grinnell Glacier (1981)</strong></div>
       </div>

       <div class="mySlides fade">
         <div class="numbertext">3 / 4</div>
         <img src="img/2canyonmorph3.png" style="max-height:400px">
         <div class="text"><strong>Grinnell Glacier (1998)</strong></div>
       </div>

       <div class="mySlides fade">
         <div class="numbertext">4 / 4</div>
         <img src="img/2canyonmorph4.png" style="max-height:400px">
         <div class="text"><strong>Grinnell Glacier (2006)</strong></div>
       </div>

       <!-- Next and previous buttons -->
       </div>
    </div>
    <br>

    <!-- The dots/circles -->
    <div style="text-align:center">
     <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
     <span class="dot active" onclick="currentSlide(1)"></span>
     <span class="dot" onclick="currentSlide(2)"></span>
     <span class="dot" onclick="currentSlide(3)"></span>
     <span class="dot" onclick="currentSlide(4)"></span>
     <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <p id=\"infotext\">Climate change is similar to the phenomenon that likely ended Snowball Earth, with both situations involving <strong>high levels of atmospheric carbon dioxide</strong> trapping heat inside Earth’s atmosphere, creating a greenhouse gas warming effect. While the thawing of Snowball Earth triggered an <strong>explosion in animal populations</strong>, a mass melting of glaciers today would result in <strong>habitat loss</strong> in coastal areas and polar regions.</p>
    `
  ]

  var leftbtn = document.getElementById("leftbtn");
  leftbtn.onclick = function() {
    if (current_modal > 0) {
      current_modal -= 1;
      document.getElementById("textcontain").innerHTML = htmlist[current_modal];
    }
  };

  var rightbtn = document.getElementById("rightbtn");
  rightbtn.onclick = function() {
    if (current_modal < htmlist.length - 1) {
      current_modal += 1;
      document.getElementById("textcontain").innerHTML = htmlist[current_modal];
    }
  };
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
}
