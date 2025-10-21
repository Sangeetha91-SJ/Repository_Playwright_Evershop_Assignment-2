import { test, expect } from "@playwright/test";
 
test("General Assertions", async () => {
  const value = 10;
  const obj = { name: "Playwright", version: 1 };
 
  expect(value).toBe(10);
  expect(value).not.toBe(5);
  expect(value).toEqual(10);
  expect(value).not.toEqual(20);
  expect(value).toBeTruthy();
  expect(false).toBeFalsy();
  expect(null).toBeNull();
  expect(value).toBeDefined();
  expect(undefined).toBeUndefined();
  expect(NaN).toBeNaN();
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(10);
  expect(value).toBeLessThan(20);
  expect(value).toBeLessThanOrEqual(10);
  expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
  expect("hello playwright").toMatch(/playwright/);
  expect("typescript").not.toMatch("java");
  expect([1, 2, 3]).toContain(2);
  expect([{ a: 1 }]).toContainEqual({ a: 1 });
  expect("playwright").not.toContain("selenium");
  expect([1, 2, 3]).toHaveLength(3);
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("version", 1);
  expect(new Date()).toBeInstanceOf(Date);
  expect({ foo: "bar" }).toStrictEqual({ foo: "bar" });
  expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
});
 
 
test("Locator Assertions", async ({ page }) => {
  await page.goto("https://playwright.dev/");
 
  const getStarted = page.getByRole("link", { name: "Get started" });
 
  await expect(getStarted).toBeVisible();
  await expect(getStarted).not.toBeHidden();
  await expect(getStarted).toBeEnabled();
  await expect(page.getByRole("checkbox")).not.toBeChecked();//
  await expect.soft(getStarted).toBeEditable({ timeout: 30000 }).catch(() => {}); // catch exception in known case bug
  await expect(page.locator("text=Get started")).not.toBeEmpty();
  await expect(getStarted).not.toBeFocused();
  await expect(getStarted).toHaveAttribute("href", /docs/);
  await expect.soft(getStarted).toHaveClass(/navbar/);
  await expect(page.locator("a")).toHaveCount(44); // depends on site
  await expect(getStarted).toHaveCSS("color", "rgb(255, 255, 255)");
  await expect(getStarted).toHaveId(/.*/);
  await expect(getStarted).toHaveJSProperty("nodeName", "A");
  await expect(getStarted).toHaveRole("link");
  await expect(getStarted).toHaveText("Get started");
  await expect.soft(page.locator("input[name=q]")).toHaveValue("");
  await expect(page.locator("select")).toHaveValues([]); //we have seen in case of dropdown await page.selectOption( 'departmentSelect',['qa','dev'])
  await expect(getStarted).toContainText("Get");
});
 
 
test("Page Assertions", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL("https://playwright.dev/");
});
 