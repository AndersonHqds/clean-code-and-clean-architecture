import NormalFareCalculator from "./NormalFareCalculator";
import OverNightFareCalculator from "./OverNightFareCalculator";
import OverNightSundayFareCalculator from "./OverNightSundayFareCalculator";
import Segment from "./Segment";
import SundayFareCalculator from "./SundayFareCalculator";

export default class FareCalculatorFactory {
  static create(segment: Segment) {
    if (segment.isOvernight() && !segment.isSunday()) {
      return new OverNightFareCalculator();
    }
    if (segment.isOvernight() && segment.isSunday()) {
      return new OverNightSundayFareCalculator();
    }
    if (segment.isSunday()) {
      return new SundayFareCalculator();
    }
    return new NormalFareCalculator();
  }
}
