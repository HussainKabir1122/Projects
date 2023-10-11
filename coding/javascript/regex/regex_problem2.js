function is_creditCard(str)
{
 regexp = /[300-305]\d{11}|36\d{12}|38\d{12}/g;

  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}
const regex = /(30[0-5]\d{11})|(36\d{12})|(38\d{12})/g;
const text ="37828224630006134";
const matches = text.match(regex);
const testing = regex.test(text);

console.log(matches)
console.log(testing)
console.log(is_creditCard("246310006"));

console.log(is_creditCard("37828224630006134"));
