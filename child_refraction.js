function check() {
  var age = document.quiz.age.value;
  var RBCVA = document.quiz.RBCVA.value;
  var LBCVA = document.quiz.LBCVA.value;
  var squint = document.quiz.squint.value;
  var REcylinder = document.quiz.REcylinder.value;
  var REspherical = document.quiz.REspherical.value;
  var LEcylinder = document.quiz.LEcylinder.value;
  var LEspherical = document.quiz.LEspherical.value;
  var astigmatism = REcylinder - LEcylinder;
  var anisoastigmatism = astigmatism >= 1.5 || astigmatism <= -1.5;
  var spherical = REspherical - LEspherical;
  var anisometropia = spherical >= 2 || spherical <= -2;

  var msg_squint = ["", "Hyperopia with esotropia"];
  var msg_anisometropia = ["", "Full cylinder correction needed"];
  var messages_amblyopia = [
    "No amblyopia",
    "Possible right eye amblyopia",
    "Possible left eye amblyopia",
    "Possible both eye amblyopia",
  ];

  var persciption = [
    " Spherical correction not needed unless there is presence of amblyopia",
    "Full spherical correction needed",
    "Partial spherical correction needed (under correct by +1.50/+2.00) unless presence of amblyopia then full correction needed.",
    "Partial spherical correction needed (under correct by +1.00 ) unless presence of amblyopia then full correction needed.",
    "",
  ];
  var outcome = [
    "",
    "Both eye myopia",
    "Both eye hyperopia",
    "",
    "Both eye emmetropia",
    "Right eye myopia, left eye emmetropia",
    "Right eye hyperopia, left eye emmetropia",
    "Left eye myopia, right eye emmetropia",
    "Left eye hyperopia, right eye emmetropia",
  ];

  var msg_astigmatism = [
    "",
    "Aniso-astigmatism (>1.5D)",
    "Astigmatism same or more than 3D in 1-3 yo",
    "Astigmatism same or more than 2D in 4-5 yo",
    "Astigmatism same or more than 1D in child same more than 6 yo",
  ];

  var reason = [
    "",
    " Myopia same or more than -3D in 1-3 yo",
    " Hyperopia same or more than +4D in 1-3 yo",
    " Hyperopia with anisometropia more than 2D",
    " Hyperopia with esotropia",
    " Myopia same or more than -2D in 4-5 yo",
    " Hyperopia same or more than +3D in 4-5 yo",
    " Myopia same or more than -1D in 5-7 yo",
    " Hyperopia same or more than +2.5D in 6-7 yo",
    " Myopia or hyperopia in 7 yo and above",
    " Myopia same or more than -5D in infant less than 1 yo",
  ];

  var score_amblyopia;
  var score_reason;

  var score_persciption;
  var score_outcome;
  var score_astigmatism;
  var score_anisometropia;
  var score_squint;

  //for BCVA
  if (age < 2) {
    if (RBCVA > 18 && LBCVA <= 18) {
      score_amblyopia = 1;
    }
    if (LBCVA > 18 && RBCVA <= 18) {
      score_amblyopia = 2;
    }
    if (LBCVA > 18 && RBCVA > 18) {
      score_amblyopia = 3;
    }
    if (LBCVA <= 18 && RBCVA <= 18) {
      score_amblyopia = 0;
    }
  }





  if (age == 2) {
    if (RBCVA > 12 && LBCVA <= 12) {
      score_amblyopia = 1;
    }
    if (LBCVA > 12 && RBCVA <= 12) {
      score_amblyopia = 2;
    }
    if (LBCVA > 12 && RBCVA > 12) {
      score_amblyopia = 3;
    }
    if (LBCVA <= 12 && RBCVA <= 12) {
      score_amblyopia = 0;
    }
  }

  if (age >= 3) {
    if (RBCVA > 9 && LBCVA <= 9) {
      score_amblyopia = 1;
    }
    if (LBCVA > 9 && RBCVA <= 9) {
      score_amblyopia = 2;
    }
    if (LBCVA > 9 && RBCVA > 9) {
      score_amblyopia = 3;
    }
    if (LBCVA <= 9 && RBCVA <= 9) {
      score_amblyopia = 0;
    }
  }





  if (age < 1) {
    if (REspherical <= -5 && LEspherical <= -5) {
      (score_persciption = 1),
        (score_outcome = 1),
        (score_squint = 0),
        (score_astigmatism = 4),
        (score_reason = 10);
    }
    if (
      REspherical > -5 &&
      REspherical < 0 &&
      LEspherical > -5 &&
      LEspherical < 0
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 1),
        (score_squint = 0);
    }
    if (REspherical > 0 && LEspherical > 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 2),
        (score_squint = 0);
    }
    if (REspherical == 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 4),
        (score_squint = 0);
    }
    if (REspherical > 0 || (LEspherical > 0 && squint == "yes")) {
      (score_persciption = 4),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 1);
    }
  }

  if (age >= 1 && age <= 3) {
    if (REspherical <= -3 && LEspherical <= -3) {
      (score_persciption = 1),
        (score_reason = 1),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (REspherical <= -3 && LEspherical > -3 && LEspherical < 0) {
      (score_persciption = 1),
        (score_reason = 1),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (LEspherical <= -3 && REspherical > -3 && REspherical < 0) {
      (score_persciption = 1),
        (score_reason = 1),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (
      REspherical < 0 &&
      REspherical > -3 &&
      LEspherical < 0 &&
      LEspherical > -3
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (REspherical == 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 4),
        (score_squint = 0);
    }

    if (
      REspherical > 0 &&
      LEspherical > 0 &&
      REspherical < 4 &&
      LEspherical < 4
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 2),
        (score_squint = 0);
    }

    if (LEspherical > 0 && anisometropia) {
      (score_persciption = 1),
        (score_reason = 3),
        (score_outcome = 3),
        (score_squint = 0);
    }

    if (REspherical > 0 && anisometropia) {
      (score_persciption = 1),
        (score_reason = 3),
        (score_outcome = 3),
        (score_squint = 0);
    }

    if (REspherical >= 4 && LEspherical > 0 && !anisometropia) {
      (score_persciption = 2),
        (score_reason = 2),
        (score_outcome = 2),
        (score_squint = 0);
    }

    if (LEspherical >= 4 && REspherical > 0 && !anisometropia) {
      (score_persciption = 2),
        (score_reason = 2),
        (score_outcome = 2),
        (score_squint = 0);
    }

    if (LEspherical >= 4 && REspherical == 0 && !anisometropia) {
      (score_persciption = 2),
        (score_reason = 2),
        (score_outcome = 8),
        (score_squint = 0);
    }

    if (
      LEspherical < 4 &&
      LEspherical > 0 &&
      REspherical == 0 &&
      !anisometropia
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 8),
        (score_squint = 0);
    }

    if (REspherical >= 4 && LEspherical == 0 && !anisometropia) {
      (score_persciption = 2),
        (score_reason = 2),
        (score_outcome = 6),
        (score_squint = 0);
    }

    if (
      REspherical < 4 &&
      REspherical > 0 &&
      LEspherical == 0 &&
      !anisometropia
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 6),
        (score_squint = 0);
    }

    if (LEspherical <= -3 && REspherical == 0) {
      (score_persciption = 1),
        (score_reason = 1),
        (score_outcome = 7),
        (score_squint = 0);
    }

    if (LEspherical > -3 && LEspherical < 0 && REspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 0);
    }

    if (REspherical <= -3 && LEspherical == 0) {
      (score_persciption = 1),
        (score_reason = 1),
        (score_outcome = 5),
        (score_squint = 0);
    }

    if (REspherical > -3 && REspherical < 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 0);
    }

    if (REspherical >= 0 && LEspherical >= 0 && squint == "yes") {
      (score_persciption = 1),
        (score_reason = 0),
        (score_outcome = 0),
        (score_squint = 1);
    }

    if (astigmatism >= 1.5 || astigmatism <= -1.5) {
      (score_astigmatism = 1), (score_anisometropia = 1);
    }

    if (REcylinder >= 3 && LEcylinder >= 0 && !anisoastigmatism) {
      (score_astigmatism = 2), (score_anisometropia = 1);
    }

    if (REcylinder >= 0 && LEcylinder >= 3 && !anisoastigmatism) {
      (score_astigmatism = 2), (score_anisometropia = 1);
    }

    if (REcylinder <= -3 && LEcylinder <= 0 && !anisoastigmatism) {
      (score_astigmatism = 2), (score_anisometropia = 1);
    }

    if (REcylinder <= 0 && LEcylinder <= -3 && !anisoastigmatism) {
      (score_astigmatism = 2), (score_anisometropia = 1);
    }

    if (
      REcylinder > -3 &&
      REcylinder < 3 &&
      REcylinder > -3 &&
      REcylinder < 3 &&
      !anisoastigmatism
    ) {
      (score_astigmatism = 0), (score_anisometropia = 0);
    }
  }

  if (age > 3 && age <= 5) {
    if (REspherical <= -2 && LEspherical <= -2) {
      (score_persciption = 1),
        (score_reason = 5),
        (score_outcome = 1),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical <= -2 && LEspherical > -2 && LEspherical < 0) {
      (score_persciption = 1),
        (score_reason = 5),
        (score_outcome = 1),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (LEspherical <= -2 && REspherical > -2 && REspherical < 0) {
      (score_persciption = 1),
        (score_reason = 5),
        (score_outcome = 1),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (
      REspherical < 0 &&
      REspherical > -2 &&
      LEspherical < 0 &&
      LEspherical > -2
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 1),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical == 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 4),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (
      REspherical > 0 &&
      LEspherical > 0 &&
      REspherical < 3 &&
      LEspherical < 3
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 2),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (LEspherical > 0 && anisometropia) {
      (score_persciption = 1),
        (score_reason = 3),
        (score_outcome = 3),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical > 0 && anisometropia) {
      (score_persciption = 1),
        (score_reason = 3),
        (score_outcome = 3),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical >= 3 && LEspherical > 0 && !anisometropia) {
      (score_persciption = 3),
        (score_reason = 6),
        (score_outcome = 2),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (LEspherical >= 3 && REspherical > 0 && !anisometropia) {
      (score_persciption = 3),
        (score_reason = 6),
        (score_outcome = 2),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (LEspherical >= 3 && REspherical == 0 && !anisometropia) {
      (score_persciption = 3),
        (score_reason = 6),
        (score_outcome = 8),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (
      LEspherical < 3 &&
      LEspherical > 0 &&
      REspherical == 0 &&
      !anisometropia
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 8),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical >= 3 && LEspherical == 0 && !anisometropia) {
      (score_persciption = 3),
        (score_reason = 6),
        (score_outcome = 6),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (
      REspherical < 3 &&
      REspherical > 0 &&
      LEspherical == 0 &&
      !anisometropia
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 6),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (LEspherical <= -2 && REspherical == 0) {
      (score_persciption = 1),
        (score_reason = 5),
        (score_outcome = 7),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (LEspherical > -2 && LEspherical < 0 && REspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical <= -2 && LEspherical == 0) {
      (score_persciption = 1),
        (score_reason = 5),
        (score_outcome = 5),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical > -2 && REspherical < 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 0),
        (score_astigmatism = 0);
    }

    if (REspherical > 0 && LEspherical > 0 && squint == "yes") {
      (score_persciption = 1),
        (score_reason = 0),
        (score_outcome = 0),
        (score_squint = 1),
        (score_astigmatism = 0);
    }

    if (astigmatism >= 1.5 || astigmatism <= -1.5) {
      (score_astigmatism = 1), (score_anisometropia = 1);
    }

    if (REcylinder >= 2 && LEcylinder >= 0 && !anisoastigmatism) {
      (score_astigmatism = 3), (score_anisometropia = 1);
    }

    if (REcylinder >= 0 && LEcylinder >= 2 && !anisoastigmatism) {
      (score_astigmatism = 3), (score_anisometropia = 1);
    }

    if (REcylinder <= -2 && LEcylinder <= 0 && !anisoastigmatism) {
      (score_astigmatism = 3), (score_anisometropia = 1);
    }

    if (REcylinder <= 0 && LEcylinder <= -2 && !anisoastigmatism) {
      (score_astigmatism = 3), (score_anisometropia = 1);
    }

    if (
      REcylinder > -2 &&
      REcylinder < 2 &&
      REcylinder > -2 &&
      REcylinder < 2 &&
      !anisoastigmatism
    ) {
      (score_astigmatism = 0), (score_anisometropia = 0);
    }
  }







  if (age > 5 && age <= 7) {
    if (REspherical <= -1 && LEspherical <= -1) {
      (score_persciption = 1),
        (score_reason = 7),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (REspherical <= -1 && LEspherical > -1 && LEspherical < 0) {
      (score_persciption = 1),
        (score_reason = 7),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (LEspherical <= -1 && REspherical > -1 && REspherical < 0) {
      (score_persciption = 1),
        (score_reason = 7),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (
      REspherical < 0 &&
      REspherical > -1 &&
      LEspherical < 0 &&
      LEspherical > -1
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 1),
        (score_squint = 0);
    }

    if (REspherical == 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 4),
        (score_squint = 0);
    }

    if (
      REspherical > 0 &&
      LEspherical > 0 &&
      REspherical < 2.5 &&
      LEspherical < 2.5
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 2),
        (score_squint = 0);
    }

    if (LEspherical > 0 && anisometropia) {
      (score_persciption = 1),
        (score_reason = 3),
        (score_outcome = 3),
        (score_squint = 0);
    }

    if (REspherical > 0 && anisometropia) {
      (score_persciption = 1),
        (score_reason = 3),
        (score_outcome = 3),
        (score_squint = 0);
    }

    if (REspherical >= 2.5 && LEspherical > 0 && !anisometropia) {
      (score_persciption = 1),
        (score_reason = 8),
        (score_outcome = 2),
        (score_squint = 0),
        (score_astigmatism = 4);
    }

    if (LEspherical >= 2.5 && REspherical > 0 && !anisometropia) {
      (score_persciption = 1),
        (score_reason = 8),
        (score_outcome = 2),
        (score_squint = 0);
    }

    if (LEspherical >= 2.5 && REspherical == 0 && !anisometropia) {
      (score_persciption = 1),
        (score_reason = 8),
        (score_outcome = 8),
        (score_squint = 0);
    }

    if (
      LEspherical < 2.5 &&
      LEspherical > 0 &&
      REspherical == 0 &&
      !anisometropia
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 8),
        (score_squint = 0);
    }

    if (REspherical >= 2.5 && LEspherical == 0 && !anisometropia) {
      (score_persciption = 1),
        (score_reason = 8),
        (score_outcome = 6),
        (score_squint = 0);
    }

    if (
      REspherical < 2.5 &&
      REspherical > 0 &&
      LEspherical == 0 &&
      !anisometropia
    ) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 6),
        (score_squint = 0);
    }

    if (LEspherical <= -1 && REspherical == 0) {
      (score_persciption = 1),
        (score_reason = 7),
        (score_outcome = 7),
        (score_squint = 0);
    }

    if (LEspherical > -1 && LEspherical < 0 && REspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 0);
    }

    if (REspherical <= -1 && LEspherical == 0) {
      (score_persciption = 1),
        (score_reason = 7),
        (score_outcome = 5),
        (score_squint = 0);
    }

    if (REspherical > -1 && REspherical < 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 7),
        (score_squint = 0);
    }

    if (REspherical > 0 && LEspherical > 0 && squint == "yes") {
      (score_persciption = 1),
        (score_reason = 0),
        (score_outcome = 0),
        (score_squint = 1),
        (score_astigmatism = 0);
    }

    if (astigmatism >= 1.5 || astigmatism <= -1.5) {
      (score_astigmatism = 1), (score_anisometropia = 1);
    }

    if (REcylinder >= 1 && LEcylinder >= 0 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (REcylinder >= 0 && LEcylinder >= 1 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (REcylinder <= -1 && LEcylinder <= 0 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (REcylinder <= 0 && LEcylinder <= -1 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (
      REcylinder > -1 &&
      REcylinder < 1 &&
      REcylinder > -1 &&
      REcylinder < 1 &&
      !anisoastigmatism
    ) {
      (score_astigmatism = 0), (score_anisometropia = 0);
    }
  }





  
  if (age > 7) {
    if (REspherical != 0 && LEspherical != 0) {
      (score_persciption = 1),
        (score_reason = 9),
        (score_outcome = 0),
        (score_squint = 0);
    }

    if (REspherical > 0 && LEspherical > 0 && squint == "yes") {
      (score_persciption = 1),
        (score_reason = 0),
        (score_outcome = 3),
        (score_squint = 1),
        (score_astigmatism = 4);
    }

    if (REspherical == 0 && LEspherical == 0) {
      (score_persciption = 0),
        (score_reason = 0),
        (score_outcome = 4),
        (score_squint = 0);
    }

    if (astigmatism >= 1.5 || astigmatism <= -1.5) {
      (score_astigmatism = 1), (score_anisometropia = 1);
    }

    if (REcylinder >= 1 && LEcylinder >= 0 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (REcylinder >= 0 && LEcylinder >= 1 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (REcylinder <= -1 && LEcylinder <= 0 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (REcylinder <= 0 && LEcylinder <= -1 && !anisoastigmatism) {
      (score_astigmatism = 4), (score_anisometropia = 1);
    }

    if (
      REcylinder > -1 &&
      REcylinder < 1 &&
      REcylinder > -1 &&
      REcylinder < 1 &&
      !anisoastigmatism
    ) {
      (score_astigmatism = 0), (score_anisometropia = 0);
    }
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("after_submit_invisible").style.visibility = "hidden";
  document.getElementById("message_result").innerHTML =messages_amblyopia[score_amblyopia];
  document.getElementById("message_persrciption").innerHTML = persciption[score_persciption];
  document.getElementById("message_outcome").innerHTML = outcome[score_outcome];
  document.getElementById("message_squint").innerHTML =msg_squint[score_squint];
  document.getElementById("message_astigmatism").innerHTML = msg_astigmatism[score_astigmatism];
  document.getElementById("message_reason").innerHTML = reason[score_reason];
  document.getElementById("message_anisometropia").innerHTML =msg_anisometropia[score_anisometropia];
}
