import { test } from "@playwright/test";
import { getTestData } from "./utils/excelutils.ts";
import { FlightBookingPage } from "../pages/FlightBookingPage.ts";
 
interface TestData {
  mobileNumber: string | number;
  accountType: string;
  fromInputName: string;
  fromOption: string;
  toInputName: string;
  toOption: string;
  departDate: number;
  returnDate: number;
  fareType: string;
}
 
const testData = getTestData("flightData.xlsx", "Sheet1") as TestData[];
console.log(testData); // To print excel in json format
 
for (const data of testData) {
  test(`@BookingFlight booking for ${data.fareType}`, async ({ page }) => {
    const flightPage = new FlightBookingPage(page);
 
    await flightPage.navigateflightbookingpage("https://www.makemytrip.com/");
    await flightPage.enterMobileNumber(String(data.mobileNumber));
    await flightPage.selectAccount(String(data.accountType));
 
 
    await flightPage.selectFromCity( String(data.fromOption));
    await flightPage.selectToCity(String(data.toOption));
 
 
   await flightPage.selectdeptDate(Number(data.departDate)); // today
   await flightPage.selectRetDate(Number(data.returnDate)); // tomorrow
    await flightPage.Faretype(String(data.fareType));
    await flightPage.searchFlights();
  });
}