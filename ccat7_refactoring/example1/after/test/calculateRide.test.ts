import { calculateRide } from "../src/calculateRide";

test("should calculate the normal ride value", function () {
  const segments = [{ distance: 10, date: new Date("2021-03-01T10:00:00") }];
  const fare = calculateRide(segments);
  expect(fare).toBe(21);
});

test("should calculate the night time ride value", function () {
  const segments = [{ distance: 10, date: new Date("2021-03-01T23:00:00") }];
  const fare = calculateRide(segments);
  expect(fare).toBe(39);
});

test("should calculate the ride value in a sunday", function () {
  const segments = [{ distance: 10, date: new Date("2021-03-07T10:00:00") }];
  const fare = calculateRide(segments);
  expect(fare).toBe(29);
});

test("should calculate the ride value in a sunday night", function () {
  const segments = [{ distance: 10, date: new Date("2021-03-07T23:00:00") }];
  const fare = calculateRide(segments);
  expect(fare).toBe(50);
});

test("should calculate the normal ride value with an invalid distanceance", function () {
  const segments = [{ distance: -3, date: new Date("2021-03-01T10:00:00") }];
  expect(() => calculateRide(segments)).toThrow(new Error("Invalid Distance"));
});

test("should calculate the normal ride value with an invalid date", function () {
  const segments = [{ distance: 10, date: new Date("asdasd") }];
  expect(() => calculateRide(segments)).toThrow(new Error("Invalid Date"));
});

test("should calculate the ride value with a min fare", function () {
  const segments = [{ distance: 3, date: new Date("2021-03-01T10:00:00") }];
  const fare = calculateRide(segments);
  expect(fare).toBe(10);
});
