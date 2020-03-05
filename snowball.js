$(document).ready(function() {
  var slider = document.getElementById("myRange");

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    head.color = 'hsl(204, 76%, ' + (40 + this.value * 0.4) +'%)'
    back.color = 'hsl(211, 83%, ' + (36 + this.value * 0.44) +'%)'
    land1.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land11.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land2.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land3.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land13.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land4.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land14.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land.color = 'hsl(105, 55%, ' + (56 + this.value * 0.44) +'%)'
    land5.color = "hsl(146, 34%, " + (34 + this.value * 0.66) +'%)'
    land15.color = "hsl(146, 34%, " + (34 + this.value * 0.66) +'%)'
    land6.color = "hsl(146, 34%, " + (34 + this.value * 0.66) +'%)'
    land7.color = "hsl(146, 34%, " + (34 + this.value * 0.66) +'%)'
    land17.color = "hsl(146, 34%, " + (34 + this.value * 0.66) +'%)'
  }

  /*-- Made with Zdog --*/

  // setting up Zdog illustration element
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

  headinglist = [
    "What is the Snowball Earth Hypothesis?",
    "Causes"
  ];
  infolist = [
    "The Snowball Earth hypothesis proposes that during one or more of Earth's icehouse climates, Earth's surface became entirely or nearly entirely frozen, sometime earlier than 650 Mya during the Cryogenian period.",
    "It was probably caused by rapid weathering of Earth's continents, which sucked carbon dioxide – a planet-warming greenhouse gas – out of the atmosphere and caused temperatures to plummet."
  ];

  var leftbtn = document.getElementById("leftbtn");
  leftbtn.onclick = function() {
    if (current_modal > 0) {
      current_modal -= 1;
      document.getElementById("infotexthead").innerHTML = headinglist[current_modal];
      document.getElementById("infotext").innerHTML = infolist[current_modal];
    }
  };

  var rightbtn = document.getElementById("rightbtn");
  rightbtn.onclick = function() {
    if (current_modal < headinglist.length) {
      current_modal += 1;
      document.getElementById("infotexthead").innerHTML = headinglist[current_modal];
      document.getElementById("infotext").innerHTML = infolist[current_modal];
    }
  };
});