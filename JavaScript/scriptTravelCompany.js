//Validate email address on contact page
function validateEmail(email)
{	
	if (email == ""){
		return;
	}
	//Email format validation
	var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!emailPattern.test(email))  
	{  
		alert('Invalid email format. Please enter valid email');  
		return false;
	}  
}

//Booking page validation
function dateFill(date)
{
	if (date == "" || date == null){
		alert('Please fill in the date');
		return false;
	}

	return true;
}

//Name fields validation
function validateName(firstName, lastName)
{
	if (firstName == "" || firstName == null)
	{
		alert('First name must be filled');
		return false;
	}

	if(lastName == "" || lastName == null)
	{
		alert('Last name cannot be empty');
		return false;
	}

	return true;
}

//Only accept alphabetical for name
function nameIsAlphabetical (firstName, lastName)
{
	var alphabet = /^[a-zA-Z]+$/;
	if (firstName.match(alphabet))
	{	if (lastName.match(alphabet))
		{
			return true;
		}
		else 
		{
			alert('Names must be alphabetical only');
			return false;
		}
	}

	return true;
}


//Zipcode validation (USA standard) still not working
function validatePostalCode(postalCode)
{
	var numericExpression = /^[0-9]+$/;
	if (postalCode.match(numericExpression))
	{
		return true;
	} 
	else 
	{
		alert('Postal code uses Numbers only');
		return false;
		
	}

	return true;
}

//Adress validator for alphaNumeric still not working
function validateAddress (address)
{
	var alphaNum = /^[0-9a-zA-Z]+$/;
	if (address.match(alphaNum))
	{
		return true;
	} 
	else 
	{
		alert('Address not valid');
		return false;
	}

	return true;

}


/*JSON tours page to bring the information together when booking the trip
We wont use it probably
<script>
    window.addEventListener("DOMContentLoaded", function(e) {
        const orderButtons = document.querySelectorAll("button[data-book]");

        orderButtons.forEach(function(button) {

            button.addEventListener("click", function(e) {
                const button = e.currentTarget;
                const container = button.parentNode;

                const book = {
                    id: button.getAttribute("data-book"),
                    title: container.querySelector(".title").innerText,
                    price: container.querySelector(".price").innerText,
                    desc: container.querySelector(".desc").innerText
                };

                localStorage.setItem("book", JSON.stringify(book));

                const url = window.location.href.replace("tours.html", "book.html");
                window.location.href = url;

            });
        });
    });
</script>*/






//return validateName(document.book.firstName.value, document.book.lastName.value); return dateFill(document.book.date.value)"
function validateBookForm (firstName, lastName, date)
{
	return validateName(firstName, lastName)
		&& dateFill(date);
}