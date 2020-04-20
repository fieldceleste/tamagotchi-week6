import { Tamagotchi } from './../src/Tamagotchi.js'

describe("Tama", () => {
  jest.useFakeTimers();
  let tama;

  beforeEach(function () {
    tama = new Tamagotchi('Tama');
    tama.setHunger();
    tama.setSleep();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

test('should have a name and food level of 10 when created' , () => {
  expect(tama.name).toEqual("Tama");
  expect(tama.foodLevel).toEqual(10);
});

test('should have a food level of 7 after 3001 milliseconds', () => {
  jest.advanceTimersByTime(3000); 
  expect(tama.foodLevel).toEqual(7);
});

test('should be hungry if the food level drops below zero', function(){
  tama.foodLevel = 0;
  expect(tama.areYouStarving()).toEqual(true);
});
test("should get very hungry if 9 seconds pass without food " , () => {
  jest.advanceTimersByTime(90001);
  expect(tama.areYouStarving()).toEqual(true);
});
test ("should have food level of 10 when fed" , () => {
  jest.advanceTimersByTime(8001);
  tama.feed();
  expect(tama.foodLevel).toEqual(10);
});

test ("timer should wait for 2 seconds after feeding" , () => {
  tama.waiting();
  expect(tama.wait).toBe(true)
  jest.advanceTimersByTime(2002); 
  expect(tama.wait).toBe(false)
});
test("should see an alert message when the food level is 3 or below", () => {
  jest.advanceTimersByTime(7001); 
  expect(tama.message()).toEqual("I'm hungry!");
});
test ("should have a sleep level of 10 when created" ,() => {
  expect(tama.sleepLevel).toEqual(10);
});
test ("should have a sleep level of 7 after 3001 milliseconds", () => {
  jest.advanceTimersByTime(3001); 
  expect(tama.sleepLevel).toEqual(7);
});
});









