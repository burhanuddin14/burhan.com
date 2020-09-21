function show()
	{
		var passw = document.getElementById('pass');
		if (document.getElementById('check').checked)
		{
			passw.setAttribute('type','text');
		}
		else
		{
			passw.setAttribute('type','password');
		}
	}

/*end*/
