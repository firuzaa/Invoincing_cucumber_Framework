package cybertek.pages;

import cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {

        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[contains(text(),'BriteErpDemo')]")
    public WebElement BriteErpDemo;

    @FindBy(xpath = "//input[@id='login']")
    public WebElement email;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement loginBtn;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Invoicing')]")
    public WebElement invoicing;


}
