import FareCalculator from "./FareCalculator";
import FareCalculatorFactory from "./FareCalculatorFactory";
import Segment from "./Segment";

export default class Ride {
  segments: Segment[] = [];
  NORMAL_FARE = 2.1;
  OVERNIGHT_FARE = 3.9;
  SUNDAY_FARE = 2.9;
  OVERNIGHT_SUNDAY_FARE = 5;
  MIN_FARE = 10;

  constructor(readonly fareCalculator: FareCalculator) {}

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date));
  }

  finish() {
    let fare = 0;
    for (const segment of this.segments) {
      fare += this.fareCalculator.calculate(segment);
    }
    return fare < this.MIN_FARE ? this.MIN_FARE : fare;
  }
}
