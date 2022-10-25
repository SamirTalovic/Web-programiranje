
var i=0;
var promenljiva;
function Automobil()
{
	var a = Automobil.arguments;
	var sifra;
	var naziv;
	var cena;
	var url;
	var stanje;
	var kilometraza;
	var godina;
	var snaga;
	var boja;
	this.Konstruktor = function()
	{
		this.sifra=a[0];
		this.naziv=a[1];
		this.url=a[2];
		this.stanje=a[3];
		this.cena=a[4];
		this.kilometraza=a[5];
		this.godina=a[6];
		this.snaga=a[7];
		this.boja=a[8];
	}
	this.Prikaz = function()
	{
		var ceo = document.createElement("div");
		ceo.style.fontSize="18";
		var sif= document.createElement("p");
		sif.innerHTML = "Sifra: " + this.sifra;
		ceo.appendChild(sif);
		var naz= document.createElement("p");
		naz.innerHTML = "Naziv: " + this.naziv;
		ceo.appendChild(naz);
		var cen = document.createElement("p");
		cen.innerHTML = "Cena: " + this.cena;
		ceo.appendChild(cen);
		var kil = document.createElement("p");
		kil.innerHTML = "Kilometraza: " + this.kilometraza;
		ceo.appendChild(kil);
		var god = document.createElement("p");
		god.innerHTML = "Godina proizvodnje: " + this.godina;
		ceo.appendChild(god);
		var snag = document.createElement("p");
		snag.innerHTML = "Snaga motora: " + this.snaga;
		ceo.appendChild(snag);
		var boj = document.createElement("p");
		boj.innerHTML = "Boja: " + this.boja;
		ceo.appendChild(boj);
		return ceo;
	}
	this.Konstruktor();
}

function ListaAutomobila()
{
	var galerija = Array();
	this.roditelj;
	this.prikazi = function(event)
	{
		var obj = document.getElementById("opis");
		var obj1 = event.currentTarget;
		var marka = obj1.innerHTML;
		var j=0;
		while(galerija[j].naziv!=marka){j++;}
		obj.appendChild(galerija[j].Prikaz());
		var obj2 = document.getElementById("slika");
		var obj3 = document.createElement("img");
		obj3.height="298";
		obj3.width="320";
		obj3.src=galerija[j].url;
		obj2.appendChild(obj3);
	}
	this.brisi = function()
	{
		var obj = document.getElementById("opis");
		obj.innerHTML=null;
		var obj2 = document.getElementById("slika");
		obj2.innerHTML=null;
	}
	this.rezervisi = function(event)
	{
		var obj = event.currentTarget;
		var marka = obj.innerHTML;
		var j=0;
		while(galerija[j].naziv!=marka){j++;}
		if(galerija[j].stanje=="rezervisan")
		{
			obj.style.color=null;
			galerija[j].stanje="nerezervisan";
		}
		else
		{
			obj.style.color="red";
			galerija[j].stanje="rezervisan";
		}

	}
	this.Dodaj = function(si,na,ur,st,c,k,g,s,b)
	{
		galerija.push(new Automobil(si,na,ur,st,c,k,g,s,b));
		this.stavka = document.createElement("span");
		this.stavka.id="stav"+i;i++;
		this.stavka.innerHTML=na;
		this.stavka.onmouseover=this.prikazi;
		this.stavka.onmouseout=this.brisi;
		this.stavka.onclick=this.rezervisi;
		this.stavka.style.fontSize="30"; 
		this.stavka.style.lineHeight="150%";
		var ob=document.getElementById("list");
		ob.appendChild(this.stavka);
		ob.appendChild(document.createElement("br"));
	}
	this.PrikaziListu = function()
	{
		this.roditelj = "sadrzaj";
		var ceo = document.createElement("div");
		ceo.style.height="100%";
		ceo.style.width="100%";
		var levi = document.createElement("div");
		levi.style.height="100%";
		levi.style.width="50%";
		levi.style.cssFloat="left";
		//levi.style.backgroundColor="blue";
		var mestoSlika = document.createElement("div");
		mestoSlika.style.height="60%";
		mestoSlika.style.width="100%";
	//	mestoSlika.style.backgroundColor="red";
		mestoSlika.id="slika";
		levi.appendChild(mestoSlika);
		var mestoOpis = document.createElement("div");
		mestoOpis.id="opis";
		mestoOpis.style.height="40%";
		mestoOpis.style.width="100%";
		//mestoOpis.style.backgroundColor="red";
		levi.appendChild(mestoOpis);
		ceo.appendChild(levi);
		var lista = document.createElement("div");
		lista.id="list";
		lista.style.height="100%";
		lista.style.width="50%";
		lista.style.cssFloat="left";
	//	lista.style.backgroundColor="red";
		ceo.appendChild(lista);
		document.getElementById(this.roditelj).appendChild(ceo);
	
	}
}
