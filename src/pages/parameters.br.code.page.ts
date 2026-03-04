import { Page,Locator } from "@playwright/test";   
import { time } from "node:console";

export class ParametersBranchCodePage {
  constructor(private readonly page: Page) {}

  get parametersMenu(): Locator {
    return this.page.locator('div.MuiListItemText-root', { hasText: 'Parameters' });
  }

  get branchCodeLink(): Locator {
    return this.page.locator('div.MuiListItemText-root', { hasText: 'Branch Code' });
  }

  async openParametersMenu(): Promise<void> {
    await this.parametersMenu.waitFor({ state: "visible", timeout: 30000 });
    await this.parametersMenu.click();
  }

  async navigateToBranchCode() {
    await this.branchCodeLink.waitFor({ state: "visible" , timeout: 30000 });
    await this.branchCodeLink.click();
  }

  async verifyNavigationToBranchCode(): Promise<void> {
    await this.page.waitForURL(/.*\/branch-code\/list$/, { timeout: 30000 });
  }

}
