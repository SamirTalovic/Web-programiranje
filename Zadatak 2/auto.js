
 function Automobil()
 {
	var i=0;
	var slika;
	var a = Automobil.arguments;
	var sifra;
	var naziv;
	var slike = new Array();
	var cena;
	var kilometraza;
	var snaga;
	var boja;
	var roditelj;
	
	this.Prikazi = function(id)
	{
		this.roditelj=id;
		var glavni = document.createElement("div");
		glavni.style.height="50%";
		glavni.style.width="100%";
		glavni.style.borderBottom="1px solid black";
		var levi = document.createElement("div");
		levi.style.height="100%";
		levi.style.width="50%";
		levi.style.cssFloat="left";
		var mestoSlika = document.createElement("div");
		mestoSlika.style.height="85%";
		mestoSlika.id="mesto";
		mestoSlika.style.width="100%";
		mestoSlika.style.cssFloat="left";
		levi.appendChild(mestoSlika); 
		glavni.appendChild(levi);
			slika = document.createElement("img");
			slika.id="slicka";
			slika.setAttribute("src",slike[0]);
			slika.setAttribute("width","80%");
			slika.setAttribute("height","90%");
			tekuca=slike[0];
			mestoSlika.appendChild(slika);
		var mestoPodaci = document.createElement("div");
		mestoPodaci.style.height="100%";
		mestoPodaci.style.width="50%";
		mestoPodaci.style.cssFloat="left";
		mestoPodaci.style.fontSize="20";
		mestoPodaci.style.lineHeight="200%";
		mestoPodaci.style.fontWeight="500"
				var sif = document.createElement("span");
				sif.innerHTML = "Sifra: " + this.sifra;
				mestoPodaci.appendChild(sif);
				mestoPodaci.appendChild(document.createElement("br"));
				var naz = document.createElement("span");
				naz.innerHTML = "Naziv: " + this.naziv;
				mestoPodaci.appendChild(naz);
				mestoPodaci.appendChild(document.createElement("br"));
				var cen = document.createElement("span");
				cen.innerHTML = "Cena: " + this.cena;
				mestoPodaci.appendChild(cen);
				mestoPodaci.appendChild(document.createElement("br"));
				var kil = document.createElement("span");
				kil.innerHTML = "Kilometraza : " + this.kilometraza;
				mestoPodaci.appendChild(kil);
				mestoPodaci.appendChild(document.createElement("br"));
				var sn = document.createElement("span");
				sn.innerHTML = "Snaga: " + this.snaga;
				mestoPodaci.appendChild(sn);
				mestoPodaci.appendChild(document.createElement("br"));
				var boj = document.createElement("span");
				boj.innerHTML = "Boja: " + this.boja;
				mestoPodaci.appendChild(boj);
				mestoPodaci.appendChild(document.createElement("br"));
		glavni.appendChild(mestoPodaci);
		var mestoDugme = document.createElement("div");
		mestoDugme.style.height="15%";
		mestoDugme.style.width="100%";
		mestoDugme.style.cssFloat="left";
		var dugme = document.createElement("input");
		dugme.setAttribute("type","button");
		dugme.setAttribute("value","preveous");
		dugme.onclick=this.promeniSlikuLevo;
		var dugme1 = document.createElement("input");
		dugme1.setAttribute("type","button");
		dugme1.setAttribute("value","next");
		dugme1.onclick=this.promeniSlikuDesno;
		mestoDugme.appendChild(dugme);
		mestoDugme.appendChild(dugme1);
		levi.appendChild(mestoDugme);
	
		document.getElementById(this.roditelj).appendChild(glavni);
	}
	
	this.Konstruktor = function()
	{
		this.sifra = a[0];
		this.naziv = a[1];
		this.cena = a[2];
		this.kilometraza = a[3];
		this.snaga = a[4];
		this.boja = a[5];
		var broj = a.length;
		var i=6;
		for(i;i<broj;i++)
		{
			slike.push(a[i]);
		}
	}
	
	this.Validacija = function()
	{
		if(this.sifra==null || this.naziv==null || this.cena==null)
			alert("Nisu upisani potrebni atributi");
	}
	
	this.promeniSlikuDesno = function()
	{
		if(--i>=0)
		{
			slika.setAttribute("src",slike[i]);
		}
		else
		{
			i=slike.length-1;
			slika.setAttribute("src",slike[i]);
		}
		mestoSlika.appendChild(slika);
	}
	
	this.promeniSlikuLevo = function(event)
	{
		if(++i<slike.length)
		{	
			slika.setAttribute("src",slike[i]);
		}
		else
		{
			i=0;
			slika.setAttribute("src",slike[i]);
		}
		mestoSlika.appendChild(slika);		
	}
	this.Konstruktor();
	
 }	
