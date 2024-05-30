import {
    sciences,
    humanities,
    languages,
    calculateGradesAndAverage,
  } from "./main.js";
  
  describe("science", () => {
    test("marks between 70 and 100 grade equal A", () => {
      expect(sciences(89)).toBe("A");
    });
    test("marks between 60 and 69 grade equal B", () => {
      expect(sciences(67)).toBe("B");
    });
    test("marks between 50 and 59 grade equal C", () => {
      expect(sciences(50)).toBe("C");
    });
    test("marks between 40 and 49 grade equal Pass", () => {
      expect(sciences(46)).toBe("Pass");
    });
    test("marks below 40 grade equal Sup", () => {
      expect(sciences(26)).toBe("Sup");
    });
  });
  
  describe("humanities", () => {
    test("marks between 80 and 100 grade equal A", () => {
      expect(humanities(83)).toBe("A");
    });
    test("marks between 70 and 79 grade equal B", () => {
      expect(humanities(77)).toBe("B");
    });
    test("marks between 60 and 69 grade equal C", () => {
      expect(humanities(66)).toBe("C");
    });
    test("marks between 50 and 59 grade equal Pass", () => {
      expect(humanities(57)).toBe("Pass");
    });
    test("marks below 50 grade equal Sup", () => {
      expect(humanities(40)).toBe("Sup");
    });
  });
  
  describe("languages", () => {
    test("marks between 75 and 100 grade equal A", () => {
      expect(languages(92)).toBe("A");
    });
    test("marks between 65 and 74 grade equal B", () => {
      expect(languages(73)).toBe("B");
    });
    test("marks between 55 and 64 grade equal C", () => {
      expect(languages(59)).toBe("C");
    });
    test("marks between 45 and 54 grade equal Pass", () => {
      expect(languages(51)).toBe("Pass");
    });
    test("marks below 45 grade equal Sup", () => {
      expect(languages(42)).toBe("Sup");
    });
  });
  
  
  describe("calculateGradesAndAverage", () => {
    test("display student name and grades", () => {
      expect(
        calculateGradesAndAverage({
          name: "Dennis Doe",
          math: 80,
          eng: 65,
          kis: 48,
          phy: 67,
          che: 56,
          re: 89,
          comp: 82,
        })
      ).toEqual({
        name: "Dennis Doe",
        math: "A",
        eng: "B",
        kis: "Pass",
        phy: "B",
        che: "C",
        re: "A",
        comp: "A",
        average: 69
      });
    });
  });
  