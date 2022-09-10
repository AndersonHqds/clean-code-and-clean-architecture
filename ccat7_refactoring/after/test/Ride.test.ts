import NormalFareCalculator from "../src/NormalFareCalculator";
import OverNightFareCalculator from "../src/OverNightFareCalculator";
import OverNightSundayFareCalculator from "../src/OverNightSundayFareCalculator";
import Ride from "../src/Ride";
import SpecialDayFareCalculator from "../src/SpecialDayFareCalculator";
import SundayFareCalculator from "../src/SundayFareCalculator";

let ride: Ride;

beforeEach(function () {
  const normalFareCalculator = new NormalFareCalculator();
  const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator);
  const overNightFareCalculator = new OverNightFareCalculator(
    sundayFareCalculator
  );
  const overNightSundayFareCalculator = new OverNightSundayFareCalculator(
    overNightFareCalculator
  );
  const specialDayFareCalculator = new SpecialDayFareCalculator(
    overNightSundayFareCalculator
  );

  ride = new Ride(specialDayFareCalculator);
});

test("should calculate the normal ride value", function () {
  ride.addSegment(10, new Date("2021-03-01T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(21);
});

test("should calculate the normal night ride value", function () {
  ride.addSegment(10, new Date("2021-03-01T23:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(39);
});

test("should calculate the normal ride value in a sunday", function () {
  ride.addSegment(10, new Date("2021-03-07T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(29);
});

test("should calculate the normal ride value in a sunday night", function () {
  ride.addSegment(10, new Date("2021-03-07T23:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(50);
});

test("should calculate the normal ride value at the day 10", function () {
  ride.addSegment(10, new Date("2021-03-10T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(15);
});

test("should calculate the normal ride value with an invalid distanceance", function () {
  expect(() => ride.addSegment(-3, new Date("2021-03-01T10:00:00"))).toThrow(
    new Error("Invalid Distance")
  );
});

test("should calculate the normal ride value with an invalid date", function () {
  expect(() => ride.addSegment(10, new Date("asdasd"))).toThrow(
    new Error("Invalid Date")
  );
});

test("should calculate the ride value with a min fare", function () {
  ride.addSegment(3, new Date("2021-03-01T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(10);
});
