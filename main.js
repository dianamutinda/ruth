export function sciences(marks) {
    if (marks >= 70 && marks <= 100) {
      return "A";
    } else if (marks >= 60 && marks <= 69) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "Pass";
    } else {
      return "Sup";
    }
  }
  
  export function humanities(marks) {
    if (marks >= 80 && marks <= 100) {
      return "A";
    } else if (marks >= 70 && marks <= 79) {
      return "B";
    } else if (marks >= 60 && marks <= 69) {
      return "C";
    } else if (marks >= 50 && marks <= 59) {
      return "Pass";
    } else {
      return "Sup";
    }
  }
  
  export function languages(marks) {
    if (marks >= 75 && marks <= 100) {
      return "A";
    } else if (marks >= 65 && marks <= 74) {
      return "B";
    } else if (marks >= 55 && marks <= 64) {
      return "C";
    } else if (marks >= 45 && marks <= 54) {
      return "Pass";
    } else {
      return "Sup";
    }
  }
  
  
  export function calculateGradesAndAverage(student) {
    const averagePoints = Math.floor(
      (student.math +
        student.eng +
        student.kis +
        student.phy +
        student.che +
        student.re +
        student.comp) /
        7,
    );
  
    return {
      name: student.name,
      math: sciences(student.math),
      eng: languages(student.eng),
      kis: languages(student.kis),
      phy: sciences(student.phy),
      che: sciences(student.che),
      re: humanities(student.re),
      comp: languages(student.comp),
      average: averagePoints,
    };
  }
  